import React, { Children, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionVariants = cva(
    '@container overflow-hidden w-full h-[16.75rem] md:h-[16.75rem] lg:h-[25rem] [&>div>div.swiper-button-prev]:bg-white [&>div>div.swiper-button-prev]:rounded-full [&>div>div.swiper-button-next]:bg-white [&>div>div.swiper-button-next]:rounded-full',
    {
        variants: {
            carosel: {
                one: '@container w-full max-w-[1920px] mx-auto',
                tow: '',
                three: '',
                fore: '',
                five: '',
                six: '@container w-[1200px] my-4 pt-2 md:pt-20 pb-2 md:pb-4 px-2 md:px-8 rounded-lg bg-blue-600',
            },
            navigation: {
                default: '',
                left: '',
                right: '[&>div>div.swiper-button-prev]:right-[10%]',
                leftTop:
                    '[&>div>div.swiper-button-prev]:!-top-[20%] [&>div]:!overflow-y-visible  [&>div>div.swiper-button-prev]:!right-auto [&>div>div.swiper-button-prev]:!left-[20%] [&>div>div.swiper-button-next]:!-top-[20%]',
                rightTop: '',
                rightBottom:
                    '[&>div>div.swiper-button-prev]:!top-auto [&>div>div.swiper-button-prev]:bottom-[10%] [&>div>div.swiper-button-prev]:right-[17%] sm:[&>div>div.swiper-button-prev]:right-[14%] md:[&>div>div.swiper-button-prev]:right-[10%] lg:[&>div>div.swiper-button-prev]:right-[9%] xl:[&>div>div.swiper-button-prev]:right-[8%] 2xl:[&>div>div.swiper-button-prev]:right-[7%]  [&>div>div.swiper-button-next]:!top-auto [&>div>div.swiper-button-next]:bottom-[10%] [&>div>div.swiper-button-next]:!left-initil [&>div>div.swiper-button-next]:right-[5%] [&>div>div.swiper-button-next]:w-[15px] [&>div>div.swiper-button-next]:h-[15px] [&>div>div.swiper-button-prev]:w-[15px] [&>div>div.swiper-button-prev]:h-[15px]',
                leftBottom: '',
            },
        },
        defaultVariants: {
            carosel: 'one',
            navigation: 'rightBottom',
        },
    }
);

export interface ContainerProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {}

const ContainerCaroselwiper = forwardRef<HTMLElement, ContainerProps>(
    ({ className, children, carosel, navigation, ...props }, ref) => {
        return (
            <section ref={ref} className={cn(sectionVariants({ carosel, navigation }), className)} {...props}>
                {children}
            </section>
        );
    }
);
ContainerCaroselwiper.displayName = 'ContainerCaroselwiper';

export { ContainerCaroselwiper, sectionVariants };
