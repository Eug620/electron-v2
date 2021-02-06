/* 
 * @Author       : Eug
 * @Date         : 2021-01-27 15:50:20
 * @LastEditTime : 2021-02-05 10:54:52
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
     * 获取图片列表
     * @param {*} params 
     */
    GetImageList(params) {
        return request({
            url: Url.getImageList,
            method: 'get',
            params
        })
    },
    /**
     * 新增图片
     * @param {*} params 
     */
    AddImage(params) {
        return request({
            url: Url.addImage,
            method: 'post',
            data: params
        })
    },
    /**
     * 更新图片
     * @param {*} params 
     */
    UpdateImage(params) {
        return request({
            url: Url.updateImage,
            method: 'post',
            data: params
        })
    },
    /**
     * 删除图片
     * @param {*} params 
     */
    DeleteImage(params) {
        return request({
            url: Url.deleteImage,
            method: 'post',
            data: params
        })
    },
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
    }
}