import Link from 'next/link';
import { links } from '../../../data/sidebarMenu';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { variantHeading } from '../../ui/heading';
import { Separator } from '../../ui/separator';
import { ChevronLeft } from 'lucide-react';
import { ArticalCard, ContentCard, FooterSlider } from '../../ui/carousel-home-products';
import Image from 'next/image';
const CategoryMenuMobile = () => {
    return (
        <>
            <div className="flex w-full max-w-[1675.97px]">
                <Tabs className="flex w-full h-[calc(100vh-56px-60px)] pb-6" defaultValue="موبایل">
                    {links?.map((item, index) => (
                        <>
                            <TabsContent
                                key={item.id}
                                className="w-[calc(100%-90px)]  overflow-y-auto d__rtl mx-4 slider__container"
                                value={item.title}
                            >
                                <div className="flex flex-col w-full justify-end">
                                    <div>
                                        <Link href="/about">
                                            <h3
                                                className={`${variantHeading()} text-blue-700 text-start flex gap-x-3 items-center`}
                                            >
                                                <span>{item?.linkAllVeiw}</span>
                                                <ChevronLeft />
                                            </h3>
                                        </Link>
                                    </div>
                                    <Accordion type="multiple">
                                        {item.subMenu?.map((sub) => (
                                            <AccordionItem value={sub.title} key={sub.id}>
                                                <AccordionTrigger className="group">{sub.title}</AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 justify-between items-center gap-y-2 h-full w-full">
                                                        {sub?.subMenu?.map((subTow) => (
                                                            <Link href="/cat" className="">
                                                                <ArticalCard shape={'category'} key={subTow.id}>
                                                                    <ContentCard
                                                                        rounded={'full'}
                                                                        className="h-auto bg-[#e0e0e6]"
                                                                    >
                                                                        {subTow?.img && (
                                                                            <Image
                                                                                src={subTow.img}
                                                                                height={50}
                                                                                width={50}
                                                                                alt="product"
                                                                                className="h-[52px] w-[52px] object-cover"
                                                                                loading="lazy"
                                                                                blurDataURL="blur"
                                                                            />
                                                                        )}
                                                                    </ContentCard>
                                                                    <FooterSlider
                                                                        className="text-gray-500 h-auto items-center m-0"
                                                                        custom={true}
                                                                    >
                                                                        {subTow.title}
                                                                    </FooterSlider>
                                                                </ArticalCard>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </>
                    ))}
                    <TabsList className="flex slider__container h-full bg-[#f1f2f4] flex-col p-0 justify-start w-[90px] scroll-smooth overflow-hidden hover:overflow-y-auto">
                        {links?.map((item, index) => (
                            <>
                                <TabsTrigger
                                    key={index}
                                    className="group bg-transparent data-[state=active]:bg-white w-full min-h-[66.69px] max-h-[300px] flex justify-end overflow-hidden border-b-[1px] border-l-[1px] border-l-[#e0e0e6] border-b-[#e0e0e6]"
                                    value={item.title}
                                >
                                    <div className="text-bg_base_dark group-data-[state=active]:text-bg_base_red flex flex-col h-auto">
                                        <span>{item?.icon}</span>
                                        <div>
                                            <h3 className={`${variantHeading()} whitespace-normal text-inherit`}>
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </TabsTrigger>
                                <Separator orientation="horizontal" />
                            </>
                        ))}
                    </TabsList>
                </Tabs>
            </div>
        </>
    );
};

export default CategoryMenuMobile;
