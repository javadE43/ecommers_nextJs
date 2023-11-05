import Image from 'next/image';
import { Plus } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { buttonVariants } from '@/components/ui/button';
import { variantParagraph } from '@/components/ui/pargraph';

interface CartModalProps {
    isvisibale: boolean;
}

const CartModal = ({ isvisibale }: CartModalProps) => {
    return (
        // CONTAINER START
        <div
            className={`${
                isvisibale ? 'block' : 'hidden'
            } w-[400px] max-h-[482.78px] z-999999 min-h-[482.78px] shadow-boxShadow_Bottom_2  absolute top-full left-0 rounded-lg transition-all duration-300 bg-white`}
        >
            <div className="flex justify-start items-center h-[42.3px] px-2">
                <span>2 عدد کالا</span>
            </div>
            <Separator className="bg-gray-400" />

            <div className="overflow-hidden px-2 overflow-y-auto w-full max-h-[calc(360px)] min-h-[calc(360px)]">
                <Content />
                <Separator className="bg-gray-400" />
                <Content />
                <Separator className="bg-gray-400" />
                <Content />
            </div>

            {/* SECTION BUTTON PAY START */}
            <Separator className="bg-gray-400" />
            <div className="flex justify-between items-center px-2 py-2 max-h-[80.75px] min-h-[80.75px]">
                <div className="flex flex-col justify-center items-center">
                    <span className={variantParagraph({ textBody: 'default' })}>مبلغ قابل پرداخت</span>
                    <span className={variantParagraph({ textBody: 'default' })}>900,000</span>
                </div>
                <button className={buttonVariants({ variant: 'default' })}>پرداخت</button>
            </div>
            {/* SECTION BUTTON PAY END */}
        </div>
        // CONTAINER END
    );
};

const Content = () => {
    return (
        <div className="p-2 w-full max-h-[260.25px] min-h-[260.25px]">
            {/* SECTION TOP START */}
            <div className="flex gap-x-4 overflow-hidden">
                {/* IMAGE PRODUCT START */}
                <div>
                    <Image src="/images/products/pro1.webp" width={75} height={75} alt="" />
                </div>
                {/* IMAGE PRODUCT END */}
                {/* DESCRIPTION PRODUCT START */}
                <div className="flex flex-col items-center justify-start overflow-hidden d__rtl gap-y-2">
                    <h3 className={variantParagraph({ textBody: 'default' })}>title</h3>
                    <div className="flex gap-x-2">
                        <span className={variantParagraph({ textBody: 'default' })}>مشکس</span>
                        <span></span>
                    </div>
                    <span className={variantParagraph({ textBody: 'default' })}>موجودی در انبار</span>
                    <div className="flex gap-x-2">
                        <span className={variantParagraph({ textBody: 'default' })}>پست</span>
                    </div>
                    <div className="flex gap-x-2">
                        <span className={variantParagraph({ textBody: 'default' })}>تیباکس</span>
                    </div>
                </div>
                {/* DESCRIPTION PRODUCT END */}
            </div>
            {/* SECTION TOP END */}

            {/* SECTION BOTTOM START */}
            <div className="flex gap-x-4">
                <div className="flex gap-x-2 py-2 g px-3 border-[1px] border-gray-400 rounded-lg">
                    <span>
                        <Plus />
                    </span>
                    <span>1</span>
                    <span>
                        <Trash2 />
                    </span>
                </div>
                <div className="flex gap-x-2">
                    <span className={variantParagraph({ textBody: 'default' })}>
                        900,000<span className="">تومان</span>
                    </span>
                </div>
            </div>
            {/* SECTION BOTTOM END */}
        </div>
    );
};

export default CartModal;
