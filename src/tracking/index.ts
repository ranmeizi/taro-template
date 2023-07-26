/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-25 00:48:37
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-26 11:42:59
 * @FilePath: /taro-template/src/tracking/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import MfTracking from './impls/mf'
import UmaTracking from './impls/uma'
import Agent from './Agent'

// 埋点各家实现
const mf = new MfTracking()
const uma = new UmaTracking()

// use controller 使用 agent 调用埋点api
Agent.use(() => mf)
Agent.use(() => uma)

// 初始化
Agent.duration.createGroup('pageStay')

export default Agent
