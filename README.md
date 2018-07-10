# Pyke for API RiotGames
<div align="center">
  <a href="https://david-dm.org/systeme-cardinal/node-Pyke"><img src="https://img.shields.io/david/systeme-cardinal/node-Pyke.svg" alt="Dependencies" /></a>
  <a href="https://discord.gg/Fzj4bG6"><img src="https://discordapp.com/api/guilds/457552462874804225/embed.png" alt="Discord server" /></a>
  <a href="https://travis-ci.org/systeme-cardinal/Pyke"><img src="https://travis-ci.org/systeme-cardinal/Pyke.svg?branch=master" alt="Build" /></a>

</div>

## npm

```sh
npm i --save pyke
```

## Example

```javascript
const {Pyke, Regions, DDragon} = require('pyke');
const api = new Pyke('Your api Key');

var region = "euw";
var regionsId = Regions[region]; // => euw1

api.summoner.getBySummonerName("SP Jason", regionsId)
  .then(data =>{
    return console.log(data);
  })
  .catch(error =>{
    return console.error(error)
  });
```



