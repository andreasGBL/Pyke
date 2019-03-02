declare module 'pyke' {
    export class Pyke {
        constructor(api_key: String, cache: Number);
        public summoner: {
            getBySummonerName(summonerName: String, regionId: regionId): Promise<SummonerInfo>,
            getBySummonerId(summonerId: String, regionId: regionId): Promise<SummonerInfo>
            getByPUUID(puuid: String, regionId: regionId): Promise<SummonerInfo>,
            getByAccountId(accountId: String, regionId: regionId): Promise<SummonerInfo>,
        }
        public masteries :{
            getAllChampionMasteries(summonerId: String, regionId: regionId): Promise<Object>,
            getChampionMastery(summonerId: String, regionId: regionId, championId: Number): Promise<Object>,
            getChampionMasteryScore(summonerId: String, regionId: regionId)
        }
        public champion: {
            getChampions(regionId: regionId, freeToPlay: Boolean): Promise<Object>,
            getChampionsById(regionId: regionId, championId: Number): Promise<Object>,

        }
        public league: {
            getChallengerLeague(regionId: regionId, queue: QUEUE): Promise<Object>,
            getMasterLeague(regionId: regionId, queue: QUEUE): Promise<Object>,
            getLeagueById(regionId: regionId, leagueId: String): Promise<Object>,
            getAllLeaguePositionsForSummoner(summonerId: String, regionId: regionId): Promise<PositionId>
        }
        public match: {
            getMatch(matchId: Number, regionId: regionId): Promise<Object>,
            getMatchlist(accountId: String, regionId: regionId, opts: opts_match): Promise<Object>,
            getMatchlistRecent(accountId: String, regionId: regionId): Promise<Object>,
            getMatchTimeline(regionId: regionId, matchId: String): Promise<Object>,
            getMatchIdsByTournamentCode(regionId: regionId, tournamentCode: String): Promise<Object>,
            getMatchByTournamentCode(regionId: regionId, matchId: Number, tournamentCode: String): Promise<Object>
        }
        public spectator:{
            getCurrentGameInfoBySummoner(summonerId: String, regionId: regionId):Promise<Object>,
            getFeaturedGames(regionId: regionId): Promise<Object>
        }
        public status:{
            getShardData(regionId: regionId): Promise<shardata>
        }
    }


    // all endpoints
    type regionId = "br1" | "eun1" | "euw1" | "jp1" | "kr" | "la1" | "la2" | "na1" | "na" | "oc1" | "tr1" | "ru" | "pbe1";
    type region = "br" | "eune" | "euw" | "jp" | "kr" | "lan" | "las" | "na" | "oce" | "tr" | "ru" | "pbe";

    // Summoner
    type SummonerInfo = {
        id: String,
        accountId: String,
        summonerLevel: Number,
        profileIconId: String,
        profileIconUrl: String,
        name: String,
        puuid: String
    };

    // League
    type QUEUE = "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" | "RANKED_FLEX_TT";
    type PositionId = {
        RANKED_SOLO_5x5: {
            leagueId: Number,
            leagueName: String,
            tier: String,
            queueType: String,
            rank: String,
            playerOrTeamId: String,
            playerOrTeamName: String,
            leaguePoints: Number,
            wins: Number,
            losses: Number,
            veteran: Boolean,
            inactive: Boolean,
            freshBlood: Boolean,
            hotStreak: Boolean
        },
        RANKED_FLEX_SR: {
            leagueId: Number,
            leagueName: String,
            tier: String,
            queueType: String,
            rank: String,
            playerOrTeamId: String,
            playerOrTeamName: String,
            leaguePoints: Number,
            wins: Number,
            losses: Number,
            veteran: Boolean,
            inactive: Boolean,
            freshBlood: Boolean,
            hotStreak: Boolean
        },
        RANKED_FLEX_TT: {
            leagueId: Number,
            leagueName: String,
            tier: String,
            queueType: String,
            rank: String,
            playerOrTeamId: String,
            playerOrTeamName: String,
            leaguePoints: Number,
            wins: Number,
            losses: Number,
            veteran: Boolean,
            inactive: Boolean,
            freshBlood: Boolean,
            hotStreak: Boolean
        },
        all: {
            RANKED_SOLO_5x5: {
                leagueId: Number,
                leagueName: String,
                tier: String,
                queueType: String,
                rank: String,
                playerOrTeamId: String,
                playerOrTeamName: String,
                leaguePoints: Number,
                wins: Number,
                losses: Number,
                veteran: Boolean,
                inactive: Boolean,
                freshBlood: Boolean,
                hotStreak: Boolean
            },
            RANKED_FLEX_SR: {
                leagueId: Number,
                leagueName: String,
                tier: String,
                queueType: String,
                rank: String,
                playerOrTeamId: String,
                playerOrTeamName: String,
                leaguePoints: Number,
                wins: Number,
                losses: Number,
                veteran: Boolean,
                inactive: Boolean,
                freshBlood: Boolean,
                hotStreak: Boolean
            },
            RANKED_FLEX_TT: {
                leagueId: Number,
                leagueName: String,
                tier: String,
                queueType: String,
                rank: String,
                playerOrTeamId: String,
                playerOrTeamName: String,
                leaguePoints: Number,
                wins: Number,
                losses: Number,
                veteran: Boolean,
                inactive: Boolean,
                freshBlood: Boolean,
                hotStreak: Boolean
            }
        }
    }

    // Match 

    type opts_match= {endTime: String, beginIndex: String, beginTime: String, champion: String, endIndex: String, queue: String, season: String};

    // status
    type shardata = {name: String, region_tag: String, hostname: String, services: Array<Object>, slug: String, locales: Array<Object>}
}
