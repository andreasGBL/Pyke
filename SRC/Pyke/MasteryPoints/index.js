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