const fs = require('fs');


//takes in the user input and writes the html files
const writeFile = async fileContent => {
    return await new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// copies the css file to dist
const copyFile = async () => {
    return new Promise(async (resolve, reject) => {
         fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = {
    writeFile,
    copyFile
};