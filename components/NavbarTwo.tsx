import Link from 'next/link'
import React from 'react'
import { GrDeliver } from 'react-icons/gr'
import { IoLocationSharp } from 'react-icons/io5'
import { VscAccount } from 'react-icons/vsc'
function NavbarTwo() {
  return (
    <nav>
        <div className="flex justify-between items-center  px-3 mr-5 ml-10 ">
            <div className="flex gap-2 items-center justify-between">
                <Link href="/">Home</Link>
                <Link href="/aboutus">About Us</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/brand">Brand</Link>
            </div>

            <div className="flex gap-2 items-center justify-between">
                <GrDeliver/>
                <p>Get Free delivery from $300</p>
                <Link href="/shop">Shop Now</Link>
            </div>

            <div className="flex gap-5 items-center">
                <div className="flex gap-2 items-center justify-between">
                    <IoLocationSharp/>
                    <p>Oder Tracking</p>
                </div>

                <div className="flex gap-2 items-center justify-between">
                    <VscAccount/>
                    <Link href="/signin">Login</Link>
                    <p>/</p>
                    <Link href="/register">Register</Link>
                </div>

                  <div className="flex gap-2 items-center justify-between">
                      <div className="dropdown dropdown-hover">
                          <div tabIndex={0} role="button" className="btn m-1">Hover</div>
                          <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                              <li><a>Item 1</a></li>
                              <li><a>Item 2</a></li>
                          </ul>
                      </div>
                  </div>

            </div>
        </div>
    </nav>
  )
}

export default NavbarTwo