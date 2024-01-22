import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const isAuthenticated = true;

    if(isAuthenticated) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL(`/login`, request.url));
}

export const config = {
    matcher: '/dashboard'
}