require("colors");
const fs = require("fs");
const templates = require("./templates");

const handlerName = process.argv[2];

if (!handlerName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log("Creating Component Templates with name: " + handlerName);

const componentDirectory = `./src/handlers/${handlerName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${handlerName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(handlerName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${handlerName}${template.extension}`,
    template.content
  );
});

console.log(
  "Successfully created component under: " + componentDirectory.green
);
