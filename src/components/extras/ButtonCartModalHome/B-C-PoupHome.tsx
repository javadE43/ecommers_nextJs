'use client';

import Link from 'next/link';
import { useState } from 'react';
import { TfiShoppingCart } from 'react-icons/tfi';
import CartModal from '../cartModal/CartModal';

const ButtonSHowCart = () => {
    const [showModalCart, setShowModalCart] = useState<boolean>(false);

    return (
        <Link
            href="/cart"
            className="relative"
            onMouseEnter={() => setShowModalCart(true)}
            onMouseLeave={() => {
                setShowModalCart(false);
            }}
        >
            <TfiShoppingCart className="h-6 w-6" />
            <CartModal isvisibale={showModalCart} />
        </Link>
    );
};

export default ButtonSHowCart;
