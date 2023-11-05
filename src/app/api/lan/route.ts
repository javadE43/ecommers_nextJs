import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
    // const filePath = path.join(process.cwd(), '/src/data/language.json');
    // const data = fs.readFileSync(filePath, 'utf8');
    // let submissions = JSON.parse(data);
    // return NextResponse.json({
    //     data: submissions,
    //     message: 'This message has been successfully sent',
    // });
}
