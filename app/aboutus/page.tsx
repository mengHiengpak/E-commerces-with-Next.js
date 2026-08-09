"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Pic = [

    { id: 1, photo: '/adidas.webp' },
    { id: 2, photo: '/nike-3-logo-png-transparent.png' },
    { id: 3, photo: '/Puma-logo.png' },
    { id: 4, photo: '/R (1).png' },
    { id: 5, photo: '/Dolce-Gabbana-Logo.png' },
    { id: 6, photo: '/R.png' },
    { id: 7, photo: '/479-4798484_zara-clothes-brand-logo-png-transparent-png.png' },
];

const AboutUs = () => {
      useGSAP(() => {

    gsap.from('#about-heading', {
      yPercent: 120,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
    })

    gsap.from('#about-text', {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      delay: 0.2,
    })

    gsap.from('#about-images img', {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.08,
      delay: 0.3,
    })

    gsap.from('#about-marquee', {
      opacity: 0,
      duration: 1,
      delay: 0.5,
    })

  }, []);
    return (
        <div>
            <div className="text-center pt-10">
                <h1 id="about-heading" className="text-3xl pb-3 md:text-4xl">Follow Us On Telegram</h1>
                <p id="about-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse accusantium commodi a, <br/>
                doloremque dolorum consequuntur dicta, atque illum soluta, pariatur ex?</p>
            </div>

            <div id="about-images" className='pt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 place-items-center px-4'>
                <Image src="/39A4138_46a232e7-4b67-4aea-b3e1-f8b3a9d18b00.webp" alt="Radiant Gown" width={1000} height={1000} className="w-40 h-50" priority/>
                <Image src="/OIP (1).webp" alt="Radiant Gown" width={1000} height={1000} className="w-40 h-50"/>
                <Image src="/OIP (2).webp" alt="Radiant Gown" width={1000} height={1000} className="w-40 h-50"/>
                <Image src="/OIP (3).webp" alt="Radiant Gown" width={1000} height={1000} className="w-40 h-50"/>
                <Image src="/OIP (4).webp" alt="Radiant Gown" width={1000} height={1000} className="w-40 h-50"/>
                <Image src="/OIP.webp" alt="Radiant Gown" width={1000} height={1000} className="w-40 h-50"/>
                <Image src="/b8403bcab2c1f33e6afb5c24240acac2.jpg" alt="Radiant Gown" width={1000} height={1000} className="w-40 h-50"/>
            </div>

            <div>
                <motion.div
                    id="about-marquee"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 100, repeat: Infinity }}
                    className='h-[12%] w-[17%] object-cover flex justify-evenly gap-3 items-center max-w-[80%] pt-5 '>
                    {Pic.map((item) => (
                        <Image
                            key={`a-${item.id}`}
                            src={item.photo}
                            alt=""
                            width={96}
                            height={96}
                            className="w-20 h-20 object-contain"
                        />
                    ))}
                    {Pic.map((item) => (
                        <Image
                            key={`b-${item.id}`}
                            src={item.photo}
                            alt=""
                            width={96}
                            height={96}
                            className="w-24 h-24 object-contain"
                        />
                    ))}
                    {Pic.map((item) => (
                        <Image
                            key={`c-${item.id}`}
                            src={item.photo}
                            alt=""
                            width={96}
                            height={96}
                            className="w-24 h-24 object-contain"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default AboutUs