import { TrackingTrait, SetGlobal } from "../tool/abstract";

export default class extends TrackingTrait {
    initialize(): void {
        console.log('[tracking] mf initialize')
    }
    track<T>(data: T): void {
        console.log('[tracking] mf track',data)
    }
    setGlobal(arg: SetGlobal): void {
        console.log('[tracking] mf setGlobal')
        if(typeof arg === 'function'){

        }else{

        }
    }
    setAccount(arg: SetGlobal): void {
        console.log('[tracking] mf setAccount')
        if(typeof arg === 'function'){

        }else{

        }
    }
}