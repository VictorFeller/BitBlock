# BitBlock



## Dépendances 

- Bootstrap
- Fontawesome
- Bootswatch



## Problèmes

- Durée pour recevoir la clé API depuis blockchain.com
- Changement de pages



## To-Do

- Récupération de l'adresse
- Implémenter API pour les transactions
- Trier transactions selon amountBNB
- localStorage
- Mise en page



## Ressources

- Boris Fritscher - Professeur HE-Arc
- BscScan Accounts API - https://docs.bscscan.com/api-endpoints/accounts



## Minimal

- Router
  - Home = Liste des transactions suppérieures ou égales à 10 BTC du dernier block
    - Tri récent ou top
    - Lien en cliquant sur le hash de la transaction
  - Transaction
    - Affichage des deux adresses
    - Affichage du montant
    - Lien en cliquant sur les adresses (component)
  - Addresse
    - Affichage balance
    - Toutes ses transactions
      - Boucle
    - Ajout aux favoris
- APIs
  - Latest Block
  - Single Block
- Components
  - Transaction
- localStorage
  - Adresses favorites
- Prototype
- README