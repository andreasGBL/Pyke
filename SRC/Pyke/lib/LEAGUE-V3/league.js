const endpoints = require('../../endpoint');
const got = require('got');
var api_url = ".api.riotgames.com";

module.exports = class League{
    constructor(api_key) {
        this.api_key = api_key;
    }

    /**
     * 
     * @param {String} regionId Region
     * @param {String} queue RANKED_SOLO_5x5 / RANKED_FLEX_SR / RANKED_FLEX_TT
     */

    async getChallengerLeague (regionId, queue){
        return new Promise (async (resolve, reject) =>{
            await got.get(`https://${regionId + api_url + endpoints.league.challengerleagues + queue + '?api_key=' + this.api_key}`, {
                json: true
            })
            .then(data =>{
                resolve(data.body);
            })
            .catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    }
    /**
     * 
     * @param {String} regionId Region
     * @param {String} leagueId 
     */
    async getLeagueById (regionId, leagueId){
        return new Promise(async (resolve, reject) =>{
            await got.get(`https://${regionId + api_url + endpoints.league.leagues + leagueId + '?api_key=' + this.api_key}`, {
                json: true
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    }

    /**
     * 
     * @param {String} regionId Region
     * @param {String} queue RANKED_SOLO_5x5 / RANKED_FLEX_SR / RANKED_FLEX_TT
     */
    async getMasterLeague (regionId, queue) {
        return new Promise (async (resolve, reject) =>{
            await got.get(`https://${regionId + api_url + endpoints.league.masterleagues + queue + '?api_key=' + this.api_key}`, {
                json: true
            })
            .then(data =>{
                resolve(data.body);
            })
            .catch(error => {
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    }

    /**
     * 
     * @param {String} summonerId Id du summoner
     * @param {String} regionId Region
     * @returns {Promise<{all: JSON, RANKED_SOLO_5x5: JSON, RANKED_FLEX_SR: JSON, RANKED_FLEX_TT: JSON}>}
     */
    async getAllLeaguePositionsForSummoner(summonerId, regionId) {
        return new Promise(async (resolve, reject) => {
            await got.get(`https://${regionId + api_url + endpoints.league.bysummonerId + summonerId + '?api_key=' + this.api_key}`, {
                json: true
            }).then(data => {
                var body = data.body;
                var RANKED_SOLO_5x5;
                var RANKED_FLEX_SR;
                var RANKED_FLEX_TT;
                
                RANKED_SOLO_5x5 = {
                    leagueId: '',
                    leagueName: '',
                    tier: 'Unranked',
                    queueType: 'RANKED_SOLO_5x5',
                    rank: '',
                    playerOrTeamId: summonerId,
                    playerOrTeamName: '',
                    leaguePoints: '',
                    wins: '',
                    losses: '',
                    veteran: true,
                    inactive: false,
                    freshBlood: false,
                    hotStreak: false
                };
                RANKED_FLEX_SR = {
                    leagueId: '',
                    leagueName: '',
                    tier: 'Unranked',
                    queueType: 'RANKED_FLEX_SR',
                    rank: '',
                    playerOrTeamId: summonerId,
                    playerOrTeamName: '',
                    leaguePoints: '',
                    wins: '',
                    losses: '',
                    veteran: true,
                    inactive: false,
                    freshBlood: false,
                    hotStreak: false
                };
                RANKED_FLEX_TT = {
                    leagueId: '',
                    leagueName: '',
                    tier: 'Unranked',
                    queueType: 'RANKED_FLEX_TT',
                    rank: '',
                    playerOrTeamId: summonerId,
                    playerOrTeamName: '',
                    leaguePoints: '',
                    wins: '',
                    losses: '',
                    veteran: true,
                    inactive: false,
                    freshBlood: false,
                    hotStreak: false
                };
                
                for (var i = 0; i <= (body.length - 1); i++) {
                    switch (body[i].queueType) {
                        case 'RANKED_SOLO_5x5':
                            RANKED_SOLO_5x5 = body[i];
                            break;
                        case 'RANKED_FLEX_SR':
                            RANKED_FLEX_SR = body[i]
                            break;
                        case 'RANKED_FLEX_TT':
                            RANKED_FLEX_TT = body[i]
                            break;
                        default:
                            RANKED_FLEX_TT;
                            RANKED_FLEX_SR;
                            RANKED_SOLO_5x5;
                    }
                }
                resolve({
                    all: {
                        RANKED_SOLO_5x5: RANKED_SOLO_5x5,
                        RANKED_FLEX_SR: RANKED_FLEX_SR,
                        RANKED_FLEX_TT: RANKED_FLEX_TT
                    },
                    RANKED_SOLO_5x5: RANKED_SOLO_5x5,
                    RANKED_FLEX_SR: RANKED_FLEX_SR,
                    RANKED_FLEX_TT: RANKED_FLEX_TT
                });
            }).catch(error => {
                console.log(error)
                reject({
                    statuscode: error.statusCode,
                    message: error.statusMessage
                });
            })
        })
    }
}
