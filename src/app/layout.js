import "./globals.css";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister"; // Import du nouveau composant
import InstallPWA from "./components/InstallPWA";
// import BarNavigation from "./components/BarNavigation";
import { AnimatePresence } from "framer-motion";
import { RideProvider } from "./components/RideContextSave";

export const metadata = {
  title: "Decathlon Walk Up",
  description: "Une application Decathlon dédiée à commencer le sport.",
  manifest: "/manifest.json" // Ajout du lien vers le manifest
};

export const viewport = {
  themeColor: "#0070f3",
};


export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
      <RideProvider>
        <AnimatePresence mode="wait">
          {children}
        </ AnimatePresence>
      </ RideProvider>
      <ServiceWorkerRegister /> {/* Ajout du composant */}
      <InstallPWA />
      {/* <BarNavigation /> */}
      </body>
    </html>
  );
}
