'use client'

export default function PostInfo({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>{ params.id }</h1>
        </div>
    )
}