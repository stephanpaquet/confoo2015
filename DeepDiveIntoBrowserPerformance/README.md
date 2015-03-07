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

[voir aussi](baseImage.html)

---

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
- JS processing
- CSS Rendering
- Image processing
- Dom redering
- Developer tools or equivalent
- Optimiser le temps de load de la page

## Compression des éléments suivant
- HTML
- JS
- CSS
- image
- font

## Cache !
- Set max-age, expires headers
    - value should be at least 30 days
    - Use unique file names a chaque deploiement du code
    - (voir pourquoi ce fichier n'est pas mergé avec les autres
    /bower_components/chosen-1.2.0/chosen.min.css?1415976170
    - Nginx re-write trick
- Cache dans memcache



## JS tips
- Combiner et minifier !
- N'envoyer que le js qui sera executé
    - require.js
    - Autre AMD
        - Charge du data pour rien
        - Décompression Overhead
        - Extra JS Compilation
- **tricher**: en demandant les fichiers en différé

```javascript
$(document).ready(function () {
    setTimeout(function () {
    $.get(
            "your--file.js"
        );
    }, 2000);
};

```
- Rérérencer ou chercher par ID
- Loader que le contenue affichable (grid, tabs, ...)
    - Utiliser le leazy loading
- Avoid passing objects
- namespace attribute selecteurs
- Évitez les variables globales
- [Use closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

# CSS
- minimiser
- combiner
- compresser
- Ne pas avoir peur d'insérer du CSS inline !
    - pourrais être bon pour du CSS (module / controller / action)
    
---
#### Peekaboo Trick
cacher les elements avant de jouer avec et les réafficher
```javascript
var me = $("#el");
me.hide();	

// make various changes to DOM/Content

me.show();
```

---

#### Dolly Trick
cloner l'élément, jouer avec ... et le remplacer
```javascript
var $dolly = el.clone();	
  
// make changes to the copy

el.replaceWith($dolly);

```

### Ne pas abuser du recalcul du style
```javascript
//  nein, nein, nein!!!!
for (var  i = 0; i < 100; i++) { 
    el[i].style.left = el.offsetLeft + "10px"; 
    el[i].style.top = el.offsetTop + "10px";
}
// Wunderbar
for (var left = el.offsetLeft, top = el.offsetTop, i = 0; i < 100; i++, top += 10, left += 10) { 
    el[i].style.cssText  += "; left: " + left + "px; top: " + top +"px;"; 
}
```
## Quelques références
- [http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/](http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/)
- [http://www-archive.mozilla.org/newlayout/doc/reflow.html](http://www-archive.mozilla.org/newlayout/doc/reflow.html)
- [https://developers.google.com/speed/articles/reflow](https://developers.google.com/speed/articles/reflow)

- [Minimizing browser reflow](https://developers.google.com/speed/articles/reflow)

- référencer par ID
- être précis, éviter les child selectors
- éviter les @import()
- éviter les sélecteur multi class (.foo.bar.baz)
- Les Pseudo class sont lentes
- Namespacer les sélecteurs par attributs
    - Utiliser input[type="..."] au lieu de type="..." vs
- éliminer les règles non utilisées
• Avoid browser specific extensions
(-webkit, -opera, -moz, etc...)


## l'onglet Audit dans chrome avec DuProprio.com

![onglet Audit dans chrome avec DuProprio.com](auditTabDP.png)


### CSS Tools
- [https://github.com/Cerdic/CSSTidy](https://github.com/Cerdic/CSSTidy) - PHP
- [http://devilo.us](http://devilo.us) - Web-based

## @voir 
- 
http://modernweb.com/2013/12/23/45-useful-javascript-tips-tricks-and-best-practices/

