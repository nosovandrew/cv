import fs from 'fs';
import path from 'path';

const imagesDirectory = path.join(process.cwd(), 'public/assets/experience');

// get image paths
export const getProjectCoverPaths = () => {
    const fileNames = fs.readdirSync(imagesDirectory);

    return fileNames.map((filename) => {
        return {
            filename: filename.replace('.png', ''),
            path: `/assets/experience/${filename}`,
        };
    });
};