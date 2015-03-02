
# Modular JavaScript Heaven with AMD and Events

### Eduardo Shiota Yasuda
- http://confoo.ca/fr/2015/session/modular-javascript-heaven-with-amd-and-events
- http://www.slideshare.net/eshiota/javascript-modular-e-eventdriven

- Bon tour d'horizon avec le livre "The good part"
### Le problème avec JS

- c'est peux vitre devenir bordelique
- facile de tomber dans le piège d'avoir de multiples callback function
## Solutions

- AMD ([Asynchronous module definition](http://en.wikipedia.org/wiki/Asynchronous_module_definition))
- Events 
    - Rendre notre code modulaire par l'utilisation de Modules
    - Controller le flow
    - Communiquer au travers d'événements

## Module
- Une seule responsabilité qui fait partis d'un système complexe
- Isoler le comportement des connaissances ?
- Testable
- Extensible
- Facilement modifiable
- Remplacable
- Réutilisable
- Namespace
    - Aide a organiser le code en bloques séparés
    - Permet de fournir une structure de code mieux structurer
    - Évite de polurer le scope global (window)
## Module pattern
- Fournir un scope et permet d'avoir des variables et méthode publique et privées (@todo trouver un exemple)
    - ce qui est retournée par le module est la partie publique du module
- C'est un genre singleton

## Constructors et Prototypes
- @todo trouver un example similaire au slide 51-52

## AMD
- Injecter les dépendances au module
- Fournis une set de fonction (API) réutilisable




