import fs from 'fs/promises';
import { userAgent } from 'next/server';
import path from 'path';

export async function GET(req: Request) {
    const enpoint = path.join(process.cwd(), `/src/data/menuFooterMobile.json`);
    const data = await fs.readFile(enpoint, { encoding: 'utf-8' });
    const res1 = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' });
    const res3 = await fetch('https://jsonplaceholder.typicode.com/todos', { cache: 'no-store' });
    return Response.json(JSON.parse(data));
}
