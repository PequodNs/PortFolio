import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

// debes añadir un <avatar> que debes crealo en components para usarlo aqui esta en el min 1:09:00 por ahi 

const PageAboutMe = () => {
    return ( 
        <>
            <TransitionPage/>
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda mi{' '}
                    <span className="font-bold text-secondary">
                        trayectoria Academica
                    </span>
                </h1>
                <CounterServices/>
                <br/>
                <p>Soy Estudiante como tambien un desarrollador con un poco de experiencia en análisis y desarrollo de software. 
                    Me marco en diseño y gestión de bases de datos, creación de interfaces modernas con CSS y Tailwind, 
                    y desarrollo de aplicaciones utilizando lenguajes como Python, C#, Java y HTML,
                    así como frameworks como Laravel bajo arquitecturas MVC.
                    Además, tengo experiencia en elaboración de diagramas de análisis y diseño, 
                    que me permiten planificar mejor los proyectos en sus primeras fases de manera clara.
                    Mi objetivo es transformar Pensamiento o ideas en aplicaciones funcionales,
                    seguras, siempre tratando de aplicar buenas prácticas de desarrollo.
                </p>
                <br/>
                <TimeLine/>
            </ContainerPage>
        </>
     );
}
 
export default PageAboutMe;