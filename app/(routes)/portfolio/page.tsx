import ContainerPage from "@/components/container";
import PortfolioBox from "@/components/portfolio-box";
import TransitionPage from "@/components/transition-page";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <div className="flex flex-col items-center min-h-screen px-4 py-12 max-w-7xl mx-auto">
        {/* Título */}
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
            Mis últimos{" "}
            <span className="font-bold text-secondary">
            trabajos realizados
            </span>
        </h1>

        {/* Grid de portfolios */}
        <div className="relative z-10 grid gap-6 mt-10 w-full 
                        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                        justify-items-center">
            {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data}/>
            ))}
        </div>
        </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
// debes añadir otro <AvatarPortfolio> que debes crealo en components para usarlo aqui esta en el min 1:47:20 por ahi 