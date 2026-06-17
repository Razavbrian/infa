# Guide de Déploiement - INFA Madagascar (cPanel Tranokala Rose Gold)

Ce guide explique comment déployer le site INFA (Strapi v5 + Next.js 15) sur l'offre Rose Gold de Tranokala.

## Prérequis

- Accès SSH activé sur votre cPanel.
- Nom de domaine (ex: `infa.mg`) et sous-domaine pour l'API (ex: `api.infa.mg`).
- Clé API Resend pour l'envoi d'emails.

---

## 1. Configuration de la Base de Données (PostgreSQL)

1. Dans cPanel, allez dans **Bases de données PostgreSQL**.
2. Créez une base de données nommée `infa_db`.
3. Créez un utilisateur (ex: `infa_user`) avec un mot de passe fort.
4. Ajoutez l'utilisateur à la base de données avec tous les privilèges.

---

## 2. Déploiement du Backend (Strapi)

### Préparation locale
Il est recommandé de builder Strapi localement avant l'envoi si la RAM du serveur est limitée.
```bash
cd backend
npm install
npm run build
```

### Transfert des fichiers
Transférez les dossiers suivants dans le répertoire de votre sous-domaine (ex: `public_html/api` ou un dossier dédié) :
- `dist/`
- `public/`
- `node_modules/`
- `package.json`
- `server.js`
- `ecosystem.config.js`
- `.env` (à créer sur le serveur)

### Configuration `.env` du Backend
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=vos_cles_generees
API_TOKEN_SALT=votre_salt
ADMIN_JWT_SECRET=votre_secret
TRANSFER_TOKEN_SALT=votre_salt
JWT_SECRET=votre_secret

# Base de données PostgreSQL
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=votre_nom_db
DATABASE_USERNAME=votre_user_db
DATABASE_PASSWORD=votre_password_db
DATABASE_SSL=false
```

---

## 3. Déploiement du Frontend (Next.js)

### Préparation locale (Mode Standalone)
```bash
cd frontend
npm install
npm run build
```
Le build générera un dossier `.next/standalone`.

### Transfert des fichiers
Transférez le contenu de `.next/standalone` vers le répertoire racine (ex: `public_html`).
Puis copiez :
- Le dossier `.next/static` dans `public_html/.next/static`
- Le dossier `public` dans `public_html/public`

### Configuration `.env` du Frontend
```env
NEXT_PUBLIC_API_URL=https://api.infa.mg
RESEND_API_KEY=votre_cle_resend
CONTACT_EMAIL=infamadagascar@gmail.com
NEXTAUTH_URL=https://infa.mg
NEXTAUTH_SECRET=votre_secret_nextauth
```

---

## 4. Lancement avec PM2 (via SSH)

Connectez-vous en SSH et lancez les applications :

```bash
# Pour le Backend
cd path/to/backend
pm2 start ecosystem.config.js

# Pour le Frontend
cd path/to/frontend
pm2 start ecosystem.config.js

# Sauvegarder la liste PM2 pour redémarrage automatique
pm2 save
```

---

## 5. Configuration Apache (.htaccess)

Les fichiers `.htaccess` ont été inclus dans `backend/public/` et `frontend/public/`. Assurez-vous qu'ils sont présents à la racine de vos répertoires web respectifs pour rediriger le trafic vers les ports 1337 (backend) et 3000 (frontend).

---

## 6. Support Emails

Utilisez la section **Comptes de messagerie** de cPanel pour créer les adresses professionnelles incluses dans l'offre Rose Gold.
