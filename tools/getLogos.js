const fs = require("fs");
const cheerio = require("cheerio");

// Function to scrape logo URL from a contractor's website
const scrapeLogoUrl = async (websiteUrl) => {
  try {
    const response = await fetch(websiteUrl);
    const html = await response.text();
    const $ = cheerio.load(html);

    let logoUrl = null;

    // Find all elements with "src" attribute
    const elementsWithSrc = $("[src]");

    // Loop through the elements and get the first valid logo URL
    elementsWithSrc.each((index, element) => {
      const src = $(element).attr("src");
      if (src && src.toLowerCase().includes("logo")) {
        logoUrl = src;
        return false; // Exit loop once a logo URL is found
      }
    });

    // Find all elements with a class containing "logo"
    const elementsWithLogoClass = $("[class]");

    // Loop through the elements and get the first valid logo URL from class attribute
    elementsWithLogoClass.each((index, element) => {
      const classList = $(element).attr("class");
      if (classList && classList.toLowerCase().includes("logo")) {
        if (logoUrl === null) {
          logoUrl = $(element).attr("src");
          return false; // Exit loop once a logo URL is found
        }
        const style = $(element).attr("style");
        if (style && style.includes("background-image:")) {
          const match = style.match(/url\(['"]?([^'"]+)['"]?\)/i);
          if (match) {
            logoUrl = match[1];
            return false; // Exit loop once a logo URL is found
          }
        }
      }
    });

    // Convert relative URL to absolute URL
    if (logoUrl && !logoUrl.startsWith("http")) {
      logoUrl = urlJoin(websiteUrl, logoUrl);
    }

    return logoUrl;
  } catch (error) {
    console.error("Error scraping logo URL:", error);
    return null;
  }
};

// Function to read contractors data from JSON file
function readContractorsFromJSON(filePath) {
  try {
    // Read the content of the JSON file synchronously
    const jsonData = fs.readFileSync(filePath, "utf-8");

    // Parse the JSON data into a JavaScript object
    const contractors = JSON.parse(jsonData);

    // Add the website position and logo URL to each contractor object
    const updatedContractors = contractors.map((contractor, index) => {
      const updatedContractor = { ...contractor };
      updatedContractor.websitePosition = index; // Add the website position
      return updatedContractor;
    });

    return updatedContractors;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return [];
  }
}

// Function to write contractors data to JSON file
function writeContractorsToJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log("Contractors data updated in JSON file.");
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
}

const jsonFilePath = "./contractors.json"; // Update with the actual file path
const contractors = readContractorsFromJSON(jsonFilePath);

// Iterate over the contractors and scrape logo URLs
const main = async () => {
  for (const contractor of contractors) {
    const logoUrl = await scrapeLogoUrl(contractor.website);
    contractor.logoUrl = logoUrl; // Add the logo URL to the contractor object
    console.log(`Logo URL for ${contractor.title}: ${logoUrl}`);
    // You can now do something with the logo URL and contractor data
  }

  // Write the updated contractors data back to the JSON file
  writeContractorsToJSON(jsonFilePath, contractors);
};

main();
