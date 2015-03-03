#Deep Dive into Browser Performance

### Ilia Alshanetsky

- [@iliaa](https://twitter.com/iliaa)
- http://confoo.ca/fr/2015/session/deep-dive-into-browser-performance
- [slides](http://ilia.ws/files/confoo_Deep_Dive_into_Browser_Performance.pdf)


## Why
- Le temps de rendering est de beaucoup supperieur par rapport au backendsrap 20% (

- DNS resolving
-- Use embedded image via data:image
-- Limit image requesrt via use of sprites
-- Defer loading of external resources
-- Avoir multi-domain CDNs (essayer d'utiliser un seul, ex google)
-- Single page app for the win !
- HTTP + SSL Negotiation
- JS processin
- CSS Rendering
- Image «processing
- Dom redering
- Developer tools or equivalent
- Optimiser le temps de load de la page

Profile page loading
- webpagetest.org
- developper.google speed, etc...

## Compression for the win !
- hyml
- js
- css
- image
- font
- other ?

## Cache !
- Set max-age, expires headerrs
- value should be at least 30 days
- Use unique file names a chaque deploiement du code

- Nginx re-write trick
- Cache dasn memcache

JS
- Envoyer que le js qui sera executé
-- require.js
- tricher demandant les fichiers en différé (apres x secondes que la page est demandé)


# JS tips
- Avoid passing objects
- Avoid global variables
- Use closures
- Use iframe ???


# CSS
- minimize
- combine
- compress
- dont't fear style inlined css (module / controller / action)


- cacher les elements avant de jouer avec et les réafficher
- clone une element , jouer avec et le remplacer
- Reference by element id
- be spedific byut avoir child selectors
- avoir @import
- avoid multi-class css rule (.foo.bar.baz)
- pseudo selectors are slow
- avoird browser specific extentions
type=".." vs input[type="..."]  <-- prefer
@see audit onglet







- namespace attribute selecotrs





























