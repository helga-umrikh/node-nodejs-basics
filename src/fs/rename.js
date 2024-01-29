import fs from 'fs';

const rename = async () => {
    const pathToProperFileName = './src/fs/files/properFilename.md';
    const pathTowrongFileName = './src/fs/files/wrongFilename.txt';

    if ((fs.existsSync(pathToProperFileName)) && (!fs.existsSync(pathTowrongFileName))) {
        throw new Error('FS operation failed');
    }

    fs.rename(pathTowrongFileName,pathToProperFileName, (err) => {
        if (err) {
            throw new Error(`FS operation failed`)
        }
    });
};

await rename();