'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import Link from 'next/link';

import { ArticalCard, ContentCard, ContainerSlider, FooterSlider, HeaderCard } from '../../ui/carousel-home-products';
import { blog } from '../../../data/carouselBlog';
import { variantHeading } from '../../ui/heading';
import Image from 'next/image';
import { variantParagraph } from '@/components/ui/pargraph';

export default function CarouselBlog() {
    return (
        <ContainerSlider carousel={'header'} className="bg-transparent p-0 h-auto">
            <HeaderCard position={'container'}>
                <h3 className={`${variantHeading()} text-black`}>خوندنی ها</h3>
            </HeaderCard>
            <div className="h-full">
                <Swiper
                    modules={[FreeMode, Navigation]}
                    grabCursor={true}
                    freeMode={true}
                    navigation
                    slidesPerView="auto"
                    scrollbar={{ draggable: true }}
                    className="h-full carousel_home_one"
                    breakpoints={{
                        0: {
                            spaceBetween: 20,
                        },
                        480: {
                            spaceBetween: 20,
                        },
                        768: {
                            spaceBetween: 20,
                        },
                        1024: {
                            spaceBetween: 20,
                        },
                        1280: {
                            spaceBetween: 20,
                        },
                        1440: {
                            spaceBetween: 20,
                        },
                    }}
                >
                    {blog?.map((item) => (
                        <SwiperSlide className="!w-auto" key={item.id}>
                            <Link href="/pro">
                                <ArticalCard shape={'blog'}>
                                    <ContentCard position={'blog'}>
                                        <Image
                                            src={item.img}
                                            height={160}
                                            width={288}
                                            alt="product"
                                            className="h-auto w-full object-cover"
                                            blurDataURL="blur"
                                            loading="lazy"
                                        />
                                    </ContentCard>
                                    <FooterSlider custom={true} className="w-full h-[30%] overflow-hidden px-2">
                                        <p className={variantParagraph({ textBody: 'default' })}>{item.title}</p>
                                    </FooterSlider>
                                </ArticalCard>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </ContainerSlider>
    );
}
