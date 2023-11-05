import { Inter, Open_Sans, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

// GOOGLE FONTS

const OpenSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-openSans',
    display: 'swap',
    preload: true,
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100'],
    variable: '--font-roboto',
    preload: true,
});

// LOCAL FONTS
const iranYekan = localFont({
    src: [
        {
            path: '../../public/font/yekan/woff2/IRANSansX-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/font/yekan/woff2/IRANSansXFaNum-Bold.woff2',
            weight: '400',
            style: 'bold',
        },
        {
            path: '../../public/font/yekan/woff/IRANSansXFaNum-Bold.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/font/yekan/woff/IRANSansXFaNum-Bold.woff',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-iranYekan',
});

export { iranYekan, OpenSans, roboto };
