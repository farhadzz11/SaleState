import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
     <header  className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-4xl mx-auto p-3'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
            <span className='text-slate-400'>SALE</span>
            <span className='text-slate-700'>STATE</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-start ' >

            <input type="text" placeholder='search...' className='bg-translate focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-600' />
        </form>

        <ul className='flex gap-4'>
            <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/'>Home</Link></li>
            <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/about'>About</Link></li>
            <li className='hidden sm:inline text-slate-700 hover:underline'><Link to='/signin'>Sign in</Link></li>
        </ul>
        </div>
     </header>
  )
}

export default Header
