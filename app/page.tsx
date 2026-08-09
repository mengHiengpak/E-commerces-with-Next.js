"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Shop from "./shop/page";
import Brand from "./brand/page";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import AboutUs from './aboutus/page';
import Contact from './contact/page';

gsap.registerPlugin(useGSAP, SplitText);

export default function Home() {

  useGSAP(() => {

    const paragraphSplite = new SplitText('#first', {type: 'lines'})
    const wordSplite = new SplitText('#second',{type: 'lines'} )

    gsap.from(paragraphSplite.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.06,
    })

    gsap.from(wordSplite.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.06,
    })

  }, []);

  return (
    <>
    <div className="relative w-full max-w-325 mx-auto rounded-2xl overflow-hidden shadow-2xl">
      {/* 1. Background Image */}
      <Image
        src="/shopping_home.jpg"
        alt="Shopping with parents"
        width={1300}
        height={500}
        priority
        className="w-full h-60 object-cover sm:h-80 md:h-125"
      />

      {/* 2. Dark Gradient Overlay (Darks left side for text readability) */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/20" />

      {/* 3. Text & Button Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-start top-6 px-5 sm:top-12 sm:px-8 md:top-20 md:px-16 max-w-2xl text-white">
        {/* Main Title */}
        <h1 id="first" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          Elevate Your Style with <br />
          Trendsetting Fashion
        </h1>

        {/* Description Paragraph */}
        <p id="second" className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed max-w-lg">
          Discover the epitome of fashion at Chic Threads, where style meets
          substance. Explore a curated collection of the latest trends,
          ensuring you step out in confidence and flair.
        </p>

        {/* Action Button */}
        <div className="mt-6">
          <Button
            className="h-12 px-6 bg-black/60 hover:bg-black text-white border border-white/80 backdrop-blur-sm transition-all"
            >
            Buy Now &gt;&gt;
          </Button>
        </div>
      </div>
    </div>

    <div><Shop /></div>
    
    <div className="pt-10 bg-gray-100"><Brand/></div>

    <div><AboutUs/></div>

    <div className="pt-10"><Contact/></div>
    </>


  );
}