const less = require('less');
const fs = require('fs');
const path = require('path');
const util = require('util');

async function getAllFiles(path) {
  let files = await util.promisify(fs.readdir, path);

  console.log(files);
}

getAllFiles('./src');