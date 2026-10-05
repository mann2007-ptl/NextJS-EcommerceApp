import React from 'react'
import Link from "next/link";

import { Routes } from '@/types/routes';

export default function Footer() {
    return (
        <footer className="mt-10 bg-gray-900 text-white py-8">
            <div className="text-center">

                <h2 className="text-2xl font-bold mb-3">
                    Walmart
                </h2>

                <nav className="flex justify-center gap-6 mb-5">
                    <Link className="hover:text-cyan-400" href={Routes.Home}>
                        Home
                    </Link>

                    <Link className="hover:text-cyan-400" href={Routes.Products}>
                        Product
                    </Link>

                    <Link className="hover:text-cyan-400" href={Routes.Contact}>
                        Contacts
                    </Link>

                    <Link className="hover:text-cyan-400" href={Routes.Category}>
                        Categories
                    </Link>

                    <Link className="hover:text-cyan-400" href={Routes.Terms}>
                        Terms
                    </Link>
                </nav>

                <p className="text-gray-400 text-sm">
                    © 2026 Walmart. All rights reserved.
                </p>

            </div>
        </footer>
    )
}