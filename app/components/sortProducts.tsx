'use client'

import { useSearchParams } from "next/navigation"

export default function SortProducts() {
    const searchParams = useSearchParams();

    const updateSorting = (sortOrder: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', sortOrder);
        window.history.pushState(null, '', `?${params.toString()}`);
    }

    const forcedError = () => {
        console.info('forcedError');

        const t = [4,56,32];

        console.info(t[5] / 0);
        
        try {
            const t = [4,56,32];
            console.info(t[5] / 0);
            throw Error('error 11 22');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
            <br/>
            <button onClick={() => updateSorting('desc')}>Sort Descending</button>
            <br/>
            <button onClick={() => forcedError()}>Error Attack!!</button>
        </>
    )
}