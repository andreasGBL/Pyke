const endpoints = require('../../endpoint');
const got = require('got');
var api_url = ".api.riotgames.com";
/*
    Coverage 100%
 */
module.exports = class Champion {
    constructor(api_key, LRU) {
        this.api_key = api_key;
        this.LRU = LRU;
    }
    /**
     * 
     * @param {String} summonerId Id de l'invocateur
     * @param {String} regionId Region
     * 
     */

    async getAllChampionMasteries(summonerId, regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.champion_mastery.masteryById + summonerId}?api_key=${this.api_key}`, { 
                json: true,
                cache: this.LRU
            })
                .then(data => {
                    let result = data.body;
                    if(this.withHeaderInformation)
                        result.responseHeaders = data.headers;
                    resolve(result);
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
     * @param {String} summonerId Id de l'invocateur
     * @param {String} regionId Region
     * @param {String} championId Champion ID
     * @returns {Promise<{championLevel: string, chestGranted: boolean, championPoints: String, championPointsSinceLastLevel: String, playerId: String, championPointsUntilNextLevel: String, tokensEarned: String, championId: String, lastPlayTime: String}>}
     */
    async getChampionMastery(summonerId, regionId, championId) {
        return new Promise(async (resolve, reject) => {
            if (!championId) reject({
                statuscode: "403",
                message: "Forbidden"
            });
            got.get(`https://${regionId + api_url + endpoints.champion_mastery.masteryById + summonerId + endpoints.champion_mastery.masteryByIdByChampionId + championId +  '?api_key=' + this.api_key}`, { json: true, cache: this.LRU })
                .then(data => {
                    var body = data.body;
                    let result = {
                        championLevel: body.championLevel,
                        chestGranted: body.chestGranted,
                        championPoints: body.championPoints,
                        championPointsSinceLastLevel: body.championPointsSinceLastLevel,
                        playerId: body.playerId,
                        championPointsUntilNextLevel: body.championPointsUntilNextLevel,
                        tokensEarned: body.tokensEarned,
                        championId: body.championId,
                        lastPlayTime: body.lastPlayTime
                    };
                    if(this.withHeaderInformation)
                        result.responseHeaders = data.headers;
                    resolve(result);
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
     * @param {String} summonerId Id de l'invocateur
     * @param {String} regionId Region
     * @returns {Promise<{score: String}>}
     */
    async getChampionMasteryScore(summonerId, regionId) {
        return new Promise((resolve, reject) => {
            got.get(`https://${regionId + api_url + endpoints.champion_mastery.scoreById + summonerId + '?api_key=' + this.api_key}`, {
                json: true
            })
                .then(data => {
                    let result = {
                        score: data.body
                    };
                    if(this.withHeaderInformation)
                        result.responseHeaders = data.headers;
                    resolve(result);
                })
                .catch(error => {
                    reject({
                        statuscode: error.statusCode,
                        message: error.statusMessage
                    });
                })
        })
    }
}
