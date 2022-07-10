# 1 -  SolutionDevise
Programme permettant la conversion de devise.
Il s'agit d'un test technique permettant d'évaluer les connaissances en Backend


## Lancement

Pour lancer il suffit d'exécuter lancer la commande `dotnet run <pathtofile>`. En l'absence de paramètre `<pathtofile>` le fichier `Devise.txt` (inclus) sera lu automatiquement. Vous avez la possibilité de renseigner en argument un autre nom de fichier, veillez bien à ce que le format soit respecté :

FROM;AMOUNT;TARGET  
NbConversion  
FROM;TO;RATE

### exemple :
EUR;550;JPY  
6  
AUD;CHF;0.9661
JPY;KRW;13.1151  
EUR;CHF;1.2053  
AUD;JPY;86.0305  
EUR;USD;1.2989  
JPY;INR;0.6571

![Capture](https://user-images.githubusercontent.com/25097226/178153116-185c341d-a0b6-437f-bc1b-769147e5bd5f.PNG)

## Rendu

Le programme parcours le fichier texte, il prend la devise d'origine, le montant souhaité, et la devise de destination, puis effectue une recherche du chemin le plus court et renvoie dans la console le détail du chemin emprunté, et le résultat final, arrondi au supérieur.



# 2 - LuccaChat
Web app de simulation de chat. Il n'y a pas de code serveur, ce programme est orienté Frontend.
Réalisé en Angular13, il s'agit d'un test technique permettant d'explorer les fonctionnalités d'un site web dynamique à page unique.
Utilisation la librairie LuccaFont :

- [Lucca Front](https://prisme.lucca.io/94310e217/p/68bde1-prisme-le-design-faon-lucca)
- [Lucca Github](https://github.com/LuccaSA)

Pour lancer le site : il faut exécuter successivement les commandes `npm install`, puis `npm start`.
	


##  Les fonctionnalités
Le chat se présente sous la forme d'une page contenant un bouton pour connecter un premier utilisateur.
Cela ouvre une modale permettant de renseigner le nom et le prénom.
   - il est impossible de valider si les deux champs ne sont pas renseignés. 
- Une première section s'ouvre contenant :
  - Le nom de l'utilisateur pour cette section
  - Un bouton en haut à droite pour se déconnecter
  - Une zone centrale dans laquelle les messages apparaitront
  - En bas, une zone permettant de saisir le texte des messages, et un bouton pour envoyer le message
(appuyer sur "enter" permet également d'envoyer le message)

- Au survol d'un message dont l'utilisateur est l'auteur, une corbeille apparait sur le message, indiquant qu'il est possible de supprimer ce message.
- Il y a un maximum de 4 utilisateurs qui peuvent se connecter.
- Par défaut chaque utilisateur est dans un salon commun (Main Room).
- Chaque nouvel utilisateur qui se connecte créer également une section à son nom  sous forme d'onglet, qui permet à deux utilisateur de s'envoyer des messages privés. 

![image](https://user-images.githubusercontent.com/25097226/178153181-42b22f3d-100f-469e-8384-d20965b9ba83.png)

![image](https://user-images.githubusercontent.com/25097226/178153213-11933ad2-9bfa-4e5c-98c9-cf374869b457.png)

![image](https://user-images.githubusercontent.com/25097226/178153343-a7da35cc-95ff-4b91-9218-5b295d7eec96.png)


## Le fonctionnement

l'application se base sur les `events emitter` pour gérer la communication entre les éléments. Par exemple on émet les messages depuis le composant enfant `user` vers le composant parent `home` afin de redistribuer les messages du salon commun à tout les utilisateurs présents.

## Les prochaines étapes
évolutions possibles :
- Utiliser la librairie `component store` afin de déplacer les traitements dans un store. Cela rendrait également les tests front plus simple à écrire. 
- Mettre en place la lecture / écriture dans des services séparés, appelés par les stores
- ...

