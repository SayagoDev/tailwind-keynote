import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import backgroundImage from "@/public/images/background-newsletter.jpg";

function ArrowRightIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Suscríbete a nuestro Newsletter">
      <Container>
        <div className="md:rounded-5xl relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute top-0 left-1/2 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Mantente al día
              </p>
              <p className="mt-4 text-lg tracking-tight text-slate-900">
                Recibe actualizaciones sobre todos nuestros eventos y sé el
                primero en ser notificado cuando las entradas salgan a la venta.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-blue-900">
                Suscríbete a nuestro boletín{" "}
                <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                <input
                  type="text"
                  required
                  placeholder="Tu correo electrónico"
                  aria-label="Tu correo electrónico"
                  className="-my-2.5 flex-auto bg-transparent pr-2.5 pl-6 text-base text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                />
                <Button type="submit">
                  <span className="sr-only sm:not-sr-only">Suscríbete hoy</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
