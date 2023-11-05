"use client";

import React, { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { variantHeading } from "./heading";


const variantHeader = cva("w-full h-1/5 flex justify-between items-start overFlow-hidden", {
  variants: {
    position: {
      card: "items-center justify-center",
      container: "px-4 items-start",
    },
  },
  defaultVariants: {
    position: "card",
  },
});
export interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variantHeader> {}

const HeaderCard = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, position, className, ...props }, ref) => {
    return (
      <header className={cn(variantHeader({ position }), className)} ref={ref} {...props}>
        {children}
      </header>
    );
  }
);
HeaderCard.displayName = "HeaderCard";

const variantContent = cva("relative h-2/5 flex flex-col justify-center items-center", {
  variants: {
    rounded: {
      default: "none",
      full: "rounded-full",
      lg: "runded-lg",
      md: "runded-md",
      sm: "runded-sm",
    },
    position:{
      blog:"justify-start w-full h-[70%] overflow-hidden rounded-tr-lg rounded-tl-lg"
    }
  },
  defaultVariants: {
    rounded: "default",
  },
});

export interface ContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variantContent> {}

const ContentCard = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, position,rounded, className, ...props }, ref) => {
    return (
      <div className={cn(variantContent({ rounded,position }), className)} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);
ContentCard.displayName = "ContentCard";

const variantFooterSlider = cva(
  "relative overflow-hidden w-full flex flex-col justify-start items-start h-2/5",
  {
    variants: {},
    defaultVariants: {},
  }
);

export interface FooterSliderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof variantFooterSlider> {
  title?: string;
  price?: string;
  discount?: string;
  custom?: boolean;
}

const FooterSlider = forwardRef<HTMLDivElement, FooterSliderProps>(
  (
    {
      custom = false,
      discount,
      title = "  نام محصول:نام  محصول وارد شده در کارت را میتوانید این جا وارد کنید",
      price = "0",
      children,
      className,
      ...props
    },
    ref
  ) => {
    if (!!custom) {
      return (
        <div className={cn(variantFooterSlider(), className)} ref={ref} {...props}>
          {children}
        </div>
      );
    } else {
      return (
        <footer className={cn(variantFooterSlider(), className)} ref={ref} {...props}>
          <h3 className={`${variantHeading({text:"text_body"})} text-start line-clamp-2`}>{title}</h3>
          <div className="w-full flex justify-between items-center">
            <Badge>7%</Badge>
            <span className="text-zinc-500 text-sm text-end">100,589,000تومان</span>
          </div>
          <span className="flex w-full text-sm line-through text-end justify-end items-center">
            {discount}تومان
          </span>
        </footer>
      );
    }
  }
);
FooterSlider.displayName = "FooterSlider";

const variantArtical = cva("flex flex-col bg-white cursor-pointer dark:bg-bg_base_dark", {
  variants: {
    shadow: {
      default:
        "shadow-[0px_1px_10px_rgba(0,0,0,0.25)] transition-all duration-500 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.5)]",
    },
    shape: {
      card: "slider__item gap-y-1 p-4 pb-0 justify-between items-center relative h-full min-w-[9.625rem] max-w-[9.625rem] lg:w-[11.375rem] lg:max-w-[11.375rem]",
      category: "h-[78px] md:h-[78px] lg:h-[80px] justify-center items-center",
      blog: "overflow-hidden rounded-lg border-[1px] border-gray-400 p-0 h-[322px] md:h-[505px] lg:h-[230px] xl:h-[279px] w-[298px] sm:w-[383px] md:w-[726px] lg:w-[339px] xl:w-[317px] min-w-[300px] max-w-[725px] max-h-[505px]",
    },
  },
  defaultVariants: {},
});

export interface ArticalProps
  extends React.HtmlHTMLAttributes<HTMLElement>,
    VariantProps<typeof variantArtical> {}

const ArticalCard = forwardRef<HTMLElement, ArticalProps>(
  ({ children, shadow, shape, className, ...props }, ref) => {
    return (
      <article className={cn(variantArtical({ shadow, shape }), className)} ref={ref} {...props}>
        {children}
      </article>
    );
  }
);
ArticalCard.displayName = "ArticalCard";

const variantCarousel = cva(
  "relative lg:rounded-lg bg-bg_base_red lg:px-4 py-[1.25rem] mt-4 bg-bg_base_red overflow-hidden",
  {
    variants: {
      carousel: {
        default: "flex items-center h-[16.1rem] md-h-[16.1rem] lg:h-[18.75rem]",
        header: "h-[22.1rem] md-h-[22.1rem] lg:h-[21.75rem] flex flex-col justify-between gap-y-4",
      },
    },

    defaultVariants: {
      carousel: "default",
    },
  }
);

export interface CarouselProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof variantCarousel> {}

const ContainerSlider = forwardRef<HTMLElement, CarouselProps>(
  ({ children, carousel, className, ...props }, ref) => {
    return (
      <section className={cn(variantCarousel({ carousel }), className)} ref={ref} {...props}>
        {children}
      </section>
    );
  }
);
ContainerSlider.displayName = "ContainerSlider";

export { ContainerSlider, HeaderCard, ArticalCard, ContentCard, FooterSlider };
