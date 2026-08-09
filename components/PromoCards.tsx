'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PromoCards() {

    // 1. Full list of items in your slider
    const allCards = [
        {
            id: 1,
            image: '/il_1080xN.6805271679_9hk8.webp',
            number: '01',
            subtitle: 'Summer Sale 1',
            discount: '60% OFF',
        },
        {
            id: 2,
            image: '/b8403bcab2c1f33e6afb5c24240acac2.jpg',
            number: '02',
            subtitle: 'Summer Sale 2',
            discount: '50% OFF',
        },
        {
            id: 3,
            image: '/39A4138_46a232e7-4b67-4aea-b3e1-f8b3a9d18b00.webp',
            number: '03',
            subtitle: 'Winter Sale 3',
            discount: '40% OFF',
        },
        {
            id: 4,
            image: '/b8403bcab2c1f33e6afb5c24240acac2.jpg',
            number: '04',
            subtitle: 'Spring Sale 4',
            discount: '30% OFF',
        }
    ];

    // 2. Track current active index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Show 2 cards at a time (on medium+ screens)
    const itemsPerPage = 2;
    const totalSlides = Math.ceil(allCards.length / itemsPerPage);

    // Navigation handlers
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    // Get current 2 cards to display
    const visibleCards = allCards.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full transition-all duration-300">
                {visibleCards.map((card) => (
                    <div
                        key={card.id}
                        className="promo-card relative h-100 w-60 max-w-100 mx-auto sm:h-120 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                    >
                        {/* Background Image */}
                        <Image
                            src={card.image}
                            alt={card.subtitle}
                            fill
                            priority
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlapping Bottom-Left White Card */}
                        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl rounded-bl-none p-5 pr-10 shadow-md">
                            <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-1">
                                <span>{card.number}</span>
                                <span className="w-4 h-[1px] bg-gray-400"></span>
                                <span>{card.subtitle}</span>
                            </div>
                            <p className="text-2xl font-semibold text-gray-900 tracking-tight">
                                {card.discount}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dynamic Pagination Indicators (Dots/Bars) */}
            <div className="flex items-center gap-2 mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === index
                                ? 'w-8 bg-slate-900'
                                : 'w-6 bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 mt-6">
                <button
                    onClick={handlePrev}
                    aria-label="Previous slide"
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors active:scale-95"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next slide"
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors active:scale-95"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
} 