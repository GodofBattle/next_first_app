import { NextResponse } from "next/server";
import { NextFetchEvent, NextRequest } from "next/server";
import getUser from "./app/lib/auth";
import Negotiator from 'negotiator';
// import {} from '@formatjs/intl-localematcher';

let locales = [ 'ko', 'ko-KR', 'en-US', 'nl-NL', 'nl' ];

const getLocales = (request: NextRequest) => {
    let accept_lang = request.headers.get('accept-language');
    let defaultLocales = locales[0];
    let headers = { 'accept-language': accept_lang ? accept_lang : defaultLocales };
    let languages = new Negotiator({ headers }).languages();

    return languages[0];
}

const middlewareAPI = (request: NextRequest, event: NextFetchEvent) => {
    if(!getUser()) {
        return Response.json({
            success: false,
            message: 'authentication failed'
        }, {
            status: 401
        });
    } else {
        event.waitUntil(
            fetch('http://211.53.225.69:3000', {
                method: 'GET'
            })
        );

        return NextResponse.next();
    }
}

export function middleware(request: NextRequest, event: NextFetchEvent) {
    const { pathname } = request.nextUrl;

    console.info(pathname);
    
    if(pathname === '/api') {
        return middlewareAPI(request, event);
    } else {
        // Clone the request headers and set a new header 'x-hello-from-middleware1'
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-hello-from-middleware1', 'hello');

        // You can also set request headers in NextResponse.rewrite
        const response = NextResponse.next({
            request: {
                // New Request headers
                headers: requestHeaders,
            }
        });

        // Set a new response header 'x-hello-from-middleware2'
        response.headers.set('x-hello-from-middleware2', 'hello');
        return response;

        // const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`);
        // if(pathnameHasLocale) return response;

        // const locale = getLocales(request);
        // request.nextUrl.pathname = `${locale}${pathname}`;
        // return NextResponse.redirect(request.nextUrl);
    }
}

// // This function can be marked 'async' if using 'await' inside
// export function middleware(request: NextRequest) {
//     // Assume a "Cookie:nuxtjs=fast" header to be present on the incoming request
//     // Getting cookies from the request using the 'RequestCookies' API
//     let cookie = request.cookies.get('nextjs');
//     console.log(cookie);
    
//     const allCookies = request.cookies.getAll();
//     console.log(allCookies);

//     request.cookies.has('nextjs');
//     request.cookies.delete('nextjs');
//     request.cookies.has('nextjs');

//     // Setting cookies on the response using the 'ResonseCookies' API
//     const response = NextResponse.next();
//     response.cookies.set('vercel', 'fast');
//     response.cookies.set({
//         name: 'vercel',
//         value: 'fast',
//         path: '/'
//     });

//     cookie = response.cookies.get('vercel');
//     console.log(cookie);
//     // The outgoing response will have a 'Set-Cookie:vercel=fast;path=/' header.

//     return response;
// }

// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/home', request.url));
// }

// See 'Matching Paths' below to learn more
export const config = {
    matcher: [
        // SKip all internal paths (_next)
        // '/:path*',
        '/dashboard',
        '/api',
        '/((?!_next).*)'
    ],
}