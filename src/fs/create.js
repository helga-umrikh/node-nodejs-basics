import fs from 'fs';

const create = async () => {
    try {
        await fs.promises.writeFile('./fresh.txt', 'I am fresh and young')
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();