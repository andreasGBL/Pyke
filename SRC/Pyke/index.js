const championmasteriesv3 = require('./lib/CHAMPION-MASTERY-V3/Champion');
const championv3 = require('./lib/CHAMPION-V3/champion');
const summonerv3 = require('./lib/SUMMONER-V3/Summoner');
const leaguev3 = require('./lib/LEAGUE-V3/league');
const matchv3 = require('./lib/MATCH-V3/match');
const spectatorv3 = require('./lib/SPECTATOR-V3/spectator');

const lib_ddragon = require('./lib_ddragon/lol-static-data');
//Riot API
class Pyke {
    constructor(api_key) {
        this.api_key = api_key; // Your API_KEY https://developer.riotgames.com/
        this.summoner = new summonerv3(this.api_key); // Summoner V3
        this.masteries = new championmasteriesv3(this.api_key); // Masteries v3
        this.champion = new championv3(this.api_key); // champion
        this.league = new leaguev3(this.api_key); // League
        this.match = new matchv3(this.api_key); // Match
        this.spectator = new spectatorv3(this.api_key); // Ingame      
        this.lol_static_data = console.log('The lol-static-data-v3 API is now deprecated and will be removed on Monday, August 27th, 2018. Please use Data Dragon as a replacement.')
    }; 
}

//DDragon tools
class DDragon{
    constructor(version){
        this.version = version;
        this.DDragon = new lib_ddragon();
        
    }
}

//CommunityDragon
class CommunityDragon {
    constructor() {
        this.discord = `https://discord.gg/C8xd8ag`;
        this.cdn = new (require('./CommunityDragon/index'))();
        this.link = `https://communitydragon.org/`;
    }
}

// Exportation
module.exports = {
    Pyke: Pyke,
    DDragon: DDragon,
    Regions: require('./regions.js'),
    statusCode: require('./statusCode.js'),
    game_constants: require('./GAMECONSTANTS.js'),
    CommunityDragon: CommunityDragon
}
