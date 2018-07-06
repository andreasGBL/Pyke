module.exports = {

    champion_mastery:{
        masteryById: '/lol/champion-mastery/v3/champion-masteries/by-summoner/',
        masteryByIdByChampionId: '/by-champion/',
        scoreById: '/lol/champion-mastery/v3/scores/by-summoner/'
    },
    //Champion
    champion: {
        championList: '/lol/platform/v3/champions',
        championById: '/lol/platform/v3/champions/'
    },
    // Summoner api v3
    summoner: {
        summonerName: '/lol/summoner/v3/summoners/by-name/',
        summonerId: '/lol/summoner/v3/summoners/',
        accountId: '/lol/summoner/v3/summoners/by-account/'
    },
    //League V3
    league: {
        bysummonerId: '/lol/league/v3/positions/by-summoner/',
        masterleagues: '/lol/league/v3/masterleagues/by-queue/',
        leagues: '/lol/league/v3/leagues/',
        challengerleagues: '/lol/league/v3/challengerleagues/by-queue/'
    },
    //LOL-STATUS-V3
    status: {
        shard_data: '/lol/status/v3/shard-data'
    },
    //MATCH-V3
    match: {
        matches: "/lol/match/v3/matches/",
        matchlists: "/lol/match/v3/matchlists/by-account/",
        timelines: '/lol/match/v3/timelines/by-match/',
        tournament: '/lol/match/v3/matches/by-tournament-code/',
        matchid_tournament: '/lol/match/v3/matches/'
    },
    //SPECTATOR-V3
    spectator: {
        activegames: '/lol/spectator/v3/active-games/by-summoner/',
        feactured: '/lol/spectator/v3/featured-games'
    }
}