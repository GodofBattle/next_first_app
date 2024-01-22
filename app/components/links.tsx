'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Links() {
    const pathname = usePathname();

    return (
        <nav style={{ marginBottom: '1rem' }}>
            <ul style={{display: 'inline-flex', flexDirection: 'row'}}>
                <li style={{ marginRight: '1rem' }}>
                    <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                        Home
                    </Link>
                </li>
                <li style={{ marginRight: '1rem' }}>
                    <Link
                        className={`link ${pathname === '/about' ? 'active' : ''}`}
                        href="/about"
                    >
                        about
                    </Link>
                </li>
                <li style={{ marginRight: '1rem' }}>
                    <Link
                        className={`link ${pathname === '/dashboard' ? 'active' : ''}`}
                        href="/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
                <li style={{ marginRight: '1rem' }}>
                    <Link
                        className={`link ${pathname === '/dashboard#settings' ? 'active' : ''}`}
                        href="/dashboard#settings"
                    >
                        Dashboard - setting
                    </Link>
                </li>
            </ul>
        </nav>
    )
}