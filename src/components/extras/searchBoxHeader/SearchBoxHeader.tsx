import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet';

export default function SearchBoxHeader() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="w-full flex items-center relative @lg:w-[85%]">
                    <input
                        className=" bg-base_text w-full outline-none border-none text-md rounded-lg py-[8px] px-2 pr-12 dark:bg-base_dark_text dark:text-base_text"
                        placeholder="جستجو"
                    />
                    <span className="absolute right-3 dark:text-base_text">
                        <BiSearchAlt className="h-6 w-6" />
                    </span>
                </div>
            </SheetTrigger>
            <SheetContent side={'top'}>
                <div className="h-full mt-4">
                    <input
                        className=" bg-base_text w-full outline-none border-none text-md rounded-lg py-[8px] px-2 pr-12"
                        placeholder="جستجو"
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
}
