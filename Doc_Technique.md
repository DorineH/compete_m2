# **Documentation Technique - Walk-Up**

## **Introduction**

Walk-Up est une application conçue pour encourager la marche et la course à pied en groupe. Inspirée de l'application Karos mais adaptée aux piétons, elle permet aux utilisateurs de partager un itinéraire et d'inviter d'autres membres à les rejoindre.

Ce document décrit en détail l'architecture technique de l'application, les technologies choisies et les raisons de ces choix, en tenant compte des critères de performance, de facilité d'intégration, et d'éco-conception.

---

## **1. Architecture Générale**

L'application Walk-Up repose sur une architecture **serverless**, intégrant Firebase pour la gestion des utilisateurs et des données, ainsi que Mapbox pour l'affichage des cartes.

Elle est développée en **Next.js** pour le frontend, garantissant une **performance optimale** grâce au rendu côté serveur (SSR). L'hébergement est assuré par **Scaleway** ou **Infomaniak**, des solutions respectueuses de l'environnement.

### **Schéma de l'architecture :**

1. **Utilisateur** ➝ Accède à l’application (PWA) via un navigateur.
2. **Next.js (React)** ➝ Interface utilisateur et gestion des vues.
3. **Firebase Authentication** ➝ Gestion des comptes utilisateurs.
4. **Firebase Firestore** ➝ Stockage des trajets et messages du chat.
5. **Mapbox API** ➝ Affichage des cartes et itinéraires.
6. **MeteoStat API** ➝ Intégration des prévisions météorologiques.

---

## **2. Technologies et Justifications**

### **2.1 Développement Frontend**
**Next.js (React)**

- **Performance** : Rendu côté serveur (SSR) et statique (SSG) pour une navigation fluide.
- **Facilité d’intégration** : Compatible avec Firebase et Mapbox.
- **Éco-conception** : Gestion optimisée des ressources et réduction des requêtes inutiles.

### **2.2 Système de Cartographie**
**Geoapify API**

- **Coût avantageux** : Un modèle de tarification plus abordable que Google Maps, tout en offrant un plan gratuit généreux.
- **Performance comparable** : Fournit des services de cartographie et de géocodage performants.
- **Facilité d'intégration** : API bien documentée et compatible avec React et Next.js.
- **Évolutivité** : Une alternative robuste qui s'adapte bien à la croissance du projet.
- **Green IT & Éco-conception** : Infrastructure plus optimisée et respectueuse de l’environnement, contribuant à un projet plus durable.

### **2.3 Authentification et Sécurité**
**Firebase Authentication**

- **Gestion complète des utilisateurs** (email, Google, Facebook...).
- **Règles Firestore pour sécuriser les accès aux données.**
- **Évolutivité** : S’intègre nativement avec Firebase Firestore.


### **Pourquoi passer par un tiers de confiance ?**

L'utilisation d'un **tiers de confiance** comme **Docaposte** est essentielle pour garantir :

1. **Fiabilité des vérifications** : Les documents d'identité sont analysés avec des algorithmes avancés et validés par des experts si nécessaire.
2. **Sécurité des données** : Protection contre la fraude et stockage sécurisé conforme aux normes légales.
3. **Simplicité pour l'utilisateur** : Expérience fluide où les utilisateurs peuvent vérifier leur identité sans friction.
4. **Gagner en crédibilité et en conformité** : Walk-Up devient plus sûr et conforme aux attentes des utilisateurs et des autorités.

**DocaPoste**

- **Facilité d'intégration avec Next.js** : API bien documentée, compatible avec une architecture serverless et facile à intégrer avec Firebase Functions si nécessaire.
- **Conformité aux normes** : Certifié **eIDAS** et **RGPD**, garantissant une validation sécurisée et conforme aux réglementations européennes.
- **Évolutivité et performance** : Service fiable, utilisé par de grandes entreprises pour la gestion d’identité numérique.
- **Green IT** : Infrastructure optimisée et engagements en matière de responsabilité environnementale.
- **Alternative considérée - Onfido** : Bien que performant, Onfido présente des coûts plus variables et un niveau de conformité légèrement inférieur en Europe.



