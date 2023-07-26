import MfTracking from './impls/mf'
import UmaTracking from './impls/uma'
import Agent from './tool/Agent'

// 埋点各家实现
const mf = new MfTracking()
const uma = new UmaTracking()

// use controller 使用 agent 调用埋点api
Agent.use(() => mf)
Agent.use(() => uma)

// 初始化
Agent.duration.createGroup('pageStay')

export default Agent
