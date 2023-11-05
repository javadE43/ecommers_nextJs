'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import Image from 'next/image';
import Link from 'next/link';

import { ArticalCard, ContentCard, ContainerSlider, FooterSlider, HeaderCard } from '../../ui/carousel-home-products';
import { pro } from '../../../data/caruoselProduc';
import { variantHeading } from '../../ui/heading';
import { ButtonAddCart, buttonVariants } from '../../ui/button';

const CarouselProducts = () => {
    return (
        <ContainerSlider>
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
                        spaceBetween: 2,
                    },
                    480: {
                        spaceBetween: 2,
                    },
                    768: {
                        spaceBetween: 2,
                    },
                    1024: {
                        spaceBetween: 2,
                    },
                    1280: {
                        spaceBetween: 2,
                    },
                    1440: {
                        spaceBetween: 2,
                    },
                }}
            >
                <SwiperSlide className="!w-auto ml-1">
                    <ArticalCard shape={'card'} className="bg-transparent text-base_text w-[173px]">
                        <HeaderCard className="h-2/5">
                            <h3 className={`${variantHeading()} w-1/2`}>پیشنهاد شگفت انگیز</h3>
                        </HeaderCard>
                        <ContentCard>
                            <Image
                                src="/images/bannerProducts/box.webp"
                                height={160}
                                width={288}
                                alt="product"
                                className="h-full w-full object-cover"
                                loading="lazy"
                                blurDataURL="blur"
                            />
                        </ContentCard>
                        <FooterSlider custom={true} className="h-1/5">
                            <Link href="/products" className={buttonVariants({ variant: 'link' })}>
                                <h3 className={`${variantHeading()}`}>مشاهده همه</h3>
                            </Link>
                        </FooterSlider>
                    </ArticalCard>
                </SwiperSlide>

                {pro?.map((item) => (
                    <SwiperSlide className="!w-auto ml-1" key={item.id}>
                        <Link href="/pro">
                            <ArticalCard shape={'card'}>
                                <ContentCard className="h-3/5">
                                    <Image
                                        src={item.img}
                                        height={160}
                                        width={288}
                                        alt="product"
                                        className="h-auto w-full object-cover"
                                        loading="lazy"
                                        blurDataURL="blur"
                                    />
                                    <ButtonAddCart />
                                </ContentCard>
                                <FooterSlider price={item.price} discount={item.discount} />
                            </ArticalCard>
                        </Link>
                    </SwiperSlide>
                ))}
                <SwiperSlide className="!w-auto ml-1">
                    <ArticalCard shape={'card'}>
                        <ContentCard className="h-full flex justify-center items-center ">
                            <Link href="/category" className={buttonVariants({ variant: 'ghost' })}>
                                <h3 className={`${variantHeading()}`}>مشاهده همه</h3>
                            </Link>
                        </ContentCard>
                    </ArticalCard>
                </SwiperSlide>
            </Swiper>
        </ContainerSlider>
    );
};

export default CarouselProducts;
