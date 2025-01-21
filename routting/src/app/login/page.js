import React from 'react'
import Linking from "../components/Linking"

function Login() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">  Login page
            <Linking linking="/" Link="Home" />
        </div>
    )
}

export default Login