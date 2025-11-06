import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import clsx from "clsx";
import "@/styles/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s - DeceptiConf",
    default:
      "DeceptiConf - Una conferencia sobre diseño impulsada por la comunidad",
  },
  description:
    "En DeceptiConf aprenderás cuáles son los últimos patrones oscuros que se están desarrollando para engañar incluso a los visitantes más inteligentes, y aprenderás cómo implementarlos sin que te detecten.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={clsx(
        "h-full bg-white antialiased",
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  );
}
