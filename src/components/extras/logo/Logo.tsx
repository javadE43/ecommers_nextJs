import Link from 'next/link';

//

import { Icones } from '@/components/shared/icons/Icons';

export default function Logo() {
    return (
        <>
            {/* LOGO START */}
            <Link href="/" className="h-full text-inherit flex items-center">
                <Icones.Logo />
            </Link>
            {/* LOGO END */}
        </>
    );
}
