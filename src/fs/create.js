import fs from 'fs';

const create = async () => {
    const filePath = './fresh.txt';

    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.promises.writeFile('./fresh.txt', 'I am fresh and young')
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();