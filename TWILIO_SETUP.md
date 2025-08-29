# Configuration Twilio WhatsApp - CONFIDENTIEL

⚠️ **IMPORTANT** : Ce fichier contient des informations sensibles.
NE JAMAIS commiter les vraies valeurs dans le repository.

Voir la documentation Netlify pour la configuration des variables d'environnement.

## Variables requises

- `TWILIO_ACCOUNT_SID` - Obtenu depuis console.twilio.com
- `TWILIO_AUTH_TOKEN` - Obtenu depuis console.twilio.com  
- `TWILIO_FROM_NUMBER` - Numéro WhatsApp Twilio (sandbox: whatsapp:+14155238886)
- `TWILIO_TO_NUMBER` - Numéro WhatsApp du vendeur (format: whatsapp:+212XXXXXXXXX)

## Configuration Netlify

Variables à configurer dans **Site settings > Environment variables** :
- Toutes les variables TWILIO_*
- NODE_ENV=production
- NODE_VERSION=20

## Sécurité

1. ❌ NE JAMAIS exposer les credentials dans le code
2. ✅ Utiliser uniquement les variables d'environnement Netlify
3. 🔄 Régénérer les tokens si compromis
4. 🔒 Repo privé obligatoire
