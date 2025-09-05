import { Avatar } from "@/components/avatar";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <div>
      <TransitionPage />

      <div className="grid items-center px-4 py-10 gap-10 md:grid-cols-2 md:min-h-screen max-w-5xl mx-auto mt-10">
        
        {/* Texto */}
        <div className="max-w-md mx-auto text-center md:text-left md:max-w-[450px]">
          <h1 className="mb-4 text-xl font-bold leading-tight md:text-4xl md:mb-6">
            Mis servicios.
          </h1>
          <Avatar/>
          <p className="text-base md:text-lg">
            Ofrezco servicios en desarrollo y análisis de software, con experiencia en el diseño e implementación de soluciones tecnológicas.
           Mis principales competencias incluyen:
          </p>
        </div>

        {/* Slider */}
        <div className="flex justify-center">
          <SliderServices />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

// debes añadir otro <AvatarServices> que debes crealo en components para usarlo aqui esta en el min 1:32:00 por ahi 