/* 
 * @Author       : Eug
 * @Date         : 2021-01-27 15:48:18
 * @LastEditTime : 2021-02-03 19:52:20
 * @LastEditors  : Eug
 * @Descripttion : Descripttion
 * @FilePath     : /electron-v2/src/api/index.js
 */

import { assign } from 'lodash'
import user from './user'
import city from './city'
import image from './image'

let serverApi = assign({}, user, city, image)

export default serverApi
