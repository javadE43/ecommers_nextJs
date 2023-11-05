import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
    {
        variants: {
            variant: {
                default:
                    'bg-bg_base_red text-base-text hover:bg-bg_base_red dark:bg-slate-50 dark:text-base-text dark:hover:bg-slate-50/90',
                destructive:
                    'bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90',
                outline:
                    'border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50',
                secondary:
                    'bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80',
                ghost: 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50',
                link: 'flex w-full text-center text-base-text underline-offset-4 hover:underline dark:text-slate-50',
                add: 'flex w-full text-center text-base-text underline-offset-4 hover:underline dark:text-slate-50',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
    }
);
Button.displayName = 'Button';

const buttonMinusCartVariants = cva(
    'absolute border-2 border-bg_base_red rounded-full inline-flex items-center justify-center font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
    {
        variants: {
            variant: {
                default:
                    'bottom-0 right-0 text-base-text dark:bg-slate-50 hover:translate-x-[5px] hover:scale-[1.1] transition-all duration-500',
            },
            size: {
                default: 'h-auto',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonMinusCartProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonMinusCartVariants> {
    asChild?: boolean;
}

const ButtonMinusCart = React.forwardRef<HTMLButtonElement, ButtonMinusCartProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button className={cn(buttonMinusCartVariants({ variant, size, className }))} ref={ref} {...props}>
                <Minus className="text-bg_base_red bg-white rounded-full h-[30px] w-[30px]" />
            </button>
        );
    }
);
const buttonAddCartVariants = cva(
    'absolute border-2 border-bg_base_red rounded-full inline-flex items-center justify-center font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
    {
        variants: {
            variant: {
                default:
                    'bottom-0 right-0 text-base-text dark:bg-slate-50 hover:translate-x-[5px] hover:scale-[1.1] transition-all duration-500',
            },
            size: {
                default: 'h-auto',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export interface ButtonAddCartProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonAddCartVariants> {
    asChild?: boolean;
}

const ButtonAddCart = React.forwardRef<HTMLButtonElement, ButtonAddCartProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button className={cn(buttonAddCartVariants({ variant, size, className }))} ref={ref} {...props}>
                <Plus className="text-bg_base_red bg-white rounded-full h-[30px] w-[30px]" />
            </button>
        );
    }
);

export { Button, buttonVariants, ButtonAddCart, ButtonMinusCart };
