import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';

const ProductList = () => {
    return (
        <>
            <div>
                <h1 className="font-bold text-4xl text-center pt-20">New Arrivals</h1>
                <p className="pt-5 text-center">Lorem ipsum dolor sit amet, consectetur adipicing elit. Scelerisque duis ultrices <br />
                    sollicidin aliquam sem. Scelerisque duis ultrices sollicitudin
                </p>

                <div className="pt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
                    <div>
                        <Button variant="outline" className="px-8 py-6 border-transparent bg-gray-300 text-gray-500 font-bold hover:bg-black hover:text-white">
                            Men Fashion
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline" className="px-8 py-6 border-transparent bg-gray-300 text-gray-500 font-bold hover:bg-black hover:text-white">
                            Women is Fashion
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline" className="px-8 py-6 border-transparent bg-gray-300 text-gray-500 font-bold hover:bg-black hover:text-white">
                            Women Accessories
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline" className="px-8 py-6 border-transparent bg-gray-300 text-gray-500 font-bold hover:bg-black hover:text-white">
                            men Accessories
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline" className="px-8 py-6 border-transparent bg-gray-300 text-gray-500 font-bold hover:bg-black hover:text-white">
                            Discount Deals
                        </Button>
                    </div>
                </div>
            </div>

            <div className="pt-15 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
                <div className="product-card w-full max-w-80 mx-auto bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    {/* ផ្នែករូបភាព និង Sale Tag */}
                    <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                        <Image
                            src="/39A4138_46a232e7-4b67-4aea-b3e1-f8b3a9d18b00.webp"
                            alt="Radiant Gown"
                            width={1000} height={1000} className="w-full h-full object-cover"
                            priority
                        />
                        {/* Sale Badge */}
                        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider">
                            SALE
                        </span>
                    </div>

                    {/* ផ្នែកព័ត៌មាន (Title & Stars) */}
                    <div className="flex items-start justify-between mb-1">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Radiant Gown</h1>
                            <p className="text-sm text-gray-400">Al Madina Shop</p>
                        </div>

                        {/* ផ្កាយ Rating ៥ */}
                        <div className="flex items-center gap-0.5 text-amber-500 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                            ))}
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <p className="text-xs text-gray-500 font-medium my-3">
                        (2.2k) Customer Reviews
                    </p>

                    {/* ផ្នែកតម្លៃ និង ប៊ូតុង Shop Now */}
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-gray-800">$23.50</span>
                        <button className="bg-gray-900 hover:bg-black text-white text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors">
                            Shop Now <span>&raquo;</span>
                        </button>
                    </div>
                </div>
                <div className="product-card w-full max-w-80 mx-auto bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    {/* ផ្នែករូបភាព និង Sale Tag */}
                    <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                        <Image
                            src="/39A4138_46a232e7-4b67-4aea-b3e1-f8b3a9d18b00.webp"
                            alt="Radiant Gown"
                            width={1000} height={1000} className="w-full h-full object-cover"
                        />
                        {/* Sale Badge */}
                        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider">
                            SALE
                        </span>
                    </div>

                    {/* ផ្នែកព័ត៌មាន (Title & Stars) */}
                    <div className="flex items-start justify-between mb-1">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Radiant Gown</h1>
                            <p className="text-sm text-gray-400">Al Madina Shop</p>
                        </div>

                        {/* ផ្កាយ Rating ៥ */}
                        <div className="flex items-center gap-0.5 text-amber-500 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                            ))}
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <p className="text-xs text-gray-500 font-medium my-3">
                        (2.2k) Customer Reviews
                    </p>

                    {/* ផ្នែកតម្លៃ និង ប៊ូតុង Shop Now */}
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-gray-800">$23.50</span>
                        <button className="bg-gray-900 hover:bg-black text-white text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors">
                            Shop Now <span>&raquo;</span>
                        </button>
                    </div>
                </div>
                <div className="product-card w-full max-w-80 mx-auto bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    {/* ផ្នែករូបភាព និង Sale Tag */}
                    <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                        <Image
                            src="/39A4138_46a232e7-4b67-4aea-b3e1-f8b3a9d18b00.webp"
                            alt="Radiant Gown"
                            width={1000} height={1000} className="w-full h-full object-cover"
                        />
                        {/* Sale Badge */}
                        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider">
                            SALE
                        </span>
                    </div>

                    {/* ផ្នែកព័ត៌មាន (Title & Stars) */}
                    <div className="flex items-start justify-between mb-1">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Radiant Gown</h1>
                            <p className="text-sm text-gray-400">Al Madina Shop</p>
                        </div>

                        {/* ផ្កាយ Rating ៥ */}
                        <div className="flex items-center gap-0.5 text-amber-500 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                            ))}
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <p className="text-xs text-gray-500 font-medium my-3">
                        (2.2k) Customer Reviews
                    </p>

                    {/* ផ្នែកតម្លៃ និង ប៊ូតុង Shop Now */}
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-gray-800">$23.50</span>
                        <button className="bg-gray-900 hover:bg-black text-white text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors">
                            Shop Now <span>&raquo;</span>
                        </button>
                    </div>
                </div>
                <div className="product-card w-full max-w-80 mx-auto bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    {/* ផ្នែករូបភាព និង Sale Tag */}
                    <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                        <Image
                            src="/39A4138_46a232e7-4b67-4aea-b3e1-f8b3a9d18b00.webp"
                            alt="Radiant Gown"
                            width={1000} height={1000} className="w-full h-full object-cover"
                        />
                        {/* Sale Badge */}
                        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider">
                            SALE
                        </span>
                    </div>

                    {/* ផ្នែកព័ត៌មាន (Title & Stars) */}
                    <div className="flex items-start justify-between mb-1">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Radiant Gown</h1>
                            <p className="text-sm text-gray-400">Al Madina Shop</p>
                        </div>

                        {/* ផ្កាយ Rating ៥ */}
                        <div className="flex items-center gap-0.5 text-amber-500 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                            ))}
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <p className="text-xs text-gray-500 font-medium my-3">
                        (2.2k) Customer Reviews
                    </p>

                    {/* ផ្នែកតម្លៃ និង ប៊ូតុង Shop Now */}
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-gray-800">$23.50</span>
                        <button className="bg-gray-900 hover:bg-black text-white text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors">
                            Shop Now <span>&raquo;</span>
                        </button>
                    </div>
                </div>
                <div className="product-card w-full max-w-80 mx-auto bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    {/* ផ្នែករូបភាព និង Sale Tag */}
                    <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                        <Image
                            src="/39A4138_46a232e7-4b67-4aea-b3e1-f8b3a9d18b00.webp"
                            alt="Radiant Gown"
                            width={1000} height={1000} className="w-full h-full object-cover"
                        />
                        {/* Sale Badge */}
                        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider">
                            SALE
                        </span>
                    </div>

                    {/* ផ្នែកព័ត៌មាន (Title & Stars) */}
                    <div className="flex items-start justify-between mb-1">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Radiant Gown</h1>
                            <p className="text-sm text-gray-400">Al Madina Shop</p>
                        </div>

                        {/* ផ្កាយ Rating ៥ */}
                        <div className="flex items-center gap-0.5 text-amber-500 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                            ))}
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <p className="text-xs text-gray-500 font-medium my-3">
                        (2.2k) Customer Reviews
                    </p>

                    {/* ផ្នែកតម្លៃ និង ប៊ូតុង Shop Now */}
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-gray-800">$23.50</span>
                        <button className="bg-gray-900 hover:bg-black text-white text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors">
                            Shop Now <span>&raquo;</span>
                        </button>
                    </div>
                </div>
                <div className="product-card w-full max-w-80 mx-auto bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                    {/* ផ្នែករូបភាព និង Sale Tag */}
                    <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
                        <Image
                            src="/39A4138_46a232e7-4b67-4aea-b3e1-f8b3a9d18b00.webp"
                            alt="Radiant Gown"
                            width={1000} height={1000} className="w-full h-full object-cover"
                            />
                        {/* Sale Badge */}
                        <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md tracking-wider">
                            SALE
                        </span>
                    </div>

                    {/* ផ្នែកព័ត៌មាន (Title & Stars) */}
                    <div className="flex items-start justify-between mb-1">
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Radiant Gown</h1>
                            <p className="text-sm text-gray-400">Al Madina Shop</p>
                        </div>

                        {/* ផ្កាយ Rating ៥ */}
                        <div className="flex items-center gap-0.5 text-amber-500 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                            ))}
                        </div>
                    </div>

                    {/* Customer Reviews */}
                    <p className="text-xs text-gray-500 font-medium my-3">
                        (2.2k) Customer Reviews
                    </p>

                    {/* ផ្នែកតម្លៃ និង ប៊ូតុង Shop Now */}
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-gray-800">$23.50</span>
                        <button className="bg-gray-900 hover:bg-black text-white text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors">
                            Shop Now <span>&raquo;</span>
                        </button>
                    </div>
                    </div>
                </div>
            </div>


            <div className="flex items-center justify-center pt-10">
                <Button className="p-7 w-45">View More</Button>
            </div>
        </>
    )
}

export default ProductList
