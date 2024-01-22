'use client'

import { useRouter } from "next/navigation"

export function GoToTop() {
    const router = useRouter();

    return (
        <button type="button" onClick={() => router.push('/dashboard', { scroll: true })}>
            Go To Top
        </button>
    )
}