# 🚀 Guide de Déploiement Netlify - Belkhadir Poterie

## 🔒 **Étape 0 — Hygiène & Sécurité (OBLIGATOIRE)**

⚠️ **AVANT TOUT DÉPLOIEMENT** :

1. **Repo privé** : Rendre le repository GitHub privé
2. **Secrets supprimés** : Vérifier qu'aucun credential n'est dans le code
3. **Régénérer Twilio** : 
   - Nouveau `TWILIO_AUTH_TOKEN` 
   - Si possible, rotation `ACCOUNT_SID`
   - Les valeurs précédentes ont été exposées !

## 📁 **Structure Projet Prête**

```
belkhadir-poterie/
├── netlify.toml ✅
├── netlify/functions/submit-order.js ✅
├── client/ (code React)
├── dist/spa/ (build output)
└── package.json ✅
```

## 🔧 **Variables d'environnement Netlify**

**Site settings > Environment variables** - Configurer exactement :

```bash
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_FROM_NUMBER=whatsapp:+14155238886
TWILIO_TO_NUMBER=whatsapp:+212661724956
NODE_ENV=production
NODE_VERSION=20
```

⚠️ **IMPORTANT** : 
- Ne **jamais** commiter ces valeurs
- Sandbox WhatsApp : seules les lignes autorisées recevront le message
- Pour la prod : numéro vérifié + templates approuvés requis

## 🏗️ **Configuration Build Netlify**

**Automatique via netlify.toml** :
- **Build command** : `npm ci && npm run build`
- **Publish directory** : `dist/spa`  
- **Functions directory** : `netlify/functions`

## 🚀 **Étapes de Déploiement**

### 1. **Lancer le site depuis Git**
- Netlify → Add new site → Import from Git
- Choisir le repo GitHub

### 2. **Build Settings** (si netlify.toml ne fonctionne pas)
- Build command : `npm ci && npm run build`
- Publish directory : `dist/spa`
- Functions directory : `netlify/functions`

### 3. **Variables d'environnement**
- Site settings > Environment variables
- Ajouter toutes les variables TWILIO_* + NODE_*

### 4. **Déploiement & Logs**
- Launch Deploy
- Ouvrir Deploy logs → vérifier :
  - ✅ Installation npm
  - ✅ Build Vite réussi  
  - ✅ Functions activées

## 🧪 **Tests de Vérification**

### Test 1 : Page principale
```bash
GET https://votre-site.netlify.app/
# Doit servir index.html
```

### Test 2 : Fonction WhatsApp
```bash
POST https://votre-site.netlify.app/.netlify/functions/submit-order

# Body JSON :
{
  "customer": { "name": "Test", "phone": "+212XXXXXXXXX" },
  "items": [{ "qty": 1, "name": "Pot test", "variant": "Rouge" }],
  "total": "50 MAD"
}

# Réponse attendue : 200 + { "ok": true }
```

### Test 3 : SPA Navigation
- Navigation vers /creations, /cart, etc.
- Aucun 404 (grâce au redirect 200)

### Test 4 : WhatsApp réel
- Commande de test depuis l'interface
- Vérifier réception WhatsApp
- Contrôler Twilio Message Logs

## 🌐 **Domaine (Optionnel)**

- **Gratuit** : `*.netlify.app` 
- **Personnalisé** : Domaines → ajouter domaine → DNS → HTTPS auto

## ✅ **Checklist Final**

- [ ] Repository privé
- [ ] Secrets supprimés du code
- [ ] Credentials Twilio régénérés
- [ ] Variables d'environnement configurées  
- [ ] Build réussi
- [ ] Functions opérationnelles
- [ ] Tests WhatsApp OK
- [ ] Navigation SPA sans 404

---

**🔐 Sécurité** : Désactiver immédiatement toute clé de test exposée et re-déployer.
