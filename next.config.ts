import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    // En export estático no existe el servidor de optimización de imágenes
    // de Next, así que debemos desactivarlo para que sirva las imágenes tal cual
    unoptimized: true,
  },
};

export default nextConfig;
