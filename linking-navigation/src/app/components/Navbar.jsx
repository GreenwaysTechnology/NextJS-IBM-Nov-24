'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

export function NavBar() {
    const pathname = usePathname()
    return <nav>
        <h1 style={{ textAlign: 'center' }}>IBM</h1>
        <ul>
            <li>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
            </li>
            <li>
                <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">About</Link>
            </li>
            <li>
                <Link className={`link ${pathname === '/products' ? 'active' : ''}`} href="/products">Products</Link>
            </li>
            <li>
                <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </nav>

}