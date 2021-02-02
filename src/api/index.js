/* 
 * @Author       : Eug
 * @Date         : 2021-01-27 15:48:18
 * @LastEditTime : 2021-02-02 15:17:20
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/api/index.js
 */

import { assign } from 'lodash'
import user from './user'
import city from './city'

let serverApi = assign({}, user, city)

export default serverApi
