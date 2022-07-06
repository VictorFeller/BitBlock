# BitBlock

## To-Do

1. localStorage
2. Trier watch list selon balance ou récent
3. Mise en page
4. Description du projet
5. Schéma du projet
6. Documentation

## Problèmes rencontrés

- Durée pour recevoir une clé API depuis le site blockchain.com
  - Les demandes sont examinées dans un délai de 2 à 3 jours ouvrables
  - Nous avons donc dû repenser notre projet durant la journée du mardi 5 juillet et avons perdu du temps très précieux
- Transmission entre deux pages d'une valeur insérée dans une balise HTML input

```javascript
// Solution
<input
      type="string"
      v-model="bscAddress"
      placeholder="Enter a BSC address (0x...)"
      just
      v-on:keypress.enter="openDetailsAddress()"
    />

openDetailsAddress() {
      if (this.canSearch) {
        //Afficher les détails de l'adresse
        //const bscAddress = this.bscAddress;
        //this.$emit("add", bscAddress);
        this.$router.push({
          name: "addressDetails",
          params: { hash: this.bscAddress },
        });
      }
```

- Inexpérience dans Vue.js
  - Le cours n'aurait pas dû être en cours bloc malheureusement, nous aurions mieux appris et retenu  avec des cours tout le long du semestre
- Séparation de méthodes dans un fichier utils.js
  - L'appel de ces différentes méthodes ne retournait rien
  - La solution a été de remettre toutes les méthodes appelant une API dans les différents fichiers .vue

## Ce qui a fonctionné

- Travail d'équipe
- Répartition des tâches
- Utilisation de GitHub en équipe
- Construction de la page avec Bootstrap
- Appel des différents endpoints de l'API
- Mise en place du router et naviguation entre les pages

## Leçons apprises

- Tous les fournisseurs de clés API ne les fournissent pas forcément de manière instantanée
- Nécessité de s'assurer à 100% que le projet est réalisable avant de se lancer dans les croquis et le code
- Le code review régulier entre nous a permis d'optimiser l'application
- Importance de se fier à une documentation officielle et non sur des forums

## Outils utilisés

- Visual Studio Code
- Nouveau Terminal Windows
- PowerShell
- Navigateurs (Brave, Firefox, Safari)
- Bootstrap
  - Collection d'outils pour le design du site web
- Grid system
  - Outils de Bootstrap permettant de rendre le site web full responsive
- Git
  - Logiciel de gestion de versions
- GitHub
  - Service d'hébergement et de versions se basant sur Git
- Node.js
  - Plateforme de développement JavaScript
- Npm
  - Gestionnaire de paquets pour Node.js
- Vue.js
  - Framework pour construire des interfaces utilisateur

## Ressources

- Boris Fritscher - Professeur HE-Arc
- Support de cours 643-1.1 Projet de technologie web - https://cyberlearn.hes-so.ch/
- Ressources Firefox - https://developer.mozilla.org/en-US/
- Bootstrap - https://getbootstrap.com/docs/5.1/
- Grid system Bootstrap - https://getbootstrap.com/docs/4.0/layout/grid/
- BscScan Accounts API - https://docs.bscscan.com/api-endpoints/accounts
- BscScan Stats API - https://docs.bscscan.com/api-endpoints/stats-1