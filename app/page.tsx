import CoverParticles from "@/components/cover-particles";
import Introduction from "@/components/introduction";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <TransitionPage/>
    <div className="relative w-full h-screen bg-no-repeat bg-gradient-cover">
      <CoverParticles />
      <Introduction />
    </div>
  </main>
  );
}


/*Cosas por añadir del video "Ve el 1:09:44",  */