### **2.4 Chat en Temps Réel**
**Firebase Firestore + Firestore Triggers**

- **Synchronisation instantanée** pour le chat entre utilisateurs.
- **WebSockets intégrés** via Firestore Triggers pour des échanges rapides.
- **Moins énergivore** que d’autres solutions WebSockets dédiées.

### **2.5 Base de Données**
**Firebase Firestore (NoSQL)**

- **Évite l'utilisation de plusieurs services** en restant cohérent avec Firebase.
- **Scalabilité automatique sans gestion de serveur.**
- **Optimisé pour les requêtes en temps réel et les notifications.**

### **2.6 Statistiques et Suivi des Données**
**Chart.js / Recharts**

- **Graphiques légers et dynamiques**.
- **Bonne compatibilité avec Next.js.**
- **Impact environnemental réduit comparé à D3.js.**

### **2.7 Intégration de la Météo**
**MeteoStat API**

- **Données météo précises et open-source**.
- **API légère, réduisant la consommation de ressources.**
- **Possibilité de mise en cache via Firebase Functions.**

### **2.8 Hébergement Green**
**Scaleway**

- **Data centers alimentés en énergie renouvelable.**
- **Infrastructure optimisée pour réduire l’empreinte carbone.**
- **Compatibilité avec Firebase Hosting pour servir les fichiers statiques.**

---

## **3. Conclusion**

L’architecture technique de Walk-Up repose sur une stack moderne, performante et respectueuse de l’environnement. L'intégration de Firebase pour la gestion des utilisateurs et des données simplifie le développement et améliore la scalabilité. Mapbox garantit un affichage des trajets fluide et précis, tandis que l’hébergement green (Scaleway ou Infomaniak) assure un impact environnemental réduit.

En choisissant ces technologies, Walk-Up garantit une expérience utilisateur fluide, sécurisée et alignée avec les principes de l’éco-conception. 

---


## **4. Matrices de Décision**

Les choix technologiques ont été validés à l’aide des matrices de décision suivantes :

### **4.1 Framework Frontend**
| Technologie | Coût | Performance | Facilité d'intégration | Évolutivité | Support communautaire | Green IT | Éco-conception |
|------------|------|------------|--------------------|------------|--------------------|---------|--------------|
| Next.js (React) | 3 | 5 | 5 | 5 | 5 | 3 | 4 |
| Vue.js (Nuxt.js) | 4 | 4 | 4 | 4 | 4 | 4 | 4 |
| SvelteKit | 3 | 5 | 3 | 4 | 3 | 5 | 5 |

### **4.2 Système de Cartographie**
| Technologie | Coût | Performance | Facilité d'intégration | Évolutivité | Support communautaire | Green IT | Éco-conception |
|------------|------|------------|--------------------|------------|--------------------|---------|--------------|
| Google Maps API | 2 | 5 | 5 | 5 | 5 | 2 | 2 |
| OpenStreetMap (Leaflet.js) | 5 | 4 | 3 | 3 | 4 | 5 | 5 |
| Mapbox API | 3 | 5 | 4 | 5 | 4 | 4 | 4 |
| Geoapify API | 4 | 5 | 5 | 5 | 4 | 5 | 5 |

---

## **4.3 Matrice de Décision - Tier de Confiance pour la Vérification d'Identité**

| Technologie | Coût | Performance | Facilité d'intégration (Next.js) | Évolutivité | Support communautaire | Conformité (RGPD, eIDAS) | Green IT |
|------------|------|------------|---------------------------------|------------|--------------------|----------------|---------|
| **Docaposte** | 4 | 5 | 5 | 5 | 4 | 5 | 4 |
| **Onfido** | 3 | 5 | 4 | 5 | 4 | 4 | 3 |

