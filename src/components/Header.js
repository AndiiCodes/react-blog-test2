import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex items-center bg-black text-white p-5 justify-between'>
    <h1 className='text-xl md:text-2xl lg:text-4xl' >AndiiCodes</h1>

    <nav>
        <ul className='flex'>
            <li className='mr-6'>
                <Link to={"/react-blog-test2"}>
                    <h2>Home</h2>
                </Link>
            </li>
            
            <li>
                <Link to={"/react-blog-test2/blog"}>
                    <h2>blog</h2>
                </Link>
            </li>

            
        </ul>
    </nav>

    </div>
  )
}
