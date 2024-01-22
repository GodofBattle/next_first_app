'use client'

import { useRouter } from "next/navigation"
import { createPost } from "../actions"

export default function PostAction() {
    const router = useRouter();
    
    return (
        <div>
            <button onClick={() => createPost('234234')}>
                Go Go Action with Post
            </button>
            <br/>
            <button type="button" onClick={() => router.push('/dashboard')}>
                Go Dashboard
            </button>
        </div>
    )
}