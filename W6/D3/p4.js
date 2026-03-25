//file written using fs/promises
const fs = require("fs/promises");
const path = require("path");

async function runPromisesBasedFileFlow() {
  const filePath = path.join(__dirname, "Promises-note.txt");

  try {
    
    await fs.writeFile(
      filePath,
      "Written using fs/promises. This works with async/await"
    );
    console.log("File written using fs/promises");

    const content = await fs.readFile(filePath, "utf-8");
    console.log(content);

  } catch (error) {
    console.log("Promises based fs error:", error.message);
  }
}

runPromisesBasedFileFlow();