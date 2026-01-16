"use client";

import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Objectives from "@/components/Objectives";
import WhyNeeded from "@/components/WhyNeeded";
import StateInfo from "@/components/StateInfo";
import InteractiveMap from "@/components/InteractiveMap";
import Districts from "@/components/Districts";
import ConstitutionalBasis from "@/components/ConstitutionalBasis";
import MovementStrategy from "@/components/MovementStrategy";
import RegistrationForm from "@/components/RegistrationForm";
import SloganBanner from "@/components/SloganBanner";
import FloatingJoinButton from "@/components/FloatingJoinButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-orange-50 via-white to-green-50">
      <Hero />
      <Vision />
      <Objectives />
      <WhyNeeded />
      <StateInfo />
      <InteractiveMap />
      <Districts />
      <ConstitutionalBasis />
      <MovementStrategy />
      <RegistrationForm />
      <SloganBanner />
      <FloatingJoinButton />
      <Footer />
    </main>
  );
}
