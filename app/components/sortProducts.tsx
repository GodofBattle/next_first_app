'use client'

import { useSearchParams } from "next/navigation"

export default function SortProducts() {
    const searchParams = useSearchParams();

    const updateSorting = (sortOrder: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', sortOrder);
        window.history.pushState(null, '', `?${params.toString()}`);
    }

    return (
        <>
            <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
            <br/>
            <button onClick={() => updateSorting('desc')}>Sort Descending</button>
        </>
    )
}