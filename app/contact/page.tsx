"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';

export default function Contact() {
  return (
    <footer className="bg-[#222222] text-gray-400 text-sm py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-800">

        {/* Column 1: Logo & Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-wide">Logo Here</h2>
          <address className="not-italic text-xs leading-relaxed space-y-1">
            <p>4562 Park Lane Streetview</p>
            <p>SydneyAustralia 75601</p>
          </address>
          <div className="text-xs space-y-1 pt-2">
            <p>+61-234-345-674</p>
            <p>Shop@gmail.com</p>
          </div>
          {/* Social Icons */}
          <div className="flex items-center gap-3 text-gray-300 pt-2">
            <Link href="#" className="hover:text-white transition-colors"><FaFacebook className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><FaTwitter className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><FaYoutube className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><FaInstagram className="w-4 h-4" /></Link>
            <Link href="#" className="hover:text-white transition-colors"><FaLinkedin className="w-4 h-4" /></Link>
          </div>
        </div>

        {/* Column 2: Supports Links */}
        <div>
          <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">SUPPORTS</h3>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">About Page</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Size Guide</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">FAQ&apos;s Page</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
          </ul>
        </div>

        {/* Column 3: Shop Links */}
        <div>
          <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">SHOP</h3>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="#" className="hover:text-white transition-colors">Men&apos;s Shopping</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Women&apos;s Shopping</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Kids&apos;s Shopping</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Furniture</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Discounts</Link></li>
          </ul>
        </div>

        {/* Column 4: Company Links */}
        <div>
          <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">COMPANY</h3>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Affiliate</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Login</Link></li>
          </ul>
        </div>

        {/* Column 5: Subscribe & Payment Icons */}
        <div className="space-y-4">
          <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">SUBSCRIBE</h3>
          <p className="text-xs leading-relaxed text-gray-400">
            Receive updates, hot deals, discounts sent straignt in your inbox daily
          </p>

          {/* Email Subscription Form */}
          <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#3d3d3d] text-xs text-white placeholder-gray-400 px-4 py-3 rounded-none focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="absolute right-3 text-gray-400 hover:text-white transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Secure Payments Section */}
          <div className="pt-2">
            <p className="text-xs text-gray-300 font-medium mb-3">Secure Payments</p>
            <div className="flex items-center gap-2 flex-wrap">
              {/* Visa */}
              <div className="bg-[#1A1F71] text-white text-[10px] font-bold italic px-2.5 py-1 rounded">
                VISA
              </div>
              {/* Diners / Blue Badge */}
              <div className="bg-[#0079C1] text-white text-[10px] font-bold p-1 rounded flex items-center justify-center w-7 h-6">
                <span className="border border-white rounded-full w-4 h-4 flex items-center justify-center text-[8px]">D</span>
              </div>
              {/* Amex */}
              <div className="bg-[#006FCF] text-white text-[8px] font-bold px-1.5 py-1 rounded uppercase tracking-tighter leading-none text-center">
                AMERICA<br />EXPRESS
              </div>
              {/* Discover */}
              <div className="bg-[#FF6000] text-white text-[9px] font-bold px-2 py-1 rounded">
                DISCOVER
              </div>
              {/* Mastercard */}
              <div className="bg-[#252525] p-1 rounded flex items-center justify-center w-8 h-6">
                <div className="flex -space-x-1">
                  <div className="w-3.5 h-3.5 bg-red-500 rounded-full"></div>
                  <div className="w-3.5 h-3.5 bg-amber-500 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-gray-500">
        &copy; 2024 All CopyRight Reserved Shop
      </div>
    </footer>
  );
}
