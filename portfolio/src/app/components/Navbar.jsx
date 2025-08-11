import { PUBLIC_DIR_MIDDLEWARE_CONFLICT } from 'next/dist/lib/constants'
import React from 'react'

export const Navbar = () => {
  return (
   <div className="navbar shadow-sm bg-black shadow-neutral-100 p-5">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl ">Raweeroj</a>
  </div>
  
  
  <div className="navbar-end flex mr-10 ">
    <ul className="menu menu-horizontal px-1 gap-20 font-[500] text-xl text-shadow-white">
      <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button bg-blue-600">Open</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>HOME</a></li>
      <li><a>ABOUT ME</a></li>
      <li><a>ACTIVITIES</a></li>
      <li><a>STACKS</a></li>
      <li><a>CONTACT</a></li>
    </ul>
  </div>
</div>
    </ul>
    
  </div>
    
</div>
  )
}
export default Navbar;