const parseEnv = () => {
    const prefix = 'RSS_';
    
    Object.keys(process.env).forEach((key) => {
        if (key.startsWith(prefix)) {
            const value = process.env[key];
            const name = key.substring(prefix.length);
            console.log(`RSS_${name}=${value}`);
        }
    });
};

parseEnv();