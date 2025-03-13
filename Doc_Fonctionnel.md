# **Documentation Fonctionnelle de l’Application Walk-Up**

📅 **Version : 1.0**  
✍ **Rédigé par : Dorine**  
📌 **Destinataires : Chefs de projet, designers UX/UI, et parties prenantes métier**  

---

## **1. Présentation Générale**

### **1.1 Contexte & Objectifs**
Walk-Up est une application mobile visant à encourager la marche en groupe et à proposer une expérience communautaire sécurisée. Elle permet aux utilisateurs de partager un itinéraire de marche et d’inviter d’autres membres à les rejoindre.

### **1.2 Valeur ajoutée**
- Amélioration du bien-être grâce à la marche.
- Création d’une communauté de marcheurs.
- Sécurisation des trajets grâce aux fonctionnalités de discussion et de signalement.
- Suivi statistique des activités pour motiver les utilisateurs.

---

## **2. Acteurs & Rôles**

| **Acteur**              | **Rôles et Permissions** |
|-------------------------|-------------------------|
| **Utilisateur non connecté** | Consulter les trajets publics |
| **Utilisateur connecté** | Créer un trajet, rejoindre un trajet, discuter, voir ses statistiques |
| **Administrateur** | Gérer les signalements et la sécurité des utilisateurs |

---

## **3. Fonctionnalités Détaillées**

### **3.1 Inscription & Authentification**
- **Outils utilisés** : Firebase Authentication  
- **Méthodes d’authentification** : Email/Mot de passe, Google, Facebook.  
- **Vérification d’identité** : Photo + Carte d’identité pour renforcer la sécurité.  

**Cas d’usage :**
1. L’utilisateur accède à l’application et choisit une méthode de connexion.
2. Après l’authentification, il accède à l’interface principale.
3. En cas de première connexion, il doit renseigner ses informations de profil.

---

### **3.2 Création & Partage de Trajets**
- **Outils utilisés** : Mapbox pour la cartographie.
- **Données requises** :
  - Nom du trajet  
  - Point de départ & d’arrivée  
  - Heure de départ  
  - Difficulté (facile, intermédiaire, difficile)  
  - Description libre  
  - Visibilité (public / privé)  

**Cas d’usage :**
1. L’utilisateur ouvre la section “Créer un trajet”.
2. Il sélectionne un itinéraire sur la carte.
3. Il renseigne les détails et valide la création.
4. Le trajet est alors visible selon les paramètres de confidentialité choisis.

---

### **3.3 Rejoindre un Trajet**
- Possibilité de rejoindre un trajet public ou un trajet privé via invitation.
- Un utilisateur peut voir les participants avant de rejoindre.

**Cas d’usage :**
1. L’utilisateur parcourt la liste des trajets disponibles.
2. Il clique sur un trajet et accède aux détails.
3. Il appuie sur “Rejoindre” et intègre le groupe.

---

### **3.4 Système de Discussion**
- **Outils utilisés** : Firebase Firestore pour le chat en temps réel.
- Discussions disponibles uniquement pour les trajets rejoints.
- Notification en cas de nouveau message.

**Cas d’usage :**
1. Un utilisateur rejoint un trajet.
2. Il accède à un salon de discussion dédié.
3. Il peut envoyer des messages en temps réel.

---

### **3.5 Statistiques & Suivi**
- **Données suivies** :
  - Nombre de pas effectués.
  - Kilomètres parcourus.
  - Empreinte carbone évitée.
  - Nombre de trajets réalisés.

**Cas d’usage :**
1. L’utilisateur consulte son tableau de bord.
2. Il visualise ses performances et son historique d’activité.

---

### **3.6 Météo Intégrée**
- **Outil utilisé** : API MeteoStat.
- Affichage des prévisions météo avant le départ d’un trajet.

**Cas d’usage :**
1. Lors de la consultation d’un trajet, l’utilisateur voit les prévisions météo associées.
2. Il peut décider de rejoindre ou non en fonction de la météo prévue.

---

## **4. Expérience Utilisateur (UX)**

### **4.1 Interface & Navigation**
- Application développée avec **Next.js** pour une fluidité optimale.
- **Design minimaliste** avec des icônes claires et une navigation intuitive.
- **Code couleur** pour différencier les niveaux de difficulté des trajets.

---

### **4.2 Notifications & Alertes**
- Notification push pour informer :
  - D’un nouveau trajet créé.
  - D’un message reçu dans un chat.
  - D’un changement d’itinéraire ou d’horaire.

---

### **4.3 Sécurité & Modération**
- Vérification d’identité avec photo et carte d’identité pour éviter les faux profils.
- Système de **signalement** pour lutter contre les comportements inappropriés.
- Modération effectuée par les **administrateurs** avec possibilité de suspension de compte.

---

## **5. Scénarios Utilisateurs**

### **5.1 Scénario 1 : Création d’un trajet**
1. Paul se connecte à Walk-Up avec son compte Google.
2. Il ouvre l’onglet “Créer un trajet”.
3. Il sélectionne un itinéraire sur la carte, renseigne les détails et valide.
4. Son trajet est publié et visible par la communauté.

### **5.2 Scénario 2 : Rejoindre un trajet et discuter**
1. Julie consulte les trajets disponibles et rejoint un groupe.
2. Elle accède au chat du trajet et échange avec les autres participants.
3. Elle reçoit une notification de rappel avant le départ du trajet.

### **5.3 Scénario 3 : Consultation des statistiques**
1. Après plusieurs marches, Pierre ouvre son tableau de bord.
2. Il consulte ses statistiques : nombre de pas, kilomètres parcourus, empreinte carbone évitée.
3. Motivé par ses résultats, il décide de créer un nouveau trajet.

---

## **6. Technologies Utilisées**

| **Technologie**  | **Usage** |
|-----------------|----------|
| **Next.js** | Développement frontend |
| **Firebase Authentication** | Gestion des utilisateurs |
| **Mapbox** | Cartographie et gestion des itinéraires |
| **Firebase Firestore** | Système de chat en temps réel |
| **API MeteoStat** | Affichage de la météo des trajets |

---

## **7. Contraintes et Hypothèses**
- L’application doit être **responsive** pour une utilisation mobile fluide.
- La sécurité des données utilisateurs est **primordiale** (RGPD à respecter).
- Les notifications doivent être **personnalisables** selon les préférences des utilisateurs.

---

## **8. Conclusion**
Cette documentation fonctionnelle définit les **objectifs**, **fonctionnalités**, et **expériences utilisateurs** attendus de l’application Walk-Up. Elle servira de **référence** pour l’équipe projet afin de garantir une **conception alignée aux besoins utilisateurs**.
