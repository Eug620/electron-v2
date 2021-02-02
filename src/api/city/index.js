/* 
 * @Author       : Eug
 * @Date         : 2021-01-27 15:50:25
 * @LastEditTime : 2021-01-29 18:00:22
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/api/city/index.js
 */

import request from '@/plugin/axios'

const Url = {
    getProvincesList: '/api/city/provinces',
    getCitiesList: '/api/city/cities',
    getAreasList: '/api/city/areas',
    getStreetsList: '/api/city/streets',
    getVillagesList: '/api/city/villages'
}

export default {
    /**
     * 省级（省份、直辖市、自治区）列表
     * @param {*} params 
     */
    GetProvincesList(params) {
        return request({
            url: Url.getProvincesList,
            method: 'get',
            params
        })
    },
    /**
     * 地级（城市）列表
     * @param {*} params 
     * @param provinceCode string 省级（省份、直辖市、自治区）code
     */
    GetCitiesList(params) {
        return request({
            url: Url.getCitiesList,
            method: 'get',
            params
        })
    },
    /**
     * 县级（区县) 列表
     * @param {*} params 
     * @param provinceCode string 省级（省份、直辖市、自治区）code
     * @param cityCode string 地级（城市）code
     */
    GetAreasList(params) {
        return request({
            url: Url.getAreasList,
            method: 'get',
            params
        })
    },
    /**
     * 乡级（乡镇、街道 列表
     * @param {*} params 
     * @param provinceCode string 省级（省份、直辖市、自治区）code
     * @param cityCode string 地级（城市）code
     * @param areaCode string 县级（区县) code
     */
    GetStreetsList(params) {
        return request({
            url: Url.getStreetsList,
            method: 'get',
            params
        })
    },
    /**
     * 村级（村委会、居委会）列表
     * @param {*} params 
     * @param provinceCode string 省级（省份、直辖市、自治区）code
     * @param cityCode string 地级（城市）code
     * @param areaCode string 县级（区县) code
     * @param streetCode string 乡级（乡镇、街道 code
     */
    GetVillagesList(params) {
        return request({
            url: Url.getVillagesList,
            method: 'get',
            params
        })
    }
}