# 🏺 Belkhadir Poterie - Site E-commerce Artisanal Marocain

Site web professionnel pour la poterie artisanale marocaine avec système de commandes en ligne et notifications WhatsApp vendeur.

## ✨ Fonctionnalités

- **🛒 E-commerce complet** : Catalogue produits, panier, commandes avec variantes
- **📱 Notifications WhatsApp** : Notifications automatiques au vendeur via Twilio
- **🎨 Personnalisation** : Système de variants (tailles, motifs, couleurs)
- **📧 Contact direct** : Intégration WhatsApp et email
- **📱 Responsive** : Design adaptatif mobile-first
- **⚡ Performance** : React 18 + Vite + TypeScript

## 🚀 Déploiement Netlify

### Prérequis
- Compte Netlify
- Compte Twilio (pour WhatsApp)
- Repository GitHub connecté

### Variables d'environnement Netlify
```bash
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_FROM_NUMBER=whatsapp:+14155238886
TWILIO_TO_NUMBER=whatsapp:+212XXXXXXXXX
NODE_ENV=production
NODE_VERSION=20
```

⚠️ **IMPORTANT** : NE JAMAIS commiter ces valeurs dans le code !

### Configuration Netlify
1. **Build Command** : `npm --prefix client ci && npm --prefix client run build`
2. **Publish Directory** : `client/dist`
3. **Functions Directory** : `netlify/functions`

## 🛠️ Stack Technique

- **Frontend** : React 18, TypeScript, TailwindCSS 3, Framer Motion
- **Backend** : Fonctions Netlify serverless
- **Notifications** : Twilio WhatsApp API
- **Build** : Vite 6, SWC
- **UI** : Radix UI, Lucide Icons
- **Déploiement** : Netlify

## 📂 Structure

```
client/                 # Frontend React
├── pages/             # Pages (routing)
├── components/        # Composants UI
├── contexts/          # State management
└── data/             # Données produits

netlify/              # Déploiement
├── functions/        # Fonctions serverless
└── netlify.toml      # Configuration
```

## 🎯 Fonctionnalités Business

### Pour les Clients
- Catalogue produits avec variants personnalisés
- Panier avec calcul automatique
- Formulaire de commande sécurisé
- Confirmation immédiate

### Pour le Vendeur
- Notifications WhatsApp automatiques à chaque commande
- Détails complets client + produits
- Gestion des variants (tailles, motifs, couleurs)
- Suivi des commandes

## 📱 WhatsApp Integration

- **Service** : Twilio WhatsApp Business API
- **Format** : Messages structurés avec infos complètes
- **Destinataire** : Vendeur (numéro configuré via variables d'environnement)
- **Contenu** : Client, produits, variants, total, instructions

## 🚦 Status

- ✅ **Frontend** : Interface complète et responsive
- ✅ **Backend** : Fonctions serverless opérationnelles
- ✅ **WhatsApp** : Notifications via Twilio
- ✅ **Netlify** : Configuration prête
- ✅ **Production** : Déployable immédiatement

## 📞 Contact

- **Téléphone** : +212 661 724 956
- **Email** : belkadi626@gmail.com
- **Email** : pt.belkhadir.safi@gmail.com
---

**🏺 Belkhadir Poterie** - Artisanat marocain authentique depuis des générations
