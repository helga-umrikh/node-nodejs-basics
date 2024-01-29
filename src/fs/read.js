import fs from 'fs'

const read = async () => {
    const pathToFile = './src/fs/files/fileToRead.txt';

    if(!fs.existsSync(pathToFile)) {
        throw new Error('FS operation failed');
    }

    fs.readFile(pathToFile, 'utf8', (err, data) => {
        if (err) {
            throw new Error('FS operation failed')
        }

        console.log(data)
    })
};

await read();