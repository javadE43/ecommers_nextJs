'use client';
import React from 'react';
import Link from 'next/link';

//
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { v4 as uuidv4 } from 'uuid';

//
import { Data, carouselCate } from '../../../data/carouselCategory';

import { ArticalCard, ContentCard, ContainerSlider, FooterSlider } from '../../ui/carousel-home-products';
import { variantHeading } from '../../ui/heading';
import Image from 'next/image';
import { variantParagraph } from '@/components/ui/pargraph';

const CategoryDesktop = () => {
    return (
        <section className="h-auto hidden lg:flex w-full pr-4 px-4 py-3 pt-4 pb-10 flex-col mt-4">
            <h3 className={`${variantHeading()} mb-4 mt-8 text-gray-500`}>دستب بندی های سایت</h3>
            <div className="@container w-full flex flex-wrap justify-center items-start gap-0 gap-y-8">
                {carouselCate?.map((item: Data) => (
                    <React.Fragment key={uuidv4()}>
                        {item.cate?.map((cat) => (
                            <Link
                                key={cat.id}
                                href="/cat"
                                className="flex flex-col user-select-none w-[137px] h-[134px] @6xl:w-[152px] @6xl:h-[154.97px] @7xl:w-[181px] @7xl:h-[133.97px] p-0-lg mx-0-lg"
                            >
                                <ArticalCard shape={'category'} className=" !h-full w-full">
                                    <ContentCard rounded={'lg'} className="h-auto">
                                        <Image
                                            src={cat.img}
                                            height={100}
                                            width={100}
                                            alt="product"
                                            className="h-[100px] w-[100px] object-cover"
                                            loading="lazy"
                                            blurDataURL="blur"
                                        />
                                    </ContentCard>

                                    <FooterSlider className="text-gray-500 h-[30%] items-center m-0" custom={true}>
                                        <span className={variantParagraph({ textBody: 'default' })}>{cat.title}</span>
                                    </FooterSlider>
                                </ArticalCard>
                            </Link>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};
const CategoryMobile = () => {
    return (
        <div className="bg-transparent flex flex-col h-auto lg:hidden">
            <h3 className={`${variantHeading()} mb-4 mt-8 text-gray-500`}>دستب بندی های سایت</h3>

            <ContainerSlider className="bg-transparent flex h-auto m-0">
                <Swiper
                    modules={[FreeMode]}
                    grabCursor={true}
                    freeMode={true}
                    scrollbar={{ draggable: true }}
                    className="h-full carousel_home_one"
                    breakpoints={{
                        0: {
                            spaceBetween: 2,
                            slidesPerView: 3,
                        },
                        480: {
                            spaceBetween: 2,
                            slidesPerView: 3,
                        },
                        768: {
                            spaceBetween: 2,
                            slidesPerView: 4,
                        },
                    }}
                >
                    {carouselCate?.map((item: Data) => (
                        <SwiperSlide className="h-auto ml-1 @container" key={uuidv4()}>
                            <div className="flex flex-col flex-wrap h-auto w-[117px] @xl:w-[168px]">
                                {item.cate?.map((cat) => (
                                    <Link href="/cat" key={cat.id}>
                                        <ArticalCard shape={'category'} className="min-h-[121px] w-full">
                                            <ContentCard rounded={'lg'} className="h-auto">
                                                <Image
                                                    src={cat.img}
                                                    height={100}
                                                    width={100}
                                                    alt="product"
                                                    className="h-[100px] w-[100px] object-cover"
                                                    loading="lazy"
                                                    blurDataURL="blur"
                                                />
                                            </ContentCard>
                                            <FooterSlider
                                                className="text-gray-500 h-auto items-center m-0"
                                                custom={true}
                                            >
                                                <span className={variantParagraph({ textBody: 'default' })}>
                                                    {cat.title}
                                                </span>
                                            </FooterSlider>
                                        </ArticalCard>
                                    </Link>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ContainerSlider>
        </div>
    );
};

const CarouselCategory = () => {
    return (
        <>
            <CategoryMobile />
            <CategoryDesktop />
        </>
    );
};

export default CarouselCategory;
