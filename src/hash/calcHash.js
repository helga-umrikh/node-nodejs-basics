import crypto  from 'crypto';
import  fs  from 'fs';

const calculateHash = async (alg, fp) => {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash(alg);
        const stream = fs.createReadStream(fp);
    
        stream.on('data', (data) => {
            hash.update(data);
        });
    
        stream.on('end', () => {
            const calculatedHash = hash.digest('hex');
            resolve(calculatedHash);
        });
    
        stream.on('error', (error) => {
            reject(error);
        });
    });
};

const filePath = './src/hash/files/fileToCalculateHashFor.txt';
const algorithm = 'sha256';

await calculateHash(algorithm, filePath)
    .then((hash) => {
        console.log(hash)
    })
    .catch((err) => {
        throw new Error(err);
    })