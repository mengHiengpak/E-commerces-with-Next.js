import { Field } from '@base-ui/react/field'
import { Input } from '@base-ui/react/input'
import Link from 'next/link'
import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { SearchIcon } from "lucide-react"

function Navbar() {
  return (

    <nav className="text-lg bg-white border border-b-2 border-gray-300" >

        <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 md:gap-20 md:px-10 md:py-5">

        <div>
            <Link className='hover:text-red-600 duration-150' href="/">My Ecommerce</Link>
        </div>

        <div>
          <Field.Root className="w-full max-w-full order-last md:order-none md:w-150 md:max-w-sm">
            <Field.Label htmlFor="inline-start-input"></Field.Label>
            <div className="relative">
              <Input
                id="inline-start-input"
                placeholder="Search..."
                className="w-full pl-8 py-2 rounded-lg border border-border bg-background text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <SearchIcon className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </Field.Root>
        </div>

        <div> </div>

        <div className="flex items-center gap-4 md:ml-20 md:gap-7">
            <div className="hidden md:flex items-center gap-5">
                <FaPhoneAlt/>
                <div className="text-sm">
                  <p>Call Us Now</p>
                  <p>+1 234 567 890</p>
                </div>
            </div>

            <div className="text-3xl">
              <BsHeart/>
            </div>

            <div className="text-3xl">
              <BiShoppingBag/>
            </div>
            
            <div className="hidden md:block">
              <p>Total</p>
              <p>90.00$</p>
            </div>

            <div></div>

        </div>

        </div>
    </nav>
  )
}

export default Navbar