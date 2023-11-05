import { ComponentPropsWithRef } from 'react';
import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('animate-pulse rounded-md bg-slate-100 dark:bg-slate-800', className)} {...props} />;
}

type DivProps = ComponentPropsWithRef<'div'>;
const SkeletonLoader: React.FC<DivProps> = ({ children, className, ...props }) => {
    return (
        <div className={['animate-pulse', className].join(' ')} {...props}>
            {children}
        </div>
    );
};

type Props = {
    className?: string;
    size: number;
};

const SkeletonCircle = (props: Props) => {
    const className = props.className ?? 'rounded-full flex-shrink-0 bg-gray-200';
    return <div className={className} style={{ height: props.size, width: props.size }} />;
};

type SkeletonRectangleProps = {
    lines?: number;
    gap?: number;
    height?: number;
    className?: string;
    unEqualWidth?: boolean;
};
const SkeletonRectangle: React.FC<SkeletonRectangleProps> = ({
    gap = 4, //4px
    lines = 1,
    height = 20, //20px
    className = '',
    unEqualWidth,
}) => {
    const items = new Array(lines || 1).fill('x');
    return (
        <div className="w-full flex flex-col" style={{ rowGap: gap }}>
            {items.map((_, index) => {
                const len = items.length;
                const isLast = index === len - 1;
                const moreThanOne = len > 1;
                // use half-width if it's the last element
                const width = isLast && unEqualWidth && moreThanOne ? 'w-1/2' : 'w-full';
                return <div key={index} style={{ height }} className={[width, className].join(' ')} />;
            })}
        </div>
    );
};

export { Skeleton, SkeletonLoader, SkeletonCircle, SkeletonRectangle };
