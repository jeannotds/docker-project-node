# 1. Image de base (Node.js)
FROM node:18-alpine

# 2. Dossier de travail
WORKDIR /app

# 3. copier les packes.json et package-lock.json
COPY package*.json ./

# 4. installation des dépendances
RUN npm install

# 5. Copier les fichiers de l'application
COPY . .

# 6. Exposer le port de l'application depuis le fichier .env
EXPOSE 4000

# 7. Commande pour démarrer l'application
CMD ["node", "server.js"]


