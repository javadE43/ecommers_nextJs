//@ts-nocheck

import Link from 'next/link';
import React from 'react';

//

import { variantParagraph } from '@/components/ui/pargraph';

export default async function MenuFooterFixed() {
    const data = await fetch('http://localhost:3000/api/m', { cache: 'no-store' });
    const res: [] = await data.json();
    return (
        <>
            {res.length > 0 && (
                <div className="fixed h-[64px] min-w-[320px] w-full max-w-[1675.97px] bottom-0 bg-white flex items-center justify-around lg:hidden">
                    {res?.map((item) => (
                        <div key={item.id}>
                            <Link href="/" className="flex flex-col items-center justify-between gap-y-2">
                                <span>
                                    <item.icone />
                                </span>
                                <span className={variantParagraph({ textBody: 'text_body_2_strong' })}>
                                    {item.title}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
