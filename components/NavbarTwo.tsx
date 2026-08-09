"use client";
import Link from "next/link";
import React from "react";
import { GrDeliver } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavbarTwo() {
    return (
        <nav>
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b-2 border-gray-300 md:gap-8 md:px-6 md:py-4">
                <div className="flex flex-wrap items-center gap-3 md:gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/aboutus">About Us</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/brand">Brand</Link>
                </div>

                <div className="hidden lg:flex gap-2 items-center">
                    <GrDeliver />
                    <p>Get Free delivery from $300</p>
                    <Link href="/shop">Shop Now</Link>
                </div>

                <div className="flex gap-3 items-center md:gap-5">
                    <div className="hidden lg:flex gap-2 items-center">
                        <IoLocationSharp />
                        <p>Oder Tracking</p>
                    </div>

                    <div className="flex gap-1 items-center md:gap-2">
                        <VscAccount />
                        <Link href="/signin">Login</Link>
                        <p>/</p>
                        <Link href="/register">Register</Link>
                    </div>

                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                render={
                                    <Button className="border-0 shadow-none">
                                        Language
                                    </Button>
                                }
                            />
                            <DropdownMenuContent
                                className="w-40 py-1.5"
                                align="start"
                            >
                                <DropdownMenuItem className="px-3 py-2">
                                    English
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-3 py-2">
                                    Khmer
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarTwo;
