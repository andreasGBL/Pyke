const got = require('got');

const endpoints = {
  url: "https://www.masterypoints.com/api/v1.1",
  static: {
    getServerList: "/static/servers",
    getChampionList: "/static/champions"
  },
  Highscores: {
    highscoresChampion: "/highscores/champion",
    highscoresTotal: "/highscores/total/"
  },
  Summoner: {
    summonerProfile: "/summoner/",
    summonerProfileId: "/summoner_id/"
  },
  Stats: {
    statsChampionTotals: "/stats/champion_totals",
    statsLevelAmounts: "/stats/mastery_level_amounts",
    statsRankedTiers: "/stats/ranked_tiers",
    statsServerComparison: "/stats/server_comparison"
  }
}
// This Api is not of RiotGames API


module.exports = class masterypoints {
  constructor() {
    this.endpoints = endpoints;
    this.url = endpoints.url;

  }

  /**
   * 
   * @param {String} summoner Summoner name
   * @param {String} region He dont used regionId !!
   * 
   */
  summonerProfile(summonerName, region) {
    return new Promise((resolve, reject) => {
      got.get(`${endpoints.url + endpoints.Summoner.summonerProfile + summonerName + "/" + region}`, {
        json: true
      }).then(resp => {
        var body = resp.body;
        resolve(body)
      }).catch(err=>{
        reject(err)
      })
    })
  }

  summonerID(summonerID, region) {
    return new Promise((resolve, reject) => {
      got.get(`${endpoints.url + endpoints.Summoner.summonerProfileId + summonerID + "/" + region}`, {
        json: true
      }).then(resp => {
        var body = resp.body;
        resolve(body)
      }).catch(err=>{
        reject(err)
      })
    })
  }


}