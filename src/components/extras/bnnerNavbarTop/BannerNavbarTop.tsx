import Image from 'next/image';
import React from 'react';

export default function BannerNavbarTop() {
    return (
        <div className="hidden lg:block h-[60px] w-full">
            <Image
                src="/images/navbarBanner/banner2.gif"
                alt="banner"
                width={1200}
                height={60}
                style={{ height: '100%', objectFit: 'cover', width: '100%' }}
                priority={true}
            />
        </div>
    );
}
