'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const variantInput = cva(
    `
flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
`,
    {
        variants: {},
        defaultVariants: {},
    }
);

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof variantInput> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return <input type={type} className={cn(variantInput({ className }))} ref={ref} {...props} />;
});
Input.displayName = 'Input';

export { Input, variantInput };
