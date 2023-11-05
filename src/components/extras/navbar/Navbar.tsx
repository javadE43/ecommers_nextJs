import Link from 'next/link';
//
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { TbLogin } from 'react-icons/tb';
import { TfiShoppingCart } from 'react-icons/tfi';
//
import { RootState, AppDispatch } from '../../../store/store';
import SearchBoxHeader from '../searchBoxHeader/SearchBoxHeader';
import Logo from '../logo/Logo';
import { ModeToggle } from '../../ToggleTheme';
import { Separator } from '../../ui/separator';
import { variantParagraph } from '../../ui/pargraph';
import List from '../list/List';
import ButtonSHowCart from '../ButtonCartModalHome/B-C-PoupHome';
// import useMediaQuery from '@/hooks/useMediaQuery';
//TYPE REDUX
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelectore: TypedUseSelectorHook<RootState> = useSelector;

export default function Navbar() {
    return (
        <>
            {/* // CONTAINER START */}
            <div className="@container hidden lg:flex flex-col h-auto w-full max-w-[1675.97px] items-center">
                <div className=" flex flex-col @2lg:pb-1 justify-center items-center w-full  @2lg:h-[74px] @8xl:w-full ">
                    <div className="hidden lg:block w-full @container py-1 px-4 lg:py-0 h-1/2 @2lg:h-full border-t-2 @2lg:border-none">
                        {/* WRAPER START */}
                        <div className="flex  gap-x-8 items-center justify-between  w-full h-full ">
                            {/* SECTION RIGHT START */}
                            <div className="@xs:w-3/5 @2sm:w-4/5 @8xl:w-2/5 flex items-center justify-between gap-x-4">
                                {/* LOGO START */}
                                <div className="hidden lg:flex justify-center items-center gap-x-2 lg:w-[15%]">
                                    <Logo />
                                    <div>
                                        <ModeToggle />
                                    </div>
                                </div>
                                {/* LOGO END */}

                                {/* SEARCH BOX START */}
                                <SearchBoxHeader />
                                {/* SEARCH BOX END */}
                            </div>
                            {/* SECTION RIGHT END */}

                            {/* BOX LEFT START */}
                            <div className="flex items-center justify-between @2sm:w-[14%] dark:text-base_text dark:bg-bg_base_dark">
                                {/* BOX REGISTER START */}
                                <AuthButton />
                                {/* BOX REGISTER END */}
                                <Separator orientation="vertical" className="h-[20px] bg-[#55555f]" />
                                {/* CART SHOPING START */}
                                <ButtonSHowCart />
                                {/* CART SHOPING END */}
                            </div>
                            {/* BOX LEFT END */}
                            {/* WRAPER START */}
                        </div>
                    </div>
                </div>
                <List />
            </div>
        </>
    );
}

const AuthButton = () => {
    return (
        <div className=" flex gap-x-2 items-center border-0 rounded-none p=0 lg:border-[0.04rem] lg:border-[#55555f] lg:rounded-lg lg:p-2 dark:text-base_text dark:bg-bg_base_dark">
            <span className="">
                <Link href="/sign-in" className="flex gap-x-1 items-center">
                    <TbLogin className="h-6 w-6" />
                    <span
                        className={`${variantParagraph({
                            textBody: 'text_body_1_strong',
                        })}`}
                    >
                        ورود
                    </span>
                </Link>
            </span>
            <Separator orientation="vertical" className="h-[20px] bg-[#55555f]" />
            <span className="hidden lg:flex">
                <Link href="/sign-up" className="border-none outline-none whitespace-nowrap">
                    <span
                        className={`${variantParagraph({
                            textBody: 'text_body_1_strong',
                        })}`}
                    >
                        ثبت نام
                    </span>
                </Link>
            </span>
        </div>
    );
};

export function NavbarMobile() {
    // const isMobile = useMediaQuery('(max-width: 991px)');
    return (
        <>
            <div className="flex items-center h-[60px] px-4 w-full justify-between bg-white lg:hidden dark:bg-bg_base_dark">
                <div className="flex justify-center items-center gap-x-4 w-full">
                    <div className="z-9999999 w-[50px]">
                        <ModeToggle />
                    </div>
                    <div className="w-[calc(100%-50px)]">
                        {/* SEARCH BOX START */}
                        <SearchBoxHeader />
                        {/* SEARCH BOX END */}
                    </div>
                </div>
                {/* SIDEBAR MENU */}
            </div>
        </>
    );
}
