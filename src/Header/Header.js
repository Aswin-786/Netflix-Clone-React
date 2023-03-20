import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='fixed h-20 w-full text-white bg-slate-900 mb-10 flex items-center justify-between tracking-widest z-30'>
      <p className='text-4xl font-bold pl-10 cursor-pointer tracking-widest'>NETFLIX</p>
      <p className='pr-10 hover:opacity-60'>Contact</p>
    </div>
  )
}
export default Header