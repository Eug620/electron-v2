/*
 * @Author        : yeyuhang
 * @Date          : Do not edit
 * @LastEditTime: 2021-01-27 16:29:17
 * @LastEditors: Please set LastEditors
 * @Descripttion  : Descripttion
 */
import request from '@/plugin/axios'

const Url = {
    getUserList: '/api/user/getUserList',
    createUser: '/api/user/createUser',
    updateUser: '/api/user/updateUser',
    deleteUser: '/api/user/deleteUser',
    userLogin: '/api/user/login'
}

export default {
    GetUserList(params) {
        return request({
            url: Url.getUserList,
            method: 'get',
            params
        })
    },
    CreateUser(params) {
        return request({
            url: Url.createUser,
            method: 'post',
            data: params
        })
    },
    UpdateUser(params) {
        return request({
            url: Url.updateUser,
            method: 'post',
            data: params
        })
    },
    DeleteUser(params) {
        return request({
            url: Url.deleteUser,
            method: 'post',
            data: params
        })
    },
    UserLogin(params) {
        return request({
            url: Url.userLogin,
            method: 'post',
            data: params
        })
    }
}