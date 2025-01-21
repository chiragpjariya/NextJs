import { NextResponse } from "next/server";

export  function middleware(request){

    // if(request.nextUrl.pathname != '/login'){
    console.log(request);
    
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    // }
}
export const config= {
    matcher:'/about/...not-found/:path*'
}