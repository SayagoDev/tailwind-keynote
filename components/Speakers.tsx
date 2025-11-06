"use client";

import clsx from "clsx";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { Container } from "@/components/Container";
import { DiamondIcon } from "@/components/DiamondIcon";
import andrewGreeneImage from "@/public/images/avatars/andrew-greene.jpg";
import cathleneBurrageImage from "@/public/images/avatars/cathlene-burrage.jpg";
import damarisKimuraImage from "@/public/images/avatars/damaris-kimura.jpg";
import dianneGuilianelliImage from "@/public/images/avatars/dianne-guilianelli.jpg";
import erhartCockrinImage from "@/public/images/avatars/erhart-cockrin.jpg";
import giordanoSagucioImage from "@/public/images/avatars/giordano-sagucio.jpg";
import gordonSandersonImage from "@/public/images/avatars/gordon-sanderson.jpg";
import heatherTerryImage from "@/public/images/avatars/heather-terry.jpg";
import ibrahimFraschImage from "@/public/images/avatars/ibrahim-frasch.jpg";
import jaquelinIschImage from "@/public/images/avatars/jaquelin-isch.jpg";
import kimberlyParsonsImage from "@/public/images/avatars/kimberly-parsons.jpg";
import parkerJohnsonImage from "@/public/images/avatars/parker-johnson.jpg";
import piersWilkinsImage from "@/public/images/avatars/piers-wilkins.jpg";
import richardAstley from "@/public/images/avatars/richard-astley.jpg";
import rinaldoBeynonImage from "@/public/images/avatars/rinaldo-beynon.jpg";
import ronniCantadoreImage from "@/public/images/avatars/ronni-cantadore.jpg";
import stevenMchailImage from "@/public/images/avatars/steven-mchail.jpg";
import waylonHydenImage from "@/public/images/avatars/waylon-hyden.jpg";
import { useEffect, useId, useState } from "react";

const days = [
  {
    name: "Día de Apertura",
    date: "4 de abril",
    dateTime: "2022-04-04",
    speakers: [
      {
        name: "Steven McHail",
        role: "Diseñador en Globex Corporation",
        image: stevenMchailImage,
      },
      {
        name: "Jaquelin Isch",
        role: "Diseñador UX en InGen",
        image: jaquelinIschImage,
      },
      {
        name: "Dianne Guilianelli",
        role: "Gerente General en Initech",
        image: dianneGuilianelliImage,
      },
      {
        name: "Ronni Cantadore",
        role: "Ingeniero de Diseño en Weyland-Yutani",
        image: ronniCantadoreImage,
      },
      {
        name: "Erhart Cockrin",
        role: "Líder de Producto en Cyberdyne Systems",
        image: erhartCockrinImage,
      },
      {
        name: "Parker Johnson",
        role: "Diseñador UI en MomCorp",
        image: parkerJohnsonImage,
      },
    ],
  },
  {
    name: "Ponentes y Talleres",
    date: "5 de abril",
    dateTime: "2022-04-05",
    speakers: [
      {
        name: "Damaris Kimura",
        role: "Ingeniera Senior en OCP",
        image: damarisKimuraImage,
      },
      {
        name: "Ibrahim Frasch",
        role: "Programador en Umbrella Corp",
        image: ibrahimFraschImage,
      },
      {
        name: "Cathlene Burrage",
        role: "Desarrollador Frontend en Buy n Large",
        image: cathleneBurrageImage,
      },
      {
        name: "Rinaldo Beynon",
        role: "Científico de Datos en Rekall",
        image: rinaldoBeynonImage,
      },
      {
        name: "Waylon Hyden",
        role: "DevOps en RDA Corporation",
        image: waylonHydenImage,
      },
      {
        name: "Giordano Sagucio",
        role: "Desarrollador de Juegos en Soylent Corp",
        image: giordanoSagucioImage,
      },
    ],
  },
  {
    name: "Entrevistas",
    date: "6 de abril",
    dateTime: "2022-04-06",
    speakers: [
      {
        name: "Andrew Greene",
        role: "Desarrollador Frontend en Ultratech",
        image: andrewGreeneImage,
      },
      {
        name: "Heather Terry",
        role: "Desarrollador Backend en Xanatos Enterprises",
        image: heatherTerryImage,
      },
      {
        name: "Piers Wilkins",
        role: "Desarrollador Full Stack en BiffCo",
        image: piersWilkinsImage,
      },
      {
        name: "Gordon Sanderson",
        role: "Desarrollador Mobile en Cobra Industries",
        image: gordonSandersonImage,
      },
      {
        name: "Kimberly Parsons",
        role: "Desarrollador de Juegos en Tyrell Corporation",
        image: kimberlyParsonsImage,
      },
      {
        name: "Richard Astley",
        role: "CEO en Roll Out",
        image: richardAstley,
      },
    ],
  },
];

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<"svg"> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Speakers() {
  let id = useId();
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Ponentes
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Aprende de los expertos en la vanguardia del engaño en las empresas
            más siniestras.
          </p>
        </div>
        <TabGroup
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === "vertical"}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute top-2 bottom-0 left-0.5 hidden w-px bg-slate-200 lg:block" />
            <TabList className="grid auto-cols-auto grid-flow-col justify-start gap-x-4 gap-y-10 px-4 whitespace-nowrap sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <DiamondIcon
                        className={clsx(
                          "absolute top-2.25 left-[-0.5px] hidden h-1.5 w-1.5 overflow-visible lg:block",
                          dayIndex === selectedIndex
                            ? "fill-blue-600 stroke-blue-600"
                            : "fill-transparent stroke-slate-400"
                        )}
                      />
                      <div className="relative">
                        <div
                          className={clsx(
                            "font-mono text-sm",
                            dayIndex === selectedIndex
                              ? "text-blue-600"
                              : "text-slate-500"
                          )}
                        >
                          <Tab className="data-selected:not-data-focus:outline-hidden">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <time
                          datatype={day.dateTime}
                          className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
                        >
                          {day.date}
                        </time>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </TabList>
          </div>
          <TabPanels className="lg:col-span-3">
            {days.map((day) => (
              <TabPanel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 data-selected:not-data-focus:outline-hidden sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <div className="group relative h-70 transform overflow-hidden rounded-4xl">
                      <div
                        className={clsx(
                          "absolute top-0 right-4 bottom-6 left-0 rounded-4xl border transition duration-300 group-hoverscale-95 xl:right-6",
                          [
                            "border-blue-300",
                            "border-indigo-300",
                            "border-sky-300",
                          ][speakerIndex % 3]
                        )}
                      />
                      <div
                        className="absolute inset-0 bg-indigo-50"
                        style={{ clipPath: `url(#${id}-${speakerIndex % 3})` }}
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                          src={speaker.image}
                          alt=""
                          priority
                          sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  );
}
