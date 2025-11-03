import Link from 'next/link'
import React from 'react'

export default
    function Sidebar() {
    return (
        <>
            <div className="flex flex-col cursor-pointer gap-2  justify-end h-full text-xl">
                <Link href={'/about'}>About Me</Link>
                <p>Works</p>
                <p>Contact</p>
            </div>
        </>
    )
}

