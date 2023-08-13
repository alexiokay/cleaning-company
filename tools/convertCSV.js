const fs = require("fs");
const csv = require("csv-parser");

// Path to the CSV file
const csvFilePath = "./contractors.csv"; // Update with the actual file path

// Read CSV file and convert to JSON
const contractors = [];

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on("data", (row) => {
    if (row.reviewCount === "") {
      row.reviewCount = 0;
    }
    contractors.push(row);
  })
  .on("end", () => {
    // Write JSON data to a file
    const jsonFilePath = "./contractors.json"; // Update with desired JSON file path

    fs.writeFileSync(jsonFilePath, JSON.stringify(contractors, null, 2));

    console.log("CSV to JSON conversion completed.");
  });
