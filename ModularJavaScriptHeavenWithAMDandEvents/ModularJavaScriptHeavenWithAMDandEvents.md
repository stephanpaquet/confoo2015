
# Modular JavaScript Heaven with AMD and Events

### Eduardo Shiota Yasuda
- @shiota - https://twitter.com/shiota

- http://confoo.ca/fr/2015/session/modular-javascript-heaven-with-amd-and-events
- [Slides](http://www.slideshare.net/eshiota/javascript-modular-e-eventdriven)


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

## AMD (Asynchronous module definition)
- Fournis une API pour la définition des modules
- Manipuler les dépendances
- Injecter les dépendances dans les modules
- Peut être implémenter pour les Design Pattern ou Constroctor (prototype)
- Ce qui est retourné par le Callback Function va ềtre injecté lorsque le module va être nescessaire
    - aussi par un Objet
- Les modules peuvent être définit par
    - leur path
    - ou par leur identifier (namespace)
    
## Deux implémentation de AMD

### [Require JS](http://requirejs.org)

- RequireJS is a JavaScript file and module loader
- Permet de load de module en asynchome
- Permet de loader des modules dynamiquement

### [Almond](https://github.com/jrburke/almond) 

- A minimal AMD API implementation for use after optimized builds
- 1kb
- Obligue que les modules soient déjà loadé
- Est plus facile à intégrer avec un codebase existant

## Events

- @see les observer pattern
- Comme par example
    - Server - informer tout les clients si un nouvel épisode (torrent) est disponible
    - Client - Des que le serveur informe qu'un épisode est disponible il le download


```
- torrentServer.on('a-specific-event', function (name) {});
- this.trigger('a-specific-event', 'The name of the episode')
```

## Mediator
- http://www.dofactory.com/javascript/mediator-design-pattern
- https://carldanley.com/js-mediator-pattern/
- https://github.com/Wolfy87/EventEmitter

- Simplifie la communication entre deux modules
- Les modules ne communique pas directement entre les autres modules, il passent par le Mediator
- Tout le monde ne connaisse que le Mediator





