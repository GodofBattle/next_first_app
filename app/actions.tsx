'use server'

import { revalidatePath, revalidateTag } from "next/cache"
import { permanentRedirect, redirect } from "next/navigation";

export async function createPost(id: string) {
    try {
        // Call database
    } catch (error) {
        // Handle errors
    }

    revalidatePath('/posts'); // Update cached posts
    redirect(`/posts/${id}`);    // Navigate to the new post page
}

export async function updateUserName(username: string, formData: FormData) {
    try {
        // Call database
    } catch (error) {
        // Handle errors
    }

    revalidateTag('username');
    permanentRedirect(`/profile/${username}`);
}