## **4.4 Matrice de Décision - Hébergeur Green**

| Hébergeur | Coût | Performance | Facilité d'intégration (Next.js) | Évolutivité | Support communautaire | Green IT | Éco-conception |
|------------|------|------------|---------------------------------|------------|--------------------|---------|--------------|
| **Scaleway** | 4 | 5 | 5 | 5 | 4 | 5 | 5 |
| **Infomaniak** | 4 | 5 | 4 | 5 | 4 | 5 | 5 |
| **Vercel** | 3 | 5 | 5 | 5 | 5 | 3 | 3 |
| **Cloudflare Pages** | 3 | 5 | 5 | 5 | 5 | 3 | 3 |


---

## **4.5 Matrice de Décision - Base de Données**

| Base de Données | Coût | Performance | Facilité d'intégration (Next.js) | Évolutivité | Support communautaire | Green IT | Éco-conception |
|-----------------|------|------------|---------------------------------|------------|--------------------|---------|--------------|
| **Firebase Firestore (NoSQL)** | 4 | 5 | 5 | 5 | 5 | 4 | 4 |
| **PostgreSQL (Google Cloud SQL)** | 3 | 5 | 4 | 5 | 5 | 3 | 3 |
| **MongoDB Atlas** | 3 | 4 | 4 | 5 | 4 | 3 | 3 |
| **Supabase (PostgreSQL)** | 4 | 5 | 5 | 5 | 4 | 4 | 4 |


---

### **Annexe**

## **Sources et Références**

### **Framework Frontend (Next.js)**
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)
- [Why Next.js for Production](https://vercel.com/blog)

### **Système de Cartographie (Geoapify, Mapbox, Google Maps, OpenStreetMap)**
- [Geoapify API](https://www.geoapify.com/)
- [Mapbox API Documentation](https://docs.mapbox.com/)
- [Google Maps API Pricing](https://cloud.google.com/maps-platform/pricing/)
- [OpenStreetMap Documentation](https://wiki.openstreetmap.org/wiki/API)

### **Authentification et Sécurité (Firebase Auth, Docaposte, Onfido)**
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [Docaposte Identity Verification](https://www.docaposte.com)
- [Onfido Identity Verification](https://onfido.com/identity-verification/)

### **Chat en Temps Réel (Firebase Firestore, WebSockets)**
- [Firebase Firestore](https://firebase.google.com/docs/firestore)
- [Firestore Real-time Features](https://firebase.google.com/docs/firestore/query-data/listen)
- [Socket.IO Documentation](https://socket.io/docs/)

### **Base de Données (Firestore, PostgreSQL, MongoDB, Supabase)**
- [Firestore NoSQL Database](https://firebase.google.com/docs/firestore)
- [PostgreSQL Official Site](https://www.postgresql.org/)
- [MongoDB Atlas Documentation](https://www.mongodb.com/atlas/database)
- [Supabase PostgreSQL](https://supabase.com/docs)

### **Intégration des Statistiques et Graphiques (Chart.js, Recharts)**
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [Recharts Documentation](https://recharts.org/en-US/)
- [D3.js Documentation](https://d3js.org/)

### **API Météo (MeteoStat, OpenWeather, WeatherAPI)**
- [MeteoStat API](https://dev.meteostat.net/)
- [OpenWeather API](https://openweathermap.org/api)
- [WeatherAPI Documentation](https://www.weatherapi.com/docs/)

### **Hébergement Green (Scaleway, Infomaniak, Vercel, Cloudflare Pages)**
- [Scaleway Green Hosting](https://www.scaleway.com)
- [Infomaniak Green IT](https://www.infomaniak.com/)
- [Vercel Serverless Hosting](https://vercel.com/docs)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/)

### **Éco-Conception et Green IT**
- [Green IT Best Practices](https://www.greenit.fr/)
- [The Green Web Foundation](https://www.thegreenwebfoundation.org/)

