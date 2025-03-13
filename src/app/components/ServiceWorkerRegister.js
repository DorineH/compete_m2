"use client"; // On force le mode Client Component

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker enregistré avec succès :", registration);
          })
          .catch((error) => {
            console.log("Erreur d'enregistrement du Service Worker :", error);
          });
      });
    }
  }, []);

  return null; // Ce composant ne rend rien à l'écran
}
