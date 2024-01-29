import fs from 'fs';

const remove = async () => {
    const filePath = './src/fs/files/fileToRemove.txt';

    if(fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) {
                throw new Error('FS operation failed');
            };
        })
    } else {
        throw new Error('FS operation failed');
    }
};

await remove();