'use client';
import React, { ReactNode, useEffect, useRef, useState, useLayoutEffect } from 'react';
import Link from 'next/link';

//

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { useWindowScroll } from '@uidotdev/usehooks';
import { useWindowSize } from '@uidotdev/usehooks';

//

import { SdebarItemssubMenu, SidebarItems, SubMenuThree, SubMenuTow, links } from '../../../data/sidebarMenu';
import { Separator } from '../../ui/separator';
import { variantParagraph } from '../../ui/pargraph';
import { Icones } from '@/components/shared/icons/Icons';

//

export default function List() {
    const [{ x, y }, scrollTo] = useWindowScroll();
    const windowsize = useWindowSize();

    const [indicatoreWidth, setIndicatoreWidth] = useState<number>();
    const [indicatoreLeft, setIndicatoreLeft] = useState<number>();
    const [hide, setHide] = useState<string>(links[0].id);

    const parentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (windowsize.width && windowsize.width > 1023) {
            if (y && y > 220) {
                const m = document.getElementById('headerـlayoutـfixedJpadding') as HTMLElement;
                m.style.paddingTop = '130px';
            } else {
                const m = document.getElementById('headerـlayoutـfixedJpadding') as HTMLElement;
                m.style.paddingTop = '160px';
            }
        } else {
            const m = document.getElementById('headerـlayoutـfixedJpadding') as HTMLElement;
            m.style.paddingTop = '60px';
        }
    }, [y, windowsize]);

    return (
        <>
            <motion.div
                className={`duration-300 px-4 hidden  items-center w-full ${
                    y !== null && y > 220
                        ? '-translate-y-[100%] h-0 opacity-0 pointer-events-none select-none'
                        : 'translate-y-[0] h-[40px]  pointer-events-all select-all'
                }  lg:flex @8xl:w-full  dark:bg-[#121212]`}
            >
                <nav className="w-full flex h-[40px] px-4 d__rtl">
                    {/* CONTAINER MAIN MENU ALL CATEGORIS START */}
                    <div className="flex relative self-stretch d__rtl items-center" ref={parentRef}>
                        {/* CONTAINER ALL MENU START*/}
                        <div
                            className="group flex relative pl-[12px] d__rtl h-full"
                            data-modal="false"
                            onMouseEnter={(e) => {
                                setIndicatoreWidth(e.currentTarget.offsetWidth);
                                setIndicatoreLeft(e.currentTarget.offsetLeft);
                                e.currentTarget.setAttribute('data-modal', 'true');
                                window.document.body.style.overflow = 'hidden';
                            }}
                            onMouseLeave={(e) => {
                                setIndicatoreWidth(0);
                                setIndicatoreLeft(0);
                                e.currentTarget.setAttribute('data-modal', 'false');
                                window.document.body.style.overflowY = 'auto';
                            }}
                        >
                            {/* WRAPER START */}
                            <div className="relative d__rtl cursor-pointer flex h-full leading-0">
                                <span
                                    className={`${variantParagraph({
                                        textBody: 'text_body_2_strong',
                                    })} flex items-center justify-center flex-nowrap gap-x-1`}
                                >
                                    <div>
                                        <Menu height={20} width={20} />
                                    </div>
                                    دسته بندی کالاها
                                </span>
                                {/*WARPER MODAL MENU START */}
                                <div
                                    className={`transition-all d__rtl duration-500 opacity-0 bg-white h-0 w-auto z-9 pointer-events-none absolute top-[40px] shadow-boxShadow_Bottom_2 rounded-md group-data-[modal=true]:h-[calc(100vh-168px-50px)] max-h-[550px] group-data-[modal=true]:opacity-100 group-data-[modal=true]:z-9999999 group-data-[modal=true]:pointer-events-auto`}
                                >
                                    <div className="w-full h-full d__rtl flex">
                                        {/* LINK MENUE START */}
                                        <div className="scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-white overflow-x-hidden d__ltl overflow-auto bg-[#f5f5f5] border-l-[1px] border-[#f0f0f1] w-[200px]">
                                            <div className="d__rtl bg-[#f5f5f5] w-full">
                                                {links?.map((item) => (
                                                    <Link
                                                        href="/"
                                                        key={item.id}
                                                        className={`group px-2 bg-transparent ${
                                                            hide === item.id ? 'bg-white' : 'bg-transparent'
                                                        } w-full min-h-[66.69px] max-h-[300px] flex justify-end overflow-hidden`}
                                                    >
                                                        <div
                                                            onMouseEnter={() => setHide(item.id)}
                                                            className={`w-full text-bg_base_dark ${
                                                                hide === item.id
                                                                    ? 'text-bg_base_red'
                                                                    : 'text-bg_base_dark'
                                                            } flex justify-start items-center h-auto`}
                                                        >
                                                            <span>{item?.icon}</span>
                                                            <div>
                                                                <span
                                                                    className={variantParagraph({
                                                                        textBody: 'default',
                                                                    })}
                                                                >
                                                                    {item.title}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                        {/* LINK MENUE END */}
                                        {/* CONTENT MENUE START */}
                                        <div className="p-[20px] pb-0  scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-white overflow-x-hidden d__ltl flex-grow h-full">
                                            {/* ITEM CONTENT START */}
                                            <div className="d__rtl flex-grow h-full">
                                                {links?.map((item) => (
                                                    <div
                                                        className=" w-full h-full "
                                                        key={item.id}
                                                        style={
                                                            hide === item.id ? { display: 'flex' } : { display: 'none' }
                                                        }
                                                    >
                                                        <div className="flex flex-col flex-1 flex-grow h-full">
                                                            {/* LINK START */}
                                                            <Link href="/about" className="min-w-[220px] pb-6">
                                                                <div
                                                                    className={`${variantParagraph({
                                                                        textBody: 'default',
                                                                    })} text-cyan-500 text-start flex gap-x-3 items-center`}
                                                                >
                                                                    <span>{item?.linkAllVeiw}</span>
                                                                    <ChevronLeft />
                                                                </div>
                                                            </Link>
                                                            {/* LINK END */}
                                                            <ul className="grid grid-cols-[repeat(4,_minmax(220px,_1fr))] h-[550px] gap-4 pt-4 max-w-[880px]">
                                                                {/* LIST ITEM START */}
                                                                {item?.subMenu?.map((sub) => (
                                                                    <div
                                                                        className="div whitespace-nowrap min-w-[220px]"
                                                                        key={sub.id}
                                                                    >
                                                                        <McategoryTow item={sub} />
                                                                        <ul className="flex flex-col gap-4">
                                                                            <CategorysCondation item={sub} />
                                                                        </ul>
                                                                    </div>
                                                                ))}
                                                            </ul>
                                                            {/* LIST ITEM END */}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* ITEM CONTENT END */}
                                        </div>
                                        {/* CONTENT MENUE END */}
                                    </div>
                                </div>
                                {/*WARPER MODAL MENU END */}
                            </div>
                            {/* WRAPER END */}
                        </div>
                        {/* CONTAINER ALL MENU START*/}

                        {/* SECTION MENU TOW START */}
                        {true && (
                            <SectionMenu
                                setIndicatoreLeft={setIndicatoreLeft}
                                setIndicatoreWidth={setIndicatoreWidth}
                            />
                        )}
                        {/* SECTION MENU TOW END */}
                        {/* SECTION MENU three START */}
                        {true && (
                            <SectionMenu
                                setIndicatoreLeft={setIndicatoreLeft}
                                setIndicatoreWidth={setIndicatoreWidth}
                            />
                        )}
                        {/* SECTION MENU three END */}

                        {/*INDICATOR START*/}
                        <Indicator indicatoreLeft={indicatoreLeft} indicatoreWidth={indicatoreWidth} />
                        {/*INDICATOR END*/}
                    </div>
                    {/* // CONTAINER MAIN MENU ALL CATEGORIS END */}
                </nav>
            </motion.div>
        </>
    );
}

//Mcategory && McategoryTow

interface MainCategorysProps {
    item: SdebarItemssubMenu | SidebarItems | SubMenuTow | SubMenuThree;
}

const Mcategory = ({ item }: MainCategorysProps) => {
    return (
        <>
            <div>
                <Link href="/about" key={item?.id} className="group/linktop">
                    <span className={`${variantParagraph({ textBody: 'default' })} text-start flex`}>
                        <span className=" whitespace-nowra transition-all duration-150 hover:text-bg_base_red">
                            {item.title}
                        </span>
                    </span>
                </Link>
            </div>
        </>
    );
};
const McategoryTow = ({ item }: MainCategorysProps) => {
    return (
        <>
            <Link href="/about" key={item?.id} className="group/link transition-all duration-150 hover:bg-white">
                <span className={`${variantParagraph({ textBody: 'text_body_1_strong' })} text-start  pb-8 `}>
                    <span className="inline-block transition-all duration-150 whitespace-nowra border-r-[1px] hover:text-bg_base_red border-bg_base_red pr-2">
                        {item?.title}
                    </span>
                </span>
            </Link>
        </>
    );
};

// CategorysIncludeSubMeu

interface CategorysIncludeSubMeuProps {
    item: SdebarItemssubMenu | SidebarItems | SubMenuTow | SubMenuThree;
    children?: ReactNode;
}

const CategorysIncludeSubMeu: React.FC<CategorysIncludeSubMeuProps> = ({ item, children }) => {
    return (
        <>
            <div>
                <ul className="flex flex-col gap-4 pt-4">
                    {/* LIST ITEM START */}

                    <div className="div whitespace-nowrap min-w-[220px]" key={item.id}>
                        {item?.subMenu && item?.subMenu?.length > 0 ? (
                            <McategoryTow item={item} />
                        ) : (
                            <Mcategory item={item} />
                        )}
                        {item?.subMenu && item?.subMenu?.length > 0 && (
                            <ul className="flex flex-col gap-4">
                                <>
                                    {item?.subMenu?.map((sub) => (
                                        <div key={sub.id}>
                                            <div>
                                                {sub?.subMenu && sub?.subMenu?.length > 0 ? (
                                                    <McategoryTow item={sub} />
                                                ) : (
                                                    <Mcategory item={sub} />
                                                )}
                                            </div>
                                            {sub?.subMenu && sub?.subMenu?.length > 0 ? (
                                                <>
                                                    {sub?.subMenu?.map((subInner) => (
                                                        <React.Fragment key={subInner.id}>
                                                            {subInner?.subMenu && subInner?.subMenu?.length > 0 ? (
                                                                <CategorysIncludeSubMeuTow item={subInner} />
                                                            ) : (
                                                                <Mcategory item={subInner} />
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </>
                                            ) : null}
                                        </div>
                                    ))}
                                </>
                            </ul>
                        )}
                    </div>
                </ul>
            </div>
        </>
    );
};

//CategorysIncludeSubMeuTow

const CategorysIncludeSubMeuTow: React.FC<CategorysIncludeSubMeuProps> = ({ item, children }) => {
    return (
        <>
            <div>
                <ul className="flex flex-col gap-4 pt-4">
                    {/* LIST ITEM START */}

                    <div className="div whitespace-nowrap min-w-[220px]" key={item.id}>
                        {item?.subMenu && item?.subMenu?.length > 0 ? (
                            <McategoryTow item={item} />
                        ) : (
                            <Mcategory item={item} />
                        )}
                        {item?.subMenu && item?.subMenu?.length > 0 && (
                            <ul className="flex flex-col gap-4">
                                <>
                                    {item?.subMenu?.map((sub: any) => (
                                        <div key={sub.id}>
                                            <Mcategory item={sub} />
                                            {children}
                                        </div>
                                    ))}
                                </>
                            </ul>
                        )}
                    </div>
                </ul>
            </div>
        </>
    );
};

//SectionMenu

interface SectionMenuProps {
    setIndicatoreWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
    setIndicatoreLeft: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const SectionMenu: React.FC<SectionMenuProps> = ({ setIndicatoreWidth, setIndicatoreLeft }) => {
    return (
        <>
            <Separator orientation="vertical" className="h-[50%] bg-[#62666D]" />
            <div className="flex">
                {links?.slice(2, 4).map((link) => (
                    <div
                        key={link.id}
                        className="relative cursor-pointer px-[12px] flex items-center justify-center flex-nowrap"
                        onMouseEnter={(e) => {
                            setIndicatoreWidth(e.currentTarget.offsetWidth);
                            setIndicatoreLeft(e.currentTarget.offsetLeft);
                        }}
                        onMouseLeave={() => {
                            setIndicatoreWidth(0);
                            setIndicatoreLeft(0);
                        }}
                    >
                        <Link href="/" className="flex flex-nowrap whitespace-normal items-center gap-x-1">
                            <span>
                                <Icones.Store height={18} width={18} />
                            </span>
                            <span className={variantParagraph({ textBody: 'default' })}>{link?.title}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

//Indicator

interface IndicatorProps {
    indicatoreLeft: number | undefined;
    indicatoreWidth: number | undefined;
}

const Indicator: React.FC<IndicatorProps> = ({ indicatoreLeft, indicatoreWidth }) => {
    const indicatoreRef = useRef<HTMLDivElement>(null);
    return (
        <div
            ref={indicatoreRef}
            className="absolute bottom-0 bg-bg_base_red left-0 z-9999 h-[2px] rounded-md transition-all duration-300 pointer-events-none "
            style={{
                left: `${indicatoreLeft ? indicatoreLeft : 0}px`,
                width: ` ${indicatoreWidth ? indicatoreWidth : 0}px`,
            }}
        ></div>
    );
};

//CategorysCondation

interface CategorysCondationProps {
    item: SdebarItemssubMenu | SidebarItems | SubMenuTow | SubMenuThree;
    children?: ReactNode;
}

const CategorysCondation: React.FC<CategorysCondationProps> = ({ item, children }) => {
    return (
        <>
            {item?.subMenu?.map((sub) => (
                <React.Fragment key={sub.id}>
                    {sub?.subMenu && sub?.subMenu?.length > 0 ? (
                        <CategorysIncludeSubMeu item={sub} />
                    ) : (
                        <Mcategory item={sub} />
                    )}
                </React.Fragment>
            ))}
        </>
    );
};
