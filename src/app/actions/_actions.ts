'use server';

import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';

export const register = async (data: any) => {
    console.log(data);

    revalidatePath('/sign-up');
};

// CAROUSEL HOME

export const carouselHome = async () => {
    const enpoint = path.join(process.cwd(), '/src/data/carouselHome.json');
    const data = await fs.readFile(enpoint, { encoding: 'utf-8' });
    revalidatePath('/');
    return JSON.parse(data);
};
