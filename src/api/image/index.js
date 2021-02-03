/* 
 * @Author       : Eug
 * @Date         : 2021-01-27 15:50:20
 * @LastEditTime : 2021-02-03 19:51:53
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/api/image/index.js
 */
import request from '@/plugin/axios'

const Url = {
    getImageList: '/api/image/getImageList',
    addImage: '/api/image/addImage',
    updateImage: '/api/image/updateImage',
    deleteImage: '/api/image/deleteImage',
    background: '/api/image/background'
}

export default {
    /**
     * 随机背景图片
     * @param {*} params 
     */
    Background(params) {
        return request({
            url: Url.background,
            method: 'get',
            params
        })
    },
}