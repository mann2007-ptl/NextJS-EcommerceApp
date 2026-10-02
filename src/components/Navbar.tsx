"use client";

import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Routes } from '@/types/routes';


export default function Navbar() {

    const pathName = usePathname();

    return (
        <div>
            <nav className="flex gap-3">
                {/* {pathName} */}
                <Link href={Routes.Home} className={`${pathName === Routes.Home ? "text-cyan-600" : "text-red-600"}`}>Home</Link>
                <Link href={Routes.Products} className={`${pathName === Routes.Products ? "text-cyan-600" : "text-red-600"}`}>Product</Link>
                <Link href={Routes.Contact} className={`${pathName === Routes.Contact ? "text-cyan-600" : "text-red-600"}`}>Contacts</Link>
                <Link href={Routes.Category} className={`${pathName === Routes.Category ? "text-cyan-600" : "text-red-600"}`}>Categories</Link>
                <Link href={Routes.Terms} className={`${pathName === Routes.Terms ? "text-cyan-600" : "text-red-600"}`}>Terms</Link>
            </nav>
        </div>
    )
}
