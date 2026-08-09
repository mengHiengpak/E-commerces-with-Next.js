"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProductList from "@/components/ProductList";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Shop = () => {
      useGSAP(() => {

    gsap.from('#thirt', {
      yPercent: 120,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
    })

    gsap.from('.category-item', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.1,
      delay: 0.3,
    })

    gsap.from('.product-card', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.15,
      delay: 0.5,
    })

  }, []);

    return (
        <>
            <h1 id="thirt" className="pt-8 text-3xl font-bold text-center md:pt-13 md:text-4xl">Trending Category</h1>
            <div>
                <div  className="pt-10 grid grid-cols-3 place-items-center md:grid-cols-6 md:gap-2">
                    <div className="category-item">
                        <Button className="px-5.5 py-10 border border-black rounded-full bg-transparent hover:border-none duration-300">
                            <Image
                                src="/dress.svg"
                                alt="dress"
                                width={5}
                                height={10}
                                priority
                                className="w-9 h-10 transition-all duration-100 hover:[filter:brightness(100)_invert(10)]"
                            />
                        </Button>
                        <h1 className="pt-2 text-sm text-center">Men is Wear</h1>
                    </div>

                    <div className="category-item">
                        <Button className="px-5.5 py-10 border border-black rounded-full bg-transparent hover:border-none duration-300">
                            <Image
                                src="/shirt.svg"
                                alt="dress"
                                width={5}
                                height={10}
                                priority
                                className="w-8 h-9 transition-all duration-100 hover:[filter:brightness(100)_invert(10)]"
                            />
                        </Button>
                        <h1 className="pt-2 text-sm text-center">Kid is Wear</h1>
                    </div>

                    <div className="category-item">
                        <Button className="px-5.5 py-10 border border-black rounded-full bg-transparent hover:border-none duration-300">
                            <Image
                                src="/cartoon-handbag.svg"
                                alt="dress"
                                width={5}
                                height={10}
                                priority
                                className="w-8 h-9 transition-all duration-100 hover:[filter:brightness(100)_invert(10)]"
                            />
                        </Button>
                        <h1 className="pt-2 text-sm text-center">Accessories</h1>
                    </div>

                    <div className="category-item">
                        <Button className="px-5.5 py-10 border border-black rounded-full bg-transparent hover:border-none duration-300">
                            <Image
                                src="/running-shoe.svg"
                                alt="dress"
                                width={5}
                                height={10}
                                priority
                                className="w-8 h-9 transition-all duration-100 hover:[filter:brightness(100)_invert(10)]"
                            />
                        </Button>
                        <h1 className="pt-2 text-sm">Men is Shoe</h1>
                    </div>

                    <div className="category-item">
                        <Button className="px-5.5 py-10 border border-black rounded-full bg-transparent hover:border-none duration-300">
                            <Image
                                src="/monitor.svg"
                                alt="dress"
                                width={5}
                                height={10}
                                priority
                                className="w-8 h-9 transition-all duration-100 hover:[filter:brightness(100)_invert(10)] "
                            />
                        </Button>
                        <h1 className="pt-2 text-sm text-center">Television</h1>
                    </div>

                    <div className="category-item">
                        <Button className="px-5.5 py-10 border border-black rounded-full bg-transparent hover:border-none duration-300">
                            <Image
                                src="/jeans.svg"
                                alt="dress"
                                width={5}
                                height={10}
                                priority
                                className="w-8 h-9 transition-all duration-100 hover:[filter:brightness(100)_invert(10)] "
                            />
                        </Button>
                        <h1 className="pt-2 text-sm text-center">Men is Pants</h1>
                    </div>
                </div>
            </div>
            <div>
                < ProductList />
            </div>
        </>
    )
}

export default Shop
