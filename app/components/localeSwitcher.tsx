'use client'

import { usePathname } from "next/navigation"

export function LocaleSwitcher() {
    const pathname = usePathname();

    function switchLocale(locale: string) {
        const macher = pathname.match(/[/][a-z][a-z][/]/);
        const newPath = macher ? `/${locale}/${pathname.split(macher[0])[1]}` : `/${locale}${pathname}`;
        window.history.replaceState(null, '', newPath);
    }

    return (
        <>
            <button onClick={() => switchLocale('en')}>English</button>
            <br/>
            <button onClick={() => switchLocale('fr')}>French</button>
        </>
    )
}