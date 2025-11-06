"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { BackgroundImage } from "./BackgroundImage";
import { Container } from "./Container";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Day {
  date: React.ReactNode;
  dateTime: string;
  summary: string;
  timeSlots: Array<{
    name: string;
    description: string | null;
    start: string;
    end: string;
  }>;
}

const schedule: Array<Day> = [
  {
    date: "4 de abril",
    dateTime: "2022-04-04",
    summary:
      "El primer día de la conferencia está enfocado en los patrones oscuros para el comercio electrónico.",
    timeSlots: [
      {
        name: "Steven McHail",
        description: "Pagos que no son tan únicos",
        start: "9:00AM",
        end: "10:00AM",
      },
      {
        name: "Jaquelin Isch",
        description: "La letra pequeña",
        start: "10:00AM",
        end: "11:00AM",
      },
      {
        name: "Dianne Guilianelli",
        description: "Blackmail post-compra",
        start: "11:00AM",
        end: "12:00PM",
      },
      {
        name: "Almuerzo",
        description: null,
        start: "12:00PM",
        end: "1:00PM",
      },
      {
        name: "Ronni Cantadore",
        description: "Compra o muere",
        start: "1:00PM",
        end: "2:00PM",
      },
      {
        name: "Erhart Cockrin",
        description: "Cancelación en persona",
        start: "2:00PM",
        end: "3:00PM",
      },
      {
        name: "Parker Johnson",
        description: "El truco de pago/cancelación",
        start: "3:00PM",
        end: "4:00PM",
      },
    ],
  },
  {
    date: "5 de abril",
    dateTime: "2022-04-05",
    summary:
      "Luego pasamos el día hablando sobre cómo engañar a las personas con tecnología.",
    timeSlots: [
      {
        name: "Damaris Kimura",
        description: "El lector de tarjetas invisible",
        start: "9:00AM",
        end: "10:00AM",
      },
      {
        name: "Ibrahim Frasch",
        description: "Robando huellas digitales",
        start: "10:00AM",
        end: "11:00AM",
      },
      {
        name: "Cathlene Burrage",
        description: "Máquinas de votación",
        start: "11:00AM",
        end: "12:00PM",
      },
      {
        name: "Almuerzo",
        description: null,
        start: "12:00PM",
        end: "1:00PM",
      },
      {
        name: "Rinaldo Beynon",
        description: "Blackhat SEO que funciona",
        start: "1:00PM",
        end: "2:00PM",
      },
      {
        name: "Waylon Hyden",
        description: "Convirtiendo tu audiencia en una botnet",
        start: "2:00PM",
        end: "3:00PM",
      },
      {
        name: "Giordano Sagucio",
        description: "Phishing volador",
        start: "3:00PM",
        end: "4:00PM",
      },
    ],
  },
  {
    date: "6 de abril",
    dateTime: "2022-04-06",
    summary:
      "Cerramos el evento viendo nuevas técnicas que todavía están en desarrollo.",
    timeSlots: [
      {
        name: "Andrew Greene",
        description: "Patrones oscuros de Neuralink",
        start: "9:00AM",
        end: "10:00AM",
      },
      {
        name: "Heather Terry",
        description: "DALL-E para pasaportes",
        start: "10:00AM",
        end: "11:00AM",
      },
      {
        name: "Piers Wilkins",
        description: "Cracking de contraseñas cuánticas",
        start: "11:00AM",
        end: "12:00PM",
      },
      {
        name: "Almuerzo",
        description: null,
        start: "12:00PM",
        end: "1:00PM",
      },
      {
        name: "Gordon Sanderson",
        description: "SkyNet está llegando",
        start: "1:00PM",
        end: "2:00PM",
      },
      {
        name: "Kimberly Parsons",
        description: "Patrones oscuros para el metaverso",
        start: "2:00PM",
        end: "3:00PM",
      },
      {
        name: "Richard Astley",
        description: "Conociendo el juego y jugándolo",
        start: "3:00PM",
        end: "4:00PM",
      },
    ],
  },
];

function DaySummary({ day }: { day: Day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  );
}

function TimeSlots({ day, className }: { day: Day; className?: string }) {
  return (
    <ol
      className={clsx(
        className,
        "space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur-sm"
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} habla sobre ${timeSlot.description} a las ${timeSlot.start} - ${timeSlot.end} PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{" "}
            -{" "}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{" "}
            PST
          </p>
        </li>
      ))}
    </ol>
  );
}

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState("horizontal");

  useEffect(() => {
    let smMediaQuery = window.matchMedia("(min-width: 640px)");

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }

    onMediaQueryChange(smMediaQuery);
    smMediaQuery.addEventListener("change", onMediaQueryChange);

    return () => {
      smMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []);

  return (
    <TabGroup
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === "vertical"}
    >
      <TabList className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pr-8 sm:pb-0 sm:pl-0">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  "relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0",
                  dayIndex !== selectedIndex && "opacity-70"
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="data-selected:not-data-focus:outline-hidden">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </TabList>
      <TabPanels>
        {schedule.map((day) => (
          <TabPanel
            key={day.dateTime}
            className="data-selected:not-data-focus:outline-hidden"
          >
            <TimeSlots day={day} />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  );
}

export function Schedule() {
  return (
    <section
      id="schedule"
      aria-label="Programa de la conferencia"
      className="py-20 sm:py-32"
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Nuestro programa de tres días está lleno de genios brillantes,
            creativos y malvados.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Las peores personas de nuestra industria dando las mejores charlas
            que hayas visto. Nada será grabado y cada asistente debe firmar un
            acuerdo de confidencialidad (NDA) para ver las charlas.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-top-40 -bottom-32" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  );
}
