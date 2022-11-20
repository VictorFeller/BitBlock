# BitBlock

https://victorfeller.github.io/BitBlock/

## Context

During my second year of Bachelor in Business Information Technology, I had a two-week course on web services. During the second week, I learned JavaScript and Vue. After receiving theoretical elements about these 2 topics, my schoolmate and I had to code an application as the second project of the course. We have been evaluated on release 2.0 and it had to be done during the second week, in a short time frame.

## Use cases

The theme of the application was free. Passionate about blockchain technology and the concept of Web3, we wanted to create an application to search for addresses based on the Binance Smart Chain (BSC) and obtain various information about them :

- BNB balance
- Dollar value relative to the BNB balance and actual BNB price
- (*Under development*) All transactions made through this address

It is also possible to add the address to a watch list in order to analyze information about it later. The watch list page offers the following use cases :

- Display all addresses that have been previously stored in localStorage
- Display the BNB balance of the addresses at the time of addition to the watch list
- Display the current BNB balance of the addresses and changes the text color according to the gain or loss of BNB
- Sort addresses by order of addition to the watch list (oldest to newest) or by BNB held (largest balance to smallest)

## Instructions for the project

- Website must be responsive thanks to Bootstrap (we did the maximum we can, the deadline was to short)
- Application must use multiple components
- Application must use router thanks to an index.js file
- Application must use localStorage
- Project must include a README file describing problems and lessons
- Application could use axios to get external data

## French bellow

Passionnés de la technologie blockchain et du concept de Web3, nous avons souhaité créer une application permettant de réaliser des recherches d'adresses basées sur la Binance Smart Chain (BSC) afin d'obtenir diverses informations sur ces dernières.

Dès lors qu'une recherche d'adresse BSC est effectuée, une nouvelle page s'ouvre afin d'afficher les informations suivantes grâce aux appels d'API :

- Balance en BNB du portefeuille
- Valeur en dollars du portefeuille, par rapport au nombre de BNB détenus
- (*En développement*) Toutes les transactions effectuées par cette adresse

Il est également possible d'ajouter l'adresse dans une watch list afin de pouvoir réanalyser ces informations plus tard. Lorsque le bouton "⭐️" est actionné, le hash de l'adresse ainsi que sa balance à l'instant T seront sauvegardés dans le localStorage.

La page watch list propose les possibilités suivantes :

- Affiche toutes les adresses qui ont été enregistrées au préalable
- Pour chaque adresse, affiche la balance de l'adresse au moment de l'ajout dans la watch list
- Pour chaque adresse, affiche la balance actuelle et change de couleur en fonction du gain ou de la perte de BNB
- Trier les adresses par ordre d'ajout (du plus récent au plus ancien) dans le watch list ou en fonction du nombre de BNB détenus (de la plus grande balance à la plus petite)

## Architecture

- App.vue
  - Page de base qui est instanciée par le main.js lorsqu'on arrive sur l'application
  - Cette page gère également les boutons de navigation du site web
  - Le contenu de App.vue se retrouve également sur les autres pages
  - Appel d'une API permettant d'afficher le prix du BNB sur toutes les pages
- HomeView.vue
  - Page d'accueil de notre site web
  - Permet de rediriger grâce à une méthode vers une page donnant les détails sur une adresse que l'on recherche
  - L'adresse est passée en paramètre lors de la redirection vers AddressDetails.vue via un router
- AddressDetails.vue
  - Page offrant quelques détails pour une adresse BSC
    - Balance BNB grâce à un appel d'API
    - Valeur en dollars du portefeuille, par rapport au nombre de BNB détenus grâce à une méthode  multipliant le balance au prix actuel du BNB obtenu par un appel d'une API
  - L'appel vers cette page se réalise depuis la page d'accueil (méthode openDetailsAddress()) ou bien depuis le component AppAddress (router-link)
  - Cette page permet également le stockage en localStorage (id, value) de l'adresse et de sa balance BNB à l'instant où le bouton est actionné grâce à la méthode addToWatchList()
    - Balance et valeur sont stockés dans un tableau, lui même contenu dans la value du localStorage
  - À l'avenir, toutes les transactions de l'adresse BSC demandée seront affichées grâce à l'appel d'une API payante
- WatchList.vue et component AppAddress.vue
  - Affichage de toutes les adresses et de leur balance respective, ayant été stockées dans le localStorage
  - Le component AppAddress.vue est appelé depuis WatchList.vue grâce à un v-for parcourant toutes les adresses ayant été enregistrées
  - Affichage de la balance actuelle grâce à l'appel d'une API et changement de couleur en fonction du gain ou perte de BNB par rapport à la valeur stockée
  - Dans le component AppAddress, il est également possible de supprimer toute adresse enregistrée dans le localStorage grâce à un bouton appelant une méthode au niveau parent -> this.$emit("remove");

## Problèmes rencontrés

- Durée pour recevoir une clé API depuis le site blockchain.com
  - Les demandes sont examinées dans un délai de 2 à 3 jours ouvrables
  - Nous avons donc dû repenser notre projet et avons perdu du temps très précieux
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
  - Le cours n'aurait pas dû être en cours bloc, nous aurions mieux appris et retenu  avec des cours répartis tout le long du semestre
- Séparation de méthodes dans un fichier utils.js
  - L'appel de ces différentes méthodes ne retournait rien
  - La solution a été de remettre toutes les méthodes appelant une API dans les différents fichiers .vue
- Problème pour refresh la nouvelle balance dans la watchlist
  - Essayer des choses au pif et waaattttt ça marche


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

## Améliorations à réaliser

- Gestion de l'unicité des adresses au sein de la page watch list
- Création d'un pattern lié au format des adresses BSC pour la méthode canSearch() de la page d'accueil
- Mise en place du plugin firebase
- Changer le comportement du bouton "Refresh" et la méthode refreshPage() dans la page watch list
  - Ne pas reload la page mais plutôt le content
- Current balance s'affichant parfois vide (à voir avec l'API?)
- Ajout d'un bouton "Remplacer" afin de remplacer les anciennes balances par les nouvelles
- Sauvegarder les anciennes balances dans un nouveau tableau dans le localStorage quand elles sont remplacées par de nouvelles
- Afficher toutes les transactions d'une adresse lors qu'on est sur la page AddressDetails.vue

## Outils utilisés

- Visual Studio Code
- Nouveau Terminal Windows
- PowerShell
- Navigateurs (Chrome, Firefox)
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
- Support de cours 643-1.1 Projet de technologie web - https://cyberlearn.hes-so.ch/course/view.php?id=6912
- Ressources Firefox - https://developer.mozilla.org/en-US/
- Moteur de recherche - https://www.google.ch/
- Bootstrap - https://getbootstrap.com/docs/5.1/
- Grid system Bootstrap - https://getbootstrap.com/docs/4.0/layout/grid/
- BscScan Accounts API - https://docs.bscscan.com/api-endpoints/accounts
- BscScan Stats API - https://docs.bscscan.com/api-endpoints/stats-1

