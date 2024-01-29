import fs from 'fs-extra';

const copy = async (src, destination) => {

    if (fs.existsSync(destination)) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.copy(src, destination);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

const srcFolder = './src/fs/files';
const destinationFolder = './src/fs/files_copy';

await copy(srcFolder, destinationFolder);
