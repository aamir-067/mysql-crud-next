import React from 'react'
import Link from "next/link";
const NavBar = () => {
    return (
        <div className='w-full h-20 flex justify-end items-center'>
            <ul className='flex justify-between gap-10 items-center'>
                <li>
                    <Link href="/">home</Link>
                </li>
                <li>
                    <Link href="/add">Add</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar