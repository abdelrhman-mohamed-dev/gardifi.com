import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className="flex items-center justify-between mt-4">
            <div className="text-xs text-gray-500 flex gap-1 ">
                <Link href="/">
                    Home
                </Link>
                <Link href="/">
                    About us
                </Link>
                <Link href="/">
                    Contact us

                </Link>
                <Link href="/">
                    Privacy Police
                </Link>
            </div>
            <p className="text-xs text-gray-500">© Gardifi ♥</p>
        </div>
    )
}

export default Footer