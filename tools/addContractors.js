const fs = require("fs");
require("dotenv").config();

// Function to add contractors to the database
const addContractor = async (contractor) => {
  const config = process.env;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contractor),
  };

  const response = await fetch(
    `http://127.0.0.1:8001/api/v1/contractors-scrapped/`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  return response;
};

// Function to read contractors data from JSON file
function readContractorsFromJSON(filePath) {
  try {
    // Read the content of the JSON file synchronously
    const jsonData = fs.readFileSync(filePath, "utf-8");

    // Parse the JSON data into a JavaScript object
    const contractors = JSON.parse(jsonData);

    return contractors;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return [];
  }
}

const jsonFilePath = "./contractors.json"; // Update with the actual file path
const contractors = readContractorsFromJSON(jsonFilePath);

// Function to add contractors to the database
const updateContractors = async () => {
  for (const contractor of contractors) {
    try {
      const response = await addContractor(contractor);
      console.log(response);
    } catch (error) {
      console.error("Error adding contractor:", error);
    }
  }
};

updateContractors();
