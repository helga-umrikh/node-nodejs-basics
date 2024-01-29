import fs from 'fs';

const list = async () => {
    const folderPath = './src/fs/files';

    fs.readdir(folderPath, (err, files) => {
        const arrListOfFiles = [];
        if (err) {
            throw new Error('FS operation failed');
        }

        files.forEach((file) => {
            arrListOfFiles.push(file);
        });

        console.log(arrListOfFiles)
    })

};

await list();