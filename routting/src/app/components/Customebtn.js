"use client"
import React from 'react'
import { Button as MaterialButton } from "@material-tailwind/react";
import { useRouter } from 'next/navigation'
function Customebtn({ linking, linkText }) {

    const router = useRouter()

    function navigation(linking) {
        router.push(linking)
    }

    return (
        <>
            <MaterialButton
                className='bg-blue-500 w-[200px] h-8 rounded-md'
                onClick={() => navigation(linking)}
                ripple={true}
                color='blue'
                
            >{linkText}</MaterialButton>
        </>
    )
}

export default Customebtn