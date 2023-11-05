'use client';
import { register } from '@/app/actions/_actions';
import { Icones } from '@/components/shared/icons/Icons';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/input';
import { FormSignInData } from '@/data/signInForm';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignIn = () => (
    <>
        <div className="flex flex-col w-full justify-center items-center gap-y-3">
            <Image src="" width={70} height={70} alt="Logo" />
            <div className="text-start">
                <Link href="/sign-up">ثبت نام</Link>
            </div>
        </div>
        <form action={register} className="flex flex-col rounded-lg w-full h-auto overflow-hidden">
            {FormSignInData?.map((item) => (
                <>
                    {item.type === 'submit' ? (
                        <button
                            type={item.type}
                            className=" bg-bg_base_red rounded-lg p-2  text-center text-white mt-6  h-[40px] min-h-[40px] max-h-[40px]"
                        >
                            {item.text}
                        </button>
                    ) : (
                        <div className="flex flex-col gap-y-2 h-[69.5px] min-h-[69.5px] max-h-[69.5px]">
                            <Label htmlFor={item.htmlFor}>{item.label}</Label>
                            <Input id={item.htmlFor} type={item.type} />
                        </div>
                    )}
                </>
            ))}
        </form>
    </>
);

export default SignIn;
