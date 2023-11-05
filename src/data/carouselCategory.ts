import { v4 as uuidv4 } from 'uuid';

interface CarouselCate {
    id: string;
    title: string;
    img: string;
}
export interface Data {
    cate: CarouselCate[];
}

export const carouselCate: Data[] = [
    {
        cate: [
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner1.webp',
            },
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner2.webp',
            },
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner3.webp',
            },
        ],
    },

    {
        cate: [
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner5.webp',
            },
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner6.webp',
            },
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner7.webp',
            },
        ],
    },

    {
        cate: [
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner8.webp',
            },
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner9.webp',
            },
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner10.webp',
            },
        ],
    },
    {
        cate: [
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner11.webp',
            },
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner12.webp',
            },
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner13.webp',
            },
        ],
    },
    {
        cate: [
            {
                id: uuidv4(),
                title: 'دسته',
                img: '/images/carouselCategoryHome/banner14.webp',
            },
        ],
    },
];
