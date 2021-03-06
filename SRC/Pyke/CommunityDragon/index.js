const got = require('got');
const map = new Map();
module.exports = class Community {
    constructor(){
        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */
        this.square = function square(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/square`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */
        this.data = function data(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/data`, {cache: map, json: true}).then(data =>{
                    return resolve(data.body)
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */
        this.splash_art = function splash_art(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/splash-art`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         * @param {*} skinId Skin of champion
         */

        this.splash_art_skin = function splash_art_skin(patch, champion, skinId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/splash-art/skin/${skinId}`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */
        this.splash_art_centered = function splash_art_centered(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/splash-art/centered`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         * @param {*} skinId Skin of champion
         */

        this.splash_art_centered_skin = function splash_art_skin(patch, champion, skinId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/splash-art/centered/skin/${skinId}`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */

        this.sounds_ban = function sounds_ban(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/champ-select/sounds/ban`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */

        this.sounds_choose = function sounds_choose(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/champ-select/sounds/choose`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */

        this.sounds_sfx = function sounds_sfx(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/champ-select/sounds/sfx`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */

        this.tile = function tile(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/tile`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         * @param {*} skinId Skin of champion
         */

        this.tile_skin = function tile_skin(patch, champion, skinId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/tile/skin/${skinId}`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */

        this.portrait = function portrait(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/portrait`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         * @param {*} skinId Skin of champion
         */

        this.portrait_skin = function portrait_skin(patch, champion, skinId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/portrait/skin/${skinId}`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */

        this.passive = function passive(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/ability-icon/passive`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */

        this.Qspell = function Qspell(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/ability-icon/q`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */
        this.Wspell  = function Wspell(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/ability-icon/w`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */
        this.Espell  = function Espell(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/ability-icon/e`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * 
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} champion ChampionID or ChampionKey
         */
        this.Rspell  = function Rspell(patch, champion) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/champion/${champion}/ability-icon/r`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         */

        this.honor_generic = function honor_generic(patch) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/honor/generic`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

         /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} honorId Honor ID
         */

        this.honor = function honor(patch, honorId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/honor/${honorId}`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

         /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} honorId Honor ID
         */

        this.honor_locked = function honor_locked(patch, honorId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/honor/${honorId}/locked`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} honorId Honor ID
         * @param {*} level
         */

        this.honor_level = function honor_level(patch, honorId, level) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/honor/${honorId}/level/${level}`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         */

        this.emblem_generic = function emblem_generic(patch) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/honor/emblem/generic`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

         /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} honorId Honor ID
         */

        this.emblem = function emblem(patch, honorId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/honor/emblem/${honorId}`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

         /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} honorId Honor ID
         */

        this.emblem_locked = function emblem_locked(patch, honorId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/honor/emblem/${honorId}/locked`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} honorId Honor ID
         * @param {*} level
         */

        this.emblem_level = function emblem_level(patch, honorId, level) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/honor/emblem/${honorId}/level/${level}`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} wardId Ward ID
         */

        this.ward = function ward(patch, wardId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/ward/${wardId}`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} wardId Ward ID
         */

        this.ward_shadow = function ward_shadow(patch, wardId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/ward/${wardId}/shadow`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

        /**
         * @param {*} patch Patch version for returned data. If not specified, the latest version for the region is used.
         * @param {*} profileIconId Profile Icon ID
         */

        this.ward_shadow = function ward_shadow(patch, profileIconId) {
            return new Promise((resolve, reject) =>{
                got.head(`https://cdn.communitydragon.org/${patch}/profile-icon/${profileIconId}`, {cache: map}).then(data =>{
                    return resolve({
                        url: data.url
                    })
                }).catch(err => { reject({ status: { status_code: err.statusCode, message: err.statusMessage } }) });
            })
        };

    }  
}
