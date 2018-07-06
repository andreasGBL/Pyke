# Miss-Fortune for API RiotGames

## npm

```sh
npm i --save github:systeme-cardinal/node-Pyke
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



