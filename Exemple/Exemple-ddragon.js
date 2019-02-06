const {DDragon, Pyke} = require('../main');

const data = new DDragon();
const pyke = new Pyke();
pyke.summoner.getBySummonerName("DoctaEnkoda", "euw").then(console.log).catch(console.error);
