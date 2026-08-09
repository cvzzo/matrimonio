/// <reference types="vite/client" />

// Import di immagini ottimizzate con vite-imagetools (query che termina con format=webp)
declare module "*&format=webp" {
  const src: string;
  export default src;
}
declare module "*?format=webp" {
  const src: string;
  export default src;
}
