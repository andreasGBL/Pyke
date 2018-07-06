# Pyke for API RiotGames
<div align="center">
  <a href="https://david-dm.org/systeme-cardinal/node-Pyke"><img src="https://img.shields.io/david/systeme-cardinal/node-Pyke.svg" alt="Dependencies" /></a>
</div>
## npm

```sh
npm i --save pyke
```

## Example

```javascript
const {Pyke, Regions} = require('pyke');
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



