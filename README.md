Cool Kitten - Parrallax Scrolling responsive frame work - 1.0Author: Jalxob
=======
_Release Date: February 2013_.



Install Grunt and Bower
------  



```
sudo npm install -g grunt-cli bower
```

**Bower** will download any dependencies you may need.  
**Grunt** will perform all of our tasks and build steps.


run npm install
------  

```
npm install
```

**npm install** will install all the node_modules you need to run grunt tasks

Grunt Watch task
------  

```
grunt watch
```

**grunt watch** will watch all of your _.html_, _.css_, _.scss_, and _.js_ files while your working and when something is changed and saved it will compile and reload in the browser window automatically.  

Grunt will also compile your _compass_ and _scss_ files for you and concat and minify them!

Grunt build task
------  

```
grunt build
```

- It runs _jshint_ on all your js files, _concats_ them, and then _uglifies_ them  
- Then it compiles all your _.scss_, _compass_, and _.css_ files into one _style.css_, adds all vendor-prefixes and minifies it.  
- Last it creates a _dist_ folder and copies everything over for you, including _html_, _css_, _images_, _js_, and inserts your new _scripts.min.js_ in your _html_


Resources
------ 
- Normalize.css
- jQuery Easing Plugin
- Stellar.js
- Waypoints.js

Questions & Contact
------ 
This is my first framework so if you see any issue please let me know it.

Website: www.jalxob.com/cool-kitten  
Author's website: www.jalxob.com  
Twitter: @Jalxob  


Contributors
------ 
[@james2doyle](https://github.com/james2doyle)  
[@DomenicoColandrea86](https://github.com/DomenicoColandrea86)  

