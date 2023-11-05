import { cva } from "class-variance-authority";

const variantHeading = cva("", {
    variants: {
      text:{
        default:"text-center text-inherit text-sm md:text-md lg:text-xl m-x-2",
        text_body:"text-[0.8rem]",
      }
    },
    defaultVariants: {
      text:"default",
    },
  });
  
  export {variantHeading}