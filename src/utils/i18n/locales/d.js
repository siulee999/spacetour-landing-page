import fs from "fs";

const navigation = [
  { title: "home", route: "#home" },
  { title: "explore", route: "#explore" },
  { title: "destination", route: "#destination" },
];

const filePath = './src/utils/i18n/locales/en.json';

fs.writeFile(filePath, JSON.stringify(navigation, null, 2), (err) => {
  if (err) {
    console.error("Error writing file:", err);
    process.exit(1);
  } else {
    console.log("File en.json has been saved successfully!");
    process.exit(0);
  }
});