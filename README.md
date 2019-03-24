# Pyke for API RiotGames
<div align="center">
  <a href="https://npmjs.org/package/pyke" ><img src="https://img.shields.io/badge/Written%20in-Node%20JS-00CED1.svg" alt="NodeJs"</a>
  <a href="https://david-dm.org/systeme-cardinal/node-Pyke"><img src="https://david-dm.org/systeme-cardinal/node-Pyke/status.svg" alt="Dependencies" /></a>
  <a href="https://travis-ci.org/systeme-cardinal/Pyke"><img src="https://travis-ci.org/systeme-cardinal/Pyke.svg?branch=master" alt="Build" /></a>
  <a href="https://ci.appveyor.com/project/systeme-cardinal/pyke/branch/master" rel="nofollow"><img src="https://ci.appveyor.com/api/projects/status/github/systeme-cardinal/pyke?branch=master&svg=true" alt="Build status: Windows" data-canonical-src="https://ci.appveyor.com/api/projects/status/github/systeme-cardinal/pyke?branch=master&svg=true" style="max-width:100%;"></a>
  <a href="https://www.npmjs.com/package/pyke" rel="nofollow"><img src="https://img.shields.io/npm/dt/pyke.svg?maxAge=3600" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/pyke" rel="nofollow"><img src="https://img.shields.io/npm/v/pyke.svg?maxAge=3600" alt="NPM version"></a>
  <a href="https://packagephobia.now.sh/result?p=pyke" rel="nofollow"><img src="https://badgen.now.sh/badge/install%20size/429%20kB/00CED1" alt="packagephobia"></a>
</div>
<div align="center">
  <a href="https://www.npmjs.com/package/pyke" rel="nofollow"><img src="https://nodei.co/npm/pyke.png" alt="NPM Pyke"></a>
</div>

## npm (3.1.0)

```sh
  npm i --save pyke
```

## npm github (beta) (3.1.1)
 
```sh
  npm i --save github:systeme-cardinal/Pyke
```

## Installation and Usage

Pyke minimum required Node.JS version >=8.6 for native asynchrone and dependencies.
You can help me for create a Wiki of Pyke :) 


## Library Used

Pyke used [RIOT API](https://developer.riotgames.com/) and Static Dragon actualy [DDragon](https://ddragon.leagueoflegends.com/tools)

## Version
Version 3.1.1 => Add Typing and add LRU-CACHE for caching RiotGamesAPI<br />
Version 3.1.0 => Update folder name <br />
Version 3.0.0 => Update to V4 of RiotGamesAPI<br />
Version 2.0.0 => Update got and add code <br />
Version 1.1.1 (github) => Add Community Dragon <br />
Version 1.0.9 => Fix error DDragon on my code. <br />
Version 1.0.8 => Replace LolStaticDatav3 by DDragon. <br />
Version 1.0.7 => Add DDragon <br />
Version 1.0.6 => Add JSDOC <br />
Version 1.0.5 => Fix Librairy Riot <br />
Version 1.0.4 => Create reposit Pyke <br />


#### Example
```javascript
const {DDragon, Pyke} = require('pyke');

const pyke = new Pyke(`Here my API KEY`, "10"); // 10 seconds to cache
pyke.summoner.getBySummonerName("DoctaEnkoda", "euw1").then(data => {
  console.log(`Summoner Name is : ${data.name}, and level is : ${data.summonerLevel}`);
}).catch(console.error);
```



