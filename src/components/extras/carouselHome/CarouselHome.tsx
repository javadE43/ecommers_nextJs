'use client';
import Image from 'next/image';
import Link from 'next/link';

//
import React, { Suspense, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface ImgDataProps {
    id: string;
    alt: string;
    src: string;
    path: string;
}

import { ContainerCaroselwiper } from '../../ui/container-carousel-swiper';
import { Skeleton, SkeletonLoader, SkeletonRectangle } from '@/components/ui/skeleton';

export default function CarouselHome() {
    const [banners, setbanners] = useState<ImgDataProps[]>([]);
    useEffect(() => {
        const data = fetch(`http://localhost:3000/api/carouselhome`, { cache: 'no-store' })
            .then((res) => res.json())
            .then((json) => {
                setbanners(json);
            });
    }, []);

    return (
        <>
            {banners?.length > 0 ? (
                <div className="w-full @8xl:w-12/12 @8xl:mx-auto">
                    <ContainerCaroselwiper>
                        <Swiper
                            modules={[Navigation, Pagination, Keyboard, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            loop
                            className="h-full"
                        >
                            {banners?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Link href={item.path} className="flex h-full w-full">
                                        <Image
                                            src={item.src}
                                            height={300}
                                            width={1200}
                                            alt="product"
                                            className="h-auto w-full object-cover"
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </ContainerCaroselwiper>
                </div>
            ) : (
                <>
                    <div className="w-full @8xl:w-12/12 @8xl:mx-auto">
                        <ContainerCaroselwiper>
                            {/* <Swiper>
                                <SwiperSlide>
                                    <SkeletonLoader className="w-full">
                                        <SkeletonRectangle height={300} className="bg-gray-200 rounded-md" />
                                    </SkeletonLoader>
                                </SwiperSlide>
                            </Swiper> */}
                        </ContainerCaroselwiper>
                    </div>
                </>
            )}
        </>
    );
}
