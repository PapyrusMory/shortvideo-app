# shortvideo-app

Creation du frontend
`npm create vite@latest client -- --template react-ts`

Accéder au dossier Client et Installer les dépendances
`cd client && npm install @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material @mui/material axios react-ticker`
`npm install --save-dev @types/node`

Lancer le projet côté frontend
`npm run dev`

Création du backend
`mkdir server && npm init -y`

Accéder au dossier Server et Installer les dépendances
`cd server && npm install cors dotenv express express-async-handler mongoose`
`npm install --save-dev @typegoose/typegoose @types/cors @types/express @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint ts-node-dev typescript`

Ajouter cela au fichier package.json

```
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only --files src/index.ts",
    "build": "tsc",
    "start": "node build/src/index.js",
  }
```

Lancer le projet côté backend
`npm run dev`
