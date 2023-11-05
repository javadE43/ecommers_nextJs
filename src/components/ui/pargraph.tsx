import {cva } from "class-variance-authority";

const variantParagraph = cva("whitespace-nowrap", {
  variants: {
    textBody: {
      default: "text-[0.8rem] text-[#62666D]",
      text_body_1_strong: "text-[0.8rem] font-bold text-[#0c0c0c]",
      text_body_2_strong: "text-[0.9rem] font-bold text-[#3f4064] font-yekan",
    },
  },
  defaultVariants: {
    textBody: "default",
  },
});

export { variantParagraph };
