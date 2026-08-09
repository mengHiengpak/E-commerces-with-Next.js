'use client'

import { useEffect, useState } from "react";

export default function CountDown() {

    const [timeLeft, setTimeLeft] = useState({
        days: 4,
        hours: 12,
        minutes: 34,
        seconds: 30,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0)
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0)
                    return {
                        ...prev,
                        hours: prev.hours - 1,
                        minutes: 59,
                        seconds: 59,
                    };
                if (prev.days > 0)
                    return {
                        ...prev,
                        days: prev.days - 1,
                        hours: 23,
                        minutes: 59,
                        seconds: 59,
                    };
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (num: number) => String(num).padStart(2, "0")

    const timeUnits = [
        { label: 'Days', value: formatTime(timeLeft.days) },
        { label: 'Hr', value: formatTime(timeLeft.hours) },
        { label: 'Mins', value: formatTime(timeLeft.minutes) },
        { label: 'Sec', value: formatTime(timeLeft.seconds) }
    ]

    return (
        <div className="flex flex-col p-4">
            {/* Heading Title */}
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">
                Hurry, Before It’s Too Late!
            </h2>

            {/* Countdown Cards */}
            <div className="flex items-center gap-3 md:gap-4">
                {timeUnits.map((unit, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                        {/* Rounded Digit Box */}
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center">
                            <span className="text-2xl md:text-3xl font-mono font-medium text-gray-800 tracking-wider">
                                {unit.value}
                            </span>
                        </div>

                        {/* Label below */}
                        <span className="text-sm md:text-base font-normal text-gray-600">
                            {unit.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}