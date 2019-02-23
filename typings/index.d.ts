declare module 'pyke' {
    export class Pyke {
        constructor(api_key: String);
        public summoner : {
            getBySummonerName(summonerName: String, regionId: regionId): Promise<SummonerInfo>,  
            getBySummonerId(summonerId: String, regionId: regionId): Promise<SummonerInfo>
            getByPUUID(puuid: String, regionId: regionId): Promise<SummonerInfo>,
            getByAccountId(accountId: String, regionId: regionId): Promise<SummonerInfo>,
        }
        public league: {
            getChallengerLeague(regionId: regionId, queue: QUEUE): Promise<>,
            getMasterLeague(regionId: regionId, queue: QUEUE): Promise<>,
            getLeagueById(regionId: regionId, leagueId: String): Promise<>,
            getAllLeaguePositionsForSummoner(summonerId: String, regionId: regionId): Promise<PositionId>
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

}
