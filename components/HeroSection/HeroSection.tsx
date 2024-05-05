// components/HeroSection.tsx
"use client";
import Image from 'next/image';
import React from 'react';
import { LayoutHero } from './LayoutHero';
import { Type } from 'lucide-react';
import { TypewriterEffectSmoothDemo } from './TypeWriterBranding';

const HeroSection: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="relative w-full h-[300px] flex items-center justify-center">
                {/* Assuming the image is named hero.jpg and located in the public folder */}
                <Image
                    src="/christelle-bourgeois-Aq7paIaerrY-unsplash.jpg" // Update the src to the path of your image in the public folder
                    alt="Hero Image"
                    layout="fill" // This will make the image fill the container
                    objectFit="cover" // This will cover the area without stretching the image
                    quality={100} // Adjust the quality as needed
                />
            </div>

            <div className='flex flex-col items-center justify-center'>
                <TypewriterEffectSmoothDemo />
            </div>

            <div>
                <LayoutHero />

            </div>

        </div>


    );
};

export default HeroSection;