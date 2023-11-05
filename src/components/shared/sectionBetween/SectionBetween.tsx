import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MoveLeft } from 'lucide-react';
import { sectionBetweenData } from '@/data/sectionBetween';
export default function SectionBetween() {
    return (
        <section className="@container overflow-hidden w-full justify-between rounded-lg flex flex-col lg:flex-row px-4 py-4 lg:px-8 lg:py-8 bg-[#f1f0f2] h-[151px] lg:h-[110px]">
            {sectionBetweenData?.map((item) => (
                <>
                    {/* SECTION LEFT START */}
                    <div className="flex items-center gap-x-4 h-1/2 lg:h-auto">
                        <div className="flex gap-x-2 items-center justify-center">
                            {item?.dec.map((dec) => (
                                <span>
                                    <Link href={dec.path}>
                                        <Image src={dec?.img} alt="" width={53} height={53} className="object-cover" />
                                    </Link>
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* SECTION LEFT END */}

                    {/* SECTION RIGHT START */}
                    <div className="flex flex-nowrap gap-x-2 items-center h-1/2 lg:h-auto">
                        <div className="w-full flex items-center gap-x-4">
                            {item.items?.map((linkL) => (
                                <span className="relative h-[53px] w-[52px] lg:h-[58px] lg:w-[58px] p-2 bg-white rounded-full">
                                    <Link href="/" className="rounded-full">
                                        <Image
                                            src={linkL.img}
                                            alt=""
                                            width={53}
                                            height={53}
                                            className="rounded-full object-cover"
                                        />
                                    </Link>
                                    <span className="absolute p-1 -bottom-2 -right-2 rounded-xl bg-bg_base_red text-white">
                                        {linkL.discount}%
                                    </span>
                                </span>
                            ))}
                        </div>
                        <div className="p-4 rounded-xl flex items-center gap-x-2">
                            <Link href="/" className="flex flex-nowrap bg-white rounded-lg p-2 gap-x-2">
                                <span className="whitespace-nowrap">{item.textButton}</span>
                                <span>
                                    <MoveLeft />
                                </span>
                            </Link>
                        </div>
                    </div>
                    {/* SECTION RIGHT END */}
                </>
            ))}
        </section>
    );
}
