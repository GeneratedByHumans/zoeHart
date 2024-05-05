"use client";

// components/ui/CartButton.tsx
import React from 'react';
import Image from 'next/image';

const CartButton: React.FC<{ quantity: number }> = ({ quantity }) => {
    return (
        <button className=" relative flex items-center justify-center w-12 h-12 bg-transparent hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            <div className="">
                {/* Assuming you have the cart SVG icon saved in the public folder */}
                <Image src="/cart.svg" alt="Cart" width={24.38} height={30.52}
                />
            </div>
            {quantity > 0 && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 rounded px-2 bg-red-500 text-white text-xs">
                    {quantity}
                </span>
            )}
        </button>
    );
};

export default CartButton;
