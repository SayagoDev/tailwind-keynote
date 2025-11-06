import { BackgroundImage } from "./BackgroundImage";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <div className="relative py-20 sm:pt-36 sm:pb-24">
      <BackgroundImage className="-top-36 -bottom-14" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">DeceptiConf -</span>Una conferencia de
            diseño para el lado oscuro.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              La próxima generación de usuarios web es experta en tecnología y
              sospechosa. Saben cómo usar las herramientas de desarrollo, pueden
              detectar una estafa de phishing a kilómetros de distancia, y
              ciertamente no aceptan cheques de Western Union.
            </p>
            <p>
              En DeceptiConf aprenderás sobre los últimos patrones oscuros que
              se están desarrollando para engañar incluso a los visitantes más
              inteligentes, y aprenderás cómo implementarlos sin ser detectado
              nunca.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Obtén tus entradas
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ["Ponentes", "18"],
              ["Personas Asistentes", "2,091"],
              ["Lugar", "Staples Center"],
              ["Ubicación", "Los Angeles, CA"],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
