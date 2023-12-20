'use client'

import Link from "next/link";
import { AiOutlineShopping } from 'react-icons/ai'
import { useSelector } from "react-redux";
import { NAV_TITLE } from "@/public/constants/constants";

const NavBar = () => {
    const { cartList = [] } = useSelector((state) => state.cart);

    const totalCartCount = cartList.reduce((acc, value) => (acc += value.count), 0);

    return (
        <div className="flex justify-between py-5 px-8 border-b border-nav-border gap-4">
        <p className="text-gray-500 text-base">
            <Link href="/">{NAV_TITLE}</Link>
        </p>
        <button type="button" className="cart-icon">
            <span className="cart-item-qty">{totalCartCount}</span>
            <AiOutlineShopping />
        </button>
    </div>
    )
}

export default NavBar;