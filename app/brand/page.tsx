"use client";

import CountDown from "@/components/CountDown"
import { Button } from "@/components/ui/button"
import PromoCards from '../../components/PromoCards';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Brand = () => {
      useGSAP(() => {
    gsap.from('#best', {
      yPercent: 120,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
    })

    gsap.from('#best2', {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      delay: 0.2,
    })
    gsap.from('.promo-card', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.15,
      delay: 0.3,
    })

  }, []);

    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-8 px-4 lg:flex-row lg:gap-5">
                <div>
                    <div>
                    <h1 id="best" className="text-3xl pb-2 md:text-5xl">Deal Of The Weeks</h1>
                    <p id="best2">Discover the epitome of fashion Chic. Threads, where <br/>
                        style meets substance. Explore a curated collection of the <br/>
                        lastest trendsm ebsuring you step out in confidence and flair
                    </p>
                    </div>
                    <div className="pt-5 pb-5 ">
                        <Button className="h-12 w-45">Buy Now &gt;&gt;</Button>
                    </div>
                    <div>
                        <CountDown />
                    </div>
                </div>

                <div>
                    <PromoCards />
                </div>
            </div>
        </div>
    )
}

export default Brand