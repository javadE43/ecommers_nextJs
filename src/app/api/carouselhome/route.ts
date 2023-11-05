import fs from 'fs/promises';
import path from 'path';

export async function GET(req: Request) {
    const enpoint = path.join(process.cwd(), '/src/data/carouselHome.json');
    const data = await fs.readFile(enpoint, { encoding: 'utf-8' });
    // const res1 = await fetch('https://jsonplaceholder.typicode.com/comments', { cache: 'no-store' });
    // const res2 = await fetch('https://jsonplaceholder.typicode.com/photos', { cache: 'no-store' });
    return Response.json(JSON.parse(data));
}
