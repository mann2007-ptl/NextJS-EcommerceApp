"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Routes } from "@/types/routes";

export default function Navbar() {
    const pathName = usePathname();

    const navbarData = [
        {
            label: "Home",
            href: Routes.Home,
        },
        {
            label: "Products",
            href: Routes.Products,
        },
        {
            label: "Contact",
            href: Routes.Contact,
        },
        {
            label: "Categories",
            href: Routes.Category,
        },
        {
            label: "Terms",
            href: Routes.Terms,
        },
    ];

    return (
        <nav className="flex gap-6">
            {navbarData.map((nav) => (
                <Link
                    key={nav.label}
                    href={nav.href}
                    className={
                        pathName === nav.href
                            ? "text-blue-600 font-semibold"
                            : "text-red-500"
                    }
                >
                    {nav.label}
                </Link>
            ))}
        </nav>
    );
}