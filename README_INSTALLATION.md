# 🌸 MAISON AROME - Site E-commerce de Parfums de Luxe

## 📦 Fichiers Inclus

Votre site complet contient **3 fichiers** :

1. **`index.html`** - Structure HTML complète du site
2. **`style.css`** - Tous les styles CSS (1200+ lignes)
3. **`script.js`** - Toutes les fonctionnalités JavaScript (600+ lignes)

---

## 🚀 Installation & Utilisation

### Option 1 : Utilisation Locale Simple

1. **Téléchargez les 3 fichiers** dans un même dossier
2. **Double-cliquez** sur `index.html`
3. Le site s'ouvre dans votre navigateur ! ✨

```
mon-site/
├── index.html
├── style.css
└── script.js
```

### Option 2 : Serveur Local (Recommandé)

Pour un meilleur aperçu, utilisez un serveur local :

**Avec Python :**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Avec PHP :**
```bash
php -S localhost:8000
```

**Avec Node.js (http-server) :**
```bash
npx http-server -p 8000
```

Puis ouvrez : `http://localhost:8000`

### Option 3 : Hébergement en Ligne

#### **Netlify (Gratuit - Recommandé)**
1. Créez un compte sur [netlify.com](https://netlify.com)
2. Glissez-déposez votre dossier sur Netlify
3. Votre site est en ligne en 30 secondes ! 🎉

#### **GitHub Pages (Gratuit)**
1. Créez un repository GitHub
2. Uploadez les 3 fichiers
3. Activez GitHub Pages dans les settings
4. Votre site sera accessible à `https://votre-nom.github.io/repo-name`

#### **Vercel (Gratuit)**
1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez votre projet
3. Déployez en 1 clic

---

## 📋 Fonctionnalités Incluses

### ✅ Fonctionnalités Principales

- ✨ **Design Luxueux** : Palette or champagne (#D4AF37) & blanc
- 🛒 **Panier d'achat fonctionnel** : Ajout/suppression/modification quantité
- 📱 **100% Responsive** : Mobile, tablette, desktop
- 🎨 **Animations fluides** : AOS (Animate On Scroll)
- ⏱️ **Compte à rebours dynamique** : Édition limitée
- 🔍 **Filtres interactifs** : Arômes par catégorie
- 📧 **Formulaire de contact** : Avec validation
- 💾 **Persistance des données** : Le panier se sauvegarde dans localStorage
- 🔔 **Notifications toast** : Confirmations visuelles
- ⌨️ **Accessibilité** : Navigation clavier (ESC pour fermer)

### 📄 Pages & Sections

1. **Hero Section** : Plein écran avec CTA
2. **Édition Limitée** : 2 produits avec compte à rebours
3. **Pourquoi Nous Choisir** : 4 avantages
4. **Collections** : Femme (2 produits) + Homme (2 produits)
5. **Arômes** : 8 essences avec filtres
6. **Création Sur Mesure** : Process + pricing
7. **Témoignages** : 3 avis clients
8. **Contact** : Formulaire + coordonnées
9. **Footer** : Navigation + social

---

## 🎨 Personnalisation

### Modifier les Couleurs

Dans `style.css`, lignes 1-10 :

```css
:root {
    --color-gold: #D4AF37;        /* Or champagne */
    --color-beige: #F8F5EF;       /* Beige clair */
    --color-black: #111111;       /* Noir */
}
```

### Ajouter un Produit

Dans `index.html`, dupliquez une carte produit :

```html
<article class="product-card" data-aos="fade-up">
    <div class="product-image">
        <img src="URL_DE_VOTRE_IMAGE" alt="Nom du Produit">
        <span class="product-badge">NOUVEAU</span> <!-- Optionnel -->
    </div>
    <div class="product-info">
        <h3 class="product-name">Nom du Parfum</h3>
        <p class="product-description">Description du parfum...</p>
        <div class="product-footer">
            <span class="product-price">299 DH</span>
        </div>
        <button class="btn btn-primary btn-block add-to-cart" 
                data-id="nouveau-1" 
                data-name="Nom du Parfum" 
                data-price="299" 
                data-image="URL_IMAGE">
            Ajouter au Panier
        </button>
    </div>
</article>
```

### Modifier les Textes

Tous les textes sont dans `index.html`. Recherchez et remplacez :

- **Logo** : `MAISON AROME` (ligne 31)
- **Adresse** : `123 Avenue Mohammed V` (ligne 1264)
- **Email** : `contact@maison-arome.ma` (ligne 1276)
- **Téléphone** : `+212 5XX-XXXXXX` (ligne 1270)

### Changer les Images

Les images actuelles sont hébergées sur :
- **Unsplash** (images génériques)
- **PostImg** (images produits)

Pour utiliser vos propres images :

1. Placez vos images dans un dossier `images/`
2. Remplacez les URLs :
   ```html
   <!-- Avant -->
   <img src="https://i.postimg.cc/j560xGW9/image.png">
   
   <!-- Après -->
   <img src="images/noor-oud.jpg">
   ```

---

## 🔧 Configuration Avancée

### Google Fonts

Les polices sont chargées depuis Google Fonts (ligne 22 de `index.html`) :

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Animations AOS

La bibliothèque AOS est chargée depuis un CDN (lignes 1334-1342) :

```html
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

Pour personnaliser les animations, modifiez :
```javascript
AOS.init({
    duration: 800,    // Durée de l'animation (ms)
    once: true,       // Animation une seule fois
    offset: 100       // Décalage avant déclenchement (px)
});
```

### SEO

Les balises meta SEO sont déjà incluses (lignes 6-28) :

```html
<meta name="description" content="MAISON AROME - Parfums de luxe...">
<meta name="keywords" content="parfum luxe, parfum français...">
<meta property="og:title" content="MAISON AROME...">
<meta property="og:image" content="URL_DE_VOTRE_IMAGE">
```

**Important** : Remplacez ces valeurs par vos propres données !

---

## 📱 Responsive Design

Le site est optimisé pour :

- 📱 **Mobile** : 320px - 767px
- 📱 **Tablette** : 768px - 1023px
- 💻 **Desktop** : 1024px et plus

### Breakpoints CSS

Dans `style.css` :

```css
/* Mobile */
@media (max-width: 768px) { ... }

/* Petits mobiles */
@media (max-width: 480px) { ... }
```

---

## 🛠️ Fonctionnalités JavaScript

### Panier d'Achat

Le panier utilise **localStorage** pour persister les données :

```javascript
// Ajouter au panier
addToCart(product);

// Mettre à jour quantité
updateQuantity(productId, newQuantity);

// Supprimer du panier
removeFromCart(productId);
```

### Compte à Rebours

Le timer démarre automatiquement :

```javascript
// Configuration initiale
let timeLeft = {
    days: 7,
    hours: 12,
    minutes: 45,
    seconds: 30
};
```

Pour modifier le temps restant, éditez ces valeurs dans `script.js` (ligne 237).

### Filtres d'Arômes

Les filtres fonctionnent avec des attributs `data-category` :

```html
<div class="aroma-card" data-category="floral">
```

Pour ajouter une catégorie, ajoutez un bouton filtre :

```html
<button class="filter-btn" data-filter="nouveau">Nouveau</button>
```

---

## 🎯 Optimisations Incluses

### Performance

- ✅ **Lazy loading** des images
- ✅ **Preload** des images critiques
- ✅ **Debounce** sur le resize
- ✅ **Animations optimisées** (CSS transform)
- ✅ **Fichiers minimaux** (pas de framework lourd)

### SEO

- ✅ Balises meta complètes
- ✅ Open Graph pour réseaux sociaux
- ✅ Attributs `alt` sur toutes les images
- ✅ Structure sémantique HTML5
- ✅ Liens d'ancrage pour navigation

### Accessibilité

- ✅ Navigation au clavier (Tab, ESC)
- ✅ Attributs ARIA
- ✅ Labels sur tous les boutons
- ✅ Contraste des couleurs conforme WCAG
- ✅ Focus visible

---

## 🐛 Dépannage

### Le panier ne se sauvegarde pas

**Solution** : Vérifiez que les cookies/localStorage sont activés dans votre navigateur.

```javascript
// Test dans la console
localStorage.setItem('test', 'ok');
console.log(localStorage.getItem('test')); // Devrait afficher "ok"
```

### Les images ne s'affichent pas

**Solution** : Vérifiez que :
1. Les URLs des images sont correctes
2. Vous avez une connexion Internet (images externes)
3. Les chemins relatifs sont corrects (images locales)

### Le menu mobile ne s'ouvre pas

**Solution** : Vérifiez que `script.js` est bien chargé :

```html
<!-- En bas de index.html -->
<script src="script.js"></script>
```

### Les animations AOS ne fonctionnent pas

**Solution** : Vérifiez que la bibliothèque AOS est chargée :

```html
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

---

## 📊 Statistiques du Code

| Fichier | Lignes | Taille |
|---------|--------|--------|
| index.html | ~1350 | ~75 KB |
| style.css | ~1200 | ~65 KB |
| script.js | ~600 | ~25 KB |
| **TOTAL** | **~3150** | **~165 KB** |

---

## 🌐 Compatibilité Navigateurs

| Navigateur | Version Minimum | Support |
|------------|-----------------|---------|
| Chrome | 90+ | ✅ Complet |
| Firefox | 88+ | ✅ Complet |
| Safari | 14+ | ✅ Complet |
| Edge | 90+ | ✅ Complet |
| Opera | 76+ | ✅ Complet |
| IE11 | ❌ | Non supporté |

---

## 📚 Ressources Utilisées

- **Polices** : [Google Fonts](https://fonts.google.com/)
  - Playfair Display (titres)
  - Montserrat (corps)

- **Animations** : [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)

- **Images** :
  - [Unsplash](https://unsplash.com/) (images génériques)
  - [PostImg](https://postimg.cc/) (images produits)

- **Icônes** : SVG inline (pas de librairie externe)

---

## 💡 Conseils pour le Déploiement

### Avant de Mettre en Ligne

1. ✅ **Testez sur mobile** (Chrome DevTools → Device Toolbar)
2. ✅ **Remplacez les informations de contact**
3. ✅ **Ajoutez votre logo/favicon**
4. ✅ **Optimisez les images** (TinyPNG, ImageOptim)
5. ✅ **Vérifiez tous les liens**
6. ✅ **Testez le formulaire de contact**
7. ✅ **Configurez Google Analytics** (optionnel)

### Performance

Pour améliorer la vitesse :

1. **Compressez les images** (WebP recommandé)
2. **Minifiez CSS/JS** (avec un outil en ligne)
3. **Utilisez un CDN** pour les ressources statiques
4. **Activez la compression GZIP** (sur le serveur)

### Sécurité

Pour un formulaire de contact fonctionnel :

1. **Côté serveur requis** (PHP, Node.js, etc.)
2. **Protection anti-spam** (reCAPTCHA)
3. **Validation des données**
4. **HTTPS activé** (certificat SSL)

Exemple PHP simple :

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    
    mail("contact@maison-arome.ma", "Contact depuis le site", $message);
    echo json_encode(['success' => true]);
}
?>
```

---

## 🚀 Améliorations Futures

Pour aller plus loin :

- 🔐 **Backend** : Ajouter un serveur Node.js/PHP pour les commandes
- 💳 **Paiement** : Intégrer Stripe/PayPal
- 📧 **Email** : Automatiser les confirmations de commande
- 🔍 **Recherche** : Ajouter une barre de recherche de produits
- 🌍 **Multi-langue** : FR/AR/EN
- 📊 **Analytics** : Google Analytics/Hotjar
- 🤖 **Chatbot** : Support client en ligne
- ⭐ **Avis produits** : Système de notation

---

## 📞 Support

Pour toute question :

- 📧 Email : support@maison-arome.ma
- 📱 WhatsApp : +212 6XX-XXXXXX
- 🌐 Site : https://maison-arome.ma

---

## 📝 Licence

© 2026 MAISON AROME. Tous droits réservés.

Ce code est fourni à titre d'exemple. Vous êtes libre de l'utiliser et le modifier pour votre projet.

---

## ✨ Crédits

Développé avec ❤️ pour MAISON AROME

**Technologies utilisées** :
- HTML5
- CSS3 (Variables CSS, Grid, Flexbox)
- JavaScript ES6+
- AOS Library

---

**Bonne chance avec votre boutique en ligne ! 🌸✨**

---

*Dernière mise à jour : 17 février 2026*
