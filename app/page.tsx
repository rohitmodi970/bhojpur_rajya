"use client";

import Hero from "./bhojpur-rajya/components/Hero";
import Vision from "./bhojpur-rajya/components/Vision";
import Objectives from "./bhojpur-rajya/components/Objectives";
import WhyNeeded from "./bhojpur-rajya/components/WhyNeeded";
import StateInfo from "./bhojpur-rajya/components/StateInfo";
import Bhojpur3DMap from "./bhojpur-rajya/components/BhojpurMap3D";
import InteractiveMap from "./bhojpur-rajya/components/InteractiveMap";
import Districts from "./bhojpur-rajya/components/Districts";
import ConstitutionalBasis from "./bhojpur-rajya/components/ConstitutionalBasis";
import MovementStrategy from "./bhojpur-rajya/components/MovementStrategy";
import RegistrationForm from "./bhojpur-rajya/components/RegistrationForm";
import SloganBanner from "./bhojpur-rajya/components/SloganBanner";
import FloatingJoinButton from "./bhojpur-rajya/components/FloatingJoinButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-orange-50 via-white to-green-50">
      <Hero />
      <Vision />
      <Objectives />
      <WhyNeeded />
      <StateInfo />
      <Bhojpur3DMap />
      <Districts />
      <ConstitutionalBasis />
      <MovementStrategy />
      <RegistrationForm />
      <SloganBanner />
      <FloatingJoinButton />
    </main>
  );
}
