import MfTracking from './impls/mf'
import UmaTracking from './impls/uma'
import Agent from './Agent'

const mf = new MfTracking()
const uma = new UmaTracking()

Agent.use(() => mf)
Agent.use(() => uma)

// 初始化
Agent.duration.createGroup('pageStay')

export default Agent
