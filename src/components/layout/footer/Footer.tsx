//@ts-nocheck
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
//
import { variantParagraph } from '@/components/ui/pargraph';
import MenuFooterFixed from '../../extras/menuFooterFixed/MenuFooter';
export default async function Footer() {
    const data = await fetch(`${process.env.HOST_URL}/api/footer/[slug]`, { cache: 'no-store' });
    const res = await data.json();
    return (
        <>
            {res && (
                <div className="hidden lg:flex pt-8 mt-4 border-t-[1px] broder-gray-400 w-full">
                    <footer className="flex flex-col justify-between items-center max-w-[1675.97px] mx-auto">
                        {/* SECTION TOP START */}
                        <div className="w-full grid grid-cols-12 py-8 grid-rows-1 gap-2 px-4 items-start">
                            {/* ADDERSS SOCIAL START */}
                            <div className="mb-4 md:mb-0 col-span-12 lg:col-span-3 flex flex-col gap-y-4">
                                {res?.address?.map((address) => (
                                    <div className="flex flex-col" key={address.id}>
                                        <div className="flex flex-col items-start justify-between gap-y-2">
                                            <Link href="/">
                                                <h3>
                                                    <address.logo />
                                                </h3>
                                            </Link>
                                        </div>
                                        <div>
                                            <p className={variantParagraph({ textBody: 'default' })}>
                                                {address.address}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                <div className="w-full lg:w-3/5 flex justify-center items-center">
                                    <ul className="flex items-center justify-between gap-x-2">
                                        {res?.social?.map((social) => (
                                            <li key={social.id}>
                                                <Link href={social.path}>
                                                    <social.icon />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* ADDERSS SOCIAL END */}
                            {/* SECTION CATEGORY START */}
                            <div className="col-span-12 lg:col-span-6 flex justify-around gap-x-2">
                                {res?.menu?.map((menu) => (
                                    <div className="flex flex-col" key={menu.id}>
                                        <h3
                                            className={`${variantParagraph({
                                                textBody: 'default',
                                            })} mb-4`}
                                        >
                                            {menu.titleHed}
                                        </h3>
                                        <ul>
                                            {menu.item.map((itemMenu) => (
                                                <li key={itemMenu.id}>
                                                    <Link
                                                        href={itemMenu.path}
                                                        className={variantParagraph({
                                                            textBody: 'default',
                                                        })}
                                                    >
                                                        {itemMenu.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            {/* SECTION CATEGORY END */}
                            {/* NAMAD START */}
                            <div className="col-span-12 lg:col-span-3 flex justify-normal md:justify-end items-center">
                                <div className="w-full md:w-1/2 lg:w-full flex items-center justify-center gap-x-2">
                                    {res?.namad?.map((nama) => (
                                        <Link
                                            key={nama.id}
                                            href={nama.path}
                                            className="flex border-[1px] border-gray-400  h-[109px] w-[109px] rounded-lg"
                                        >
                                            <div className="h-full w-full p-2">
                                                <Image
                                                    src={nama.img}
                                                    width={75}
                                                    height={75}
                                                    alt=""
                                                    className="h-[75px] w-[75px]"
                                                />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {/* NAMAD END */}
                        </div>
                        {/* SECTION TOP END */}
                        {/* SECTION BOTTOM SART */}
                        <div className="w-full flex items-center justify-center py-4 border-t-[1px] border-gray-400 px-4">
                            <p className={variantParagraph({ textBody: 'default' })}>{res?.policy}</p>
                        </div>
                        {/* SECTION BOTTOM END */}
                    </footer>
                </div>
            )}
            <MenuFooterFixed />
        </>
    );
}
