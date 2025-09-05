"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center px-4 py-10 gap-8 md:gap-0 md:grid-cols-2 md:min-h-screen">
        
        {/* Imagen */}
        <div className="flex justify-center items-center">
          <Image
            src="/yo2.png"
            priority
            width={220}
            height={220}
            alt="Avatar"
            className="rounded-full object-contain md:w-[400px] md:h-[400px]"
          />
        </div>

        {/* Texto y botones */}
        <div className="flex flex-col justify-center max-w-md mx-auto md:mx-0">
          <h1 className="mb-4 text-xl leading-tight text-center md:text-left md:text-4xl md:mb-8">
            Hola, soy Pequod y intento{" "}
            <TypeAnimation
              sequence={[
                "programar",
                3000,
                "optimizar",
                3000,
                "implementar",
                3000,
                "desarrollar",
                3000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="block font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-6 text-base text-center md:text-left md:text-lg md:mx-0">
            Practico desarrollar frontend como backend ademas de realizar analisis, como creacion de base de datos para mejorar dia a dia ademas de tener conocimientos para diferentes diagramas UML sea de flujo de datos, clases, actividades, BPMN entre otros .
          </p>

          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-start md:gap-8">
            <a
              href="/portfolio"
              className="px-3 py-2 text-sm md:text-base transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver proyectos
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;