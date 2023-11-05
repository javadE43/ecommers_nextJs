import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import Image from 'next/image';
import Link from 'next/link';

const containerBanner = cva('grid dark:bg-base_dark_text md:rounded-lg', {
    variants: {
        numberof: {
            one: 'grid-cols-1 grid-cols-1 grid-row-4',
            tow: 'grid-cols-2  gap-4',
            three: 'grid-cols-3',
            fore: 'grid-cols-2 grid-cols-2 grid-row-2 md:grid-cols-4 md:grid-row-1 gap-4',
        },
    },
    defaultVariants: {
        numberof: 'one',
    },
});

export interface ContainerBanner extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerBanner> {}

const ContainerBanner = forwardRef<HTMLDivElement, ContainerBanner>(
    ({ children, numberof, className, ...props }, ref) => {
        return (
            <div ref={ref} className={cn(containerBanner({ numberof }), className)} {...props}>
                {children}
            </div>
        );
    }
);

const variantBanner = cva(' rounded-lg ', {
    variants: {
        numberof: {
            tow: 'h-[52px] sm:h-[73px] md:h-[142px] lg:h-[195px] xl:h-[257.59px]',
            fore: 'h-[99px] sm:h-[138px] md:h-[267px] lg:h-[177px] xl:h-[235px]',
        },
    },
    defaultVariants: {},
});

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof variantBanner> {
    url?: string;
    to?: string;
    custom?: boolean;
}

const Banner = forwardRef<HTMLDivElement, BannerProps>(
    ({ children, to, url, custom, numberof, className, ...props }, ref) => {
        if (custom) {
            <div ref={ref} className={cn(variantBanner({ numberof }), className)} {...props}>
                {children}
            </div>;
        } else {
            return (
                <div ref={ref} className={cn(variantBanner({ numberof }), className)} {...props}>
                    <Link href={to ? to : ''}>
                        <Image
                            src={url ? url : '/'}
                            height={160}
                            width={288}
                            quality={100}
                            alt="product"
                            loading="lazy"
                            blurDataURL="blur"
                            className="h-full w-full rounded-lg object-cover"
                        />
                    </Link>
                </div>
            );
        }
    }
);
Banner.displayName = 'Banner';
export { ContainerBanner, Banner };
