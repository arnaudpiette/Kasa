# Kasa

Refonte front-end du site Kasa réalisée avec React dans le cadre du parcours
**Développeur Web d’OpenClassrooms**.

Kasa est une plateforme de location de logements entre particuliers. Le projet
consiste à remplacer l’ancien front-end développé en ASP.NET par une
application React moderne, responsive et organisée autour de composants
réutilisables.

## Objectifs du projet

- Initialiser l’application avec Vite.
- Développer l’interface avec React et JSX.
- Créer des composants modulaires et réutilisables.
- Mettre en place la navigation avec React Router.
- Respecter les maquettes Figma sur ordinateur et mobile.
- Utiliser Sass pour organiser les styles.
- Afficher les 20 logements fournis dans un fichier JSON local.
- Gérer les URL inconnues et les identifiants de logements invalides.

Le back-end n’étant pas encore disponible, les données sont chargées depuis
`src/data/logements.json`.

## Technologies utilisées

- React 18
- React DOM
- React Router DOM
- Vite
- Sass / SCSS
- JavaScript
- JSX
- HTML5
- CSS3

## Prérequis

Avant de lancer le projet, il faut disposer de :

- Node.js ;
- npm ;
- Git pour cloner le dépôt.

Il est possible de vérifier leur installation avec :

```bash
node --version
npm --version
git --version
```

## Installation

Cloner le dépôt :

```bash
git clone https://github.com/arnaudpiette/Kasa.git
```

Accéder au dossier du projet :

```bash
cd Kasa
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm start
```

L’application est ensuite accessible à l’adresse indiquée par Vite dans le
terminal, généralement :

```text
http://localhost:5173
```

## Scripts disponibles

```bash
npm start
```

Lance l’application en mode développement.

```bash
npm run dev
```

Lance également le serveur de développement Vite.

```bash
npm run build
```

Compile et optimise l’application pour la production dans le dossier `dist`.

```bash
npm run preview
```

Lance localement la version de production générée.

## Fonctionnalités

### Page d’accueil

- Affichage de la bannière Kasa.
- Génération des 20 cartes de logements avec `map`.
- Navigation vers la fiche correspondant à l’identifiant du logement.

### Page logement

- Récupération de l’identifiant dans l’URL avec `useParams`.
- Recherche du logement correspondant dans le fichier JSON.
- Affichage du titre, de la localisation, des tags et de l’hôte.
- Affichage de la note sur cinq étoiles.
- Affichage de la description et des équipements.

### Galerie d’images

- Navigation cyclique entre les photos.
- Depuis la dernière photo, la flèche suivante affiche la première.
- Depuis la première photo, la flèche précédente affiche la dernière.
- Masquage des flèches et du compteur lorsqu’il n’existe qu’une seule photo.
- Hauteur constante et recadrage des images avec `object-fit: cover`.

### Composant Collapse

- Panneaux fermés par défaut.
- Ouverture et fermeture au clic.
- Animation du contenu et rotation de la flèche.
- Réutilisation sur la page À propos et les fiches logements.

### Navigation et erreurs

- Navigation interne sans rechargement complet.
- Mise en évidence du lien actif avec `NavLink`.
- Route dynamique `/logement/:id`.
- Page d’erreur 404 pour les URL inconnues.
- Redirection vers la page 404 lorsqu’un logement n’existe pas.

### Responsive design

- Grille de trois colonnes sur ordinateur.
- Grille intermédiaire de deux colonnes.
- Affichage sur une colonne sur mobile.
- Adaptation de la navigation, des bannières, des fiches logements, de la
  galerie et des menus déroulants.

## Routes de l’application

| Route | Page | Description |
| --- | --- | --- |
| `/` | Accueil | Affiche la liste des logements |
| `/a-propos` | À propos | Affiche les valeurs de Kasa |
| `/logement/:id` | Fiche logement | Affiche le logement correspondant à l’identifiant |
| `/404` | Erreur 404 | Indique que la page demandée n’existe pas |
| `*` | Erreur 404 | Intercepte les URL inconnues |

## Architecture du projet

```text
Kasa/
├── src/
│   ├── assets/
│   │   ├── Icons/
│   │   └── Images/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Card.jsx
│   │   ├── Collapse.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── Rating.jsx
│   │   └── Slideshow.jsx
│   ├── data/
│   │   └── logements.json
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Accommodation.jsx
│   │   ├── ErrorPage.jsx
│   │   └── Home.jsx
│   ├── router/
│   │   └── AppRouter.jsx
│   ├── styles/
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── main.scss
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Principaux composants

| Composant | Rôle |
| --- | --- |
| `Banner` | Affiche une bannière personnalisable |
| `Card` | Affiche la vignette et le titre d’un logement |
| `Collapse` | Affiche un contenu déroulant |
| `Slideshow` | Gère la galerie cyclique d’un logement |
| `Rating` | Affiche la note sur cinq étoiles |
| `Header` | Affiche le logo et la navigation principale |
| `Footer` | Affiche le pied de page |
| `Layout` | Partage le Header et le Footer entre les pages |

## Concepts React mis en œuvre

- Composants fonctionnels.
- Props entre composants parents et enfants.
- Prop spéciale `children`.
- État local avec `useState`.
- Identifiants accessibles avec `useId`.
- Paramètres d’URL avec `useParams`.
- Événements `onClick`.
- Rendu conditionnel.
- Listes générées avec `map`.
- Clés React avec `key`.
- Recherche de données avec `find`.
- Composition des pages avec `Outlet`.

## Organisation des styles

Les styles sont écrits en SCSS et chargés depuis `src/styles/main.scss`.

Ils sont répartis en plusieurs catégories :

- `abstracts` : variables Sass ;
- `base` : règles générales et reset ;
- `components` : styles propres aux composants ;
- `layouts` : structure générale, Header et Footer ;
- `pages` : styles spécifiques aux pages.

Le projet utilise une convention de nommage inspirée de BEM :

```text
slideshow__arrow
slideshow__arrow--next
collapse__content
collapse--open
```

## Accessibilité

Plusieurs éléments d’accessibilité ont été intégrés :

- balises HTML sémantiques ;
- textes alternatifs et libellés accessibles ;
- `aria-expanded`, `aria-controls` et `aria-hidden` sur les Collapses ;
- `aria-live` sur le compteur de la galerie ;
- styles `focus-visible` pour la navigation au clavier ;
- titre visuellement masqué sur la page À propos ;
- prise en compte de `prefers-reduced-motion`.

## Données

Les annonces sont actuellement importées depuis :

```text
src/data/logements.json
```

Lorsque le back-end sera disponible, cette source locale pourra être remplacée
par des appels vers une API.

## Auteur

**Arnaud Piette**

Projet réalisé dans le cadre de la formation Développeur Web OpenClassrooms.
