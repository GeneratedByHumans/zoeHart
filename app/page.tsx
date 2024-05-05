// /app/page.tsx
import Image from "next/image";
import { auth } from "@/auth";
import dynamic from 'next/dynamic';
import Subscribe from "@/components/subscribe/Subscribe";
import HeroSection from "@/components/HeroSection/HeroSection";


const CookieBanner = dynamic(() => import('../components/cookies/CookieBanner'), {
  ssr: false
});





export default async function Home() {
  return <main>
    <CookieBanner />

    <HeroSection />

    {/* <Subscribe /> */}


  </main>;
}
