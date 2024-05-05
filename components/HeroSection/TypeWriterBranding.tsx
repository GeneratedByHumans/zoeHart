"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
    const words = [
        {
            text: "Handcrafted",
        },
        {
            text: "Apparel",
        },
        {
            text: "accros the",
        },
        {
            text: "globe",
        },
        {
            text: "Zoe Hart.",
            className: "text-red-500 dark:text-blue-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                The best
            </p>
            <TypewriterEffectSmooth words={words} />


        </div>
    );
}
