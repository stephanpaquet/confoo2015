#Deep Dive into Browser Performance

### Ilia Alshanetsky

- [@iliaa](https://twitter.com/iliaa)
- http://confoo.ca/fr/2015/session/deep-dive-into-browser-performance
- [slides](http://ilia.ws/files/confoo_Deep_Dive_into_Browser_Performance.pdf)


## Why
- Le temps de rendering est de beaucoup supérieur par rapport au backend
- Il est donc très important d'optimiser le front end

## Qu'est-ce qui prend tout ce temps d'attente ?

### DNS
- Le temps de sésolution d'un domain peux prendre jusqu'a 20% pour le premier page load

**comment optimiser?**

#### 1) Utiliser les data:image
- Embed images dans la page en utilisant le Use embedded image via [data:image](http://en.wikipedia.org/wiki/Data_URI_scheme)
- Convertisseur des images utilisé dans le CSS en data uri
[grunt-data-uri](https://www.npmjs.com/package/grunt-data-uri)

```html
<!-- example -->
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA
AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
```

#### 2) Limiter le nombre de requête au serveur en utilisant les sprites

#### 3) Retarde le chargement des ressources externes

- Placer le JS juste avant la fermeture du tag body
- Utiliser une ADM [Asynchronous module definition] (http://en.wikipedia.org/wiki/Asynchronous_module_definition)

#### 4) Si possible, évitez d'utiliser des CDN dans plusieurs domaines

#### 5) Utiliser si possible des Single page application

## Outils pour valider la performance
- Use Your Browser
    - Developer Tools or Equivalent
- Do Remote Tests
    - [www.webpagetest.org](http://www.webpagetest.org/)
    - [developers.google.com/speed/pagespeed](https://developers.google.com/speed/pagespeed/)
    - [www.modern.ie/en-us](https://www.modern.ie/en-us)
- Actual User Profiling
    - http://www.lognormal.com/boomerang/doc/
    - Use Web-Timing API directly

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

## Compression des éléments suivant
- HTML
- JS
- CSS
- image
- font

## Cache !
- Set max-age, expires headerrs
- value should be at least 30 days
- Use unique file names a chaque deploiement du code

- Nginx re-write trick
- Cache dasn memcache

JS
- Envoyer que le js qui sera executé
    - require.js
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





























