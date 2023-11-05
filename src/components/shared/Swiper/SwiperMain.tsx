'use client';
//
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Props {
    children: React.ReactNode;
    mode?: 'default' | 'tow' | 'three';
}

export const SwiperMain = ({ children, mode }: Props) => {
    switch (mode) {
        case 'tow':
            return (
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
                    {children}
                </Swiper>
            );
            break;

        case 'three':
            return (
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
                    {children}
                </Swiper>
            );
            break;

        default:
            return (
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
                    {children}
                </Swiper>
            );
    //         break;
    // }
};
export const SwiperSlidMain = ({ children }: Props) => {
    return <SwiperSlide>{children}</SwiperSlide>;
};
