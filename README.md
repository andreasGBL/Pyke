# Pyke for API RiotGames
<div align="center">
  <a href="https://david-dm.org/systeme-cardinal/node-Pyke"><img src="https://david-dm.org/systeme-cardinal/node-Pyke/status.svg" alt="Dependencies" /></a>
  <a href="https://discord.gg/Fzj4bG6"><img src="https://discordapp.com/api/guilds/457552462874804225/embed.png" alt="Discord server" /></a>
  <a href="https://travis-ci.org/systeme-cardinal/Pyke"><img src="https://travis-ci.org/systeme-cardinal/Pyke.svg?branch=master" alt="Build" /></a>
  <a href="https://ci.appveyor.com/project/systeme-cardinal/pyke/branch/master" rel="nofollow"><img src="https://ci.appveyor.com/api/projects/status/github/systeme-cardinal/pyke?branch=master&svg=true" alt="Build status: Windows" data-canonical-src="https://ci.appveyor.com/api/projects/status/github/systeme-cardinal/pyke?branch=master&svg=true" style="max-width:100%;"></a>
  <a href="https://www.npmjs.com/package/pyke" rel="nofollow"><img src="https://img.shields.io/npm/dt/pyke.svg?maxAge=3600" alt="NPM downloads"></a>
  <a href="https://www.npmjs.com/package/pyke" rel="nofollow"><img src="https://img.shields.io/npm/v/pyke.svg?maxAge=3600" alt="NPM version"></a>

</div>

## npm

```sh
npm i --save pyke
```

## Installation and Usage

Pyke minimum required Node.JS version 7.6 for native asynchrone.

## Library Used

Pyke used [RIOT API](https://developer.riotgames.com/) and Static Dragon actualy [DDragon](https://ddragon.leagueoflegends.com/tools)

## Version

Version 1.0.9 (latest) => Fix error DDragon on my code. <br />
Version 1.0.8 => Replace LolStaticDatav3 by DDragon. <br />
Version 1.0.7 => Add DDragon <br />
Version 1.0.6 => Add JSDOC <br />
Version 1.0.5 => Fix Librairie Riot <br />
Version 1.0.4 => Create reposit Pyke <br />

## Endpoints

### RiotLib
**CHAMPION-MASTERY-V3** <br />
  ``getAllChampionMasteries()`` => Get all champion mastery entries sorted by number of champion points descending. <br />
  ``getChampionMastery()`` => Get a champion mastery by player ID and champion ID. <br />
  ``getChampionMasteryScore()`` => Get a player's total champion mastery score, which is the sum of individual champion mastery levels.
#### Example
```javascript
const {Pyke, Regions} = require('pyke'); // Call Lib
const riotAPidev = new Pyke('here your api key on https://developer.riotgames.com/'); // Call RIOT

riotAPidev.masteries.getAllChampionMasteries('79858287', Regions['euw']).then(data =>{
  console.log(data);
  /* data => [
    {
        "championLevel": 7,
        "chestGranted": true,
        "championPoints": 436910,
        "championPointsSinceLastLevel": 415310,
        "playerId": 79858287,
        "championPointsUntilNextLevel": 0,
        "tokensEarned": 0,
        "championId": 53,
        "lastPlayTime": 1531071031000
    },
    {
        "championLevel": 7,
        "chestGranted": true,
        "championPoints": 168033,
        "championPointsSinceLastLevel": 146433,
        "playerId": 79858287,
        "championPointsUntilNextLevel": 0,
        "tokensEarned": 0,
        "championId": 75,
        "lastPlayTime": 1531763227000
    }
    ...]
    */
}).catch(console.error);
```



