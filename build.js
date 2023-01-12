const pug = require('pug');
const fs = require('fs');

const inputFile = './src/index.pug';
const outputFile = './dist/app.html';
const html = pug.renderFile(inputFile);

fs.writeFileSync(outputFile, html);
console.log(`Compilado ${inputFile} a ${outputFile}`);
