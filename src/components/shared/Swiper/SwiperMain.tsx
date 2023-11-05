'use client';
//
import React from 'react';
import { Swiper, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface Props {
    children: React.FunctionComponent<SwiperSlideProps>;
    mode?: 'default' | 'tow' | 'three';
}

export const SwiperMain = ({ children, mode }: Props) => {
    return <></>;
};
export const SwiperSlidMain: React.FunctionComponent<SwiperSlideProps> = () => {
    return <></>;
};
