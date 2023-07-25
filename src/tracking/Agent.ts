import { TrackingTrait } from './abstract'
import { Duration } from './duration'

type TrackAdaptor = () => TrackingTrait

class Agent {
    controllers: TrackingTrait[] = []

    use(impl: TrackAdaptor) {
        this.controllers.push(impl())
    }

    initialize = applyFn<TrackingTrait['initialize']>('initialize').bind(this)
    track = applyFn<TrackingTrait['track']>('track').bind(this)
    setGlobal = applyFn<TrackingTrait['setGlobal']>('setGlobal').bind(this)
    setAccount = applyFn<TrackingTrait['setAccount']>('setAccount').bind(this)

    duration = new Duration({
        track: this.track
    })
}

function applyFn<T>(name: keyof TrackingTrait): T {
    return function (this: Agent) {
        this.controllers.forEach(controller => {
            if (typeof controller[name] === 'function') {
                controller[name].apply(controller, arguments as any)
            }
        })
    } as T
}

export default new Agent()

