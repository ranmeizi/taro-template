import uma from "umtrack-wx";
import { SetGlobal, TrackingTrait } from "../tool/abstract";

let globalData = {
    Um_Key_Source: '',
    // Um_Key_PageID: '',
    // Um_Key_Ctrl: '',
    Um_Key_UserID: '',
    Um_Key_Ver: 'V4',
    Um_Key_ItemID: '',
    Um_Key_SourcePage: '',
    Um_Key_Tag: '',
}

export default class extends TrackingTrait {
    initialize(): void {
        console.log('[tracking] uma initialize')
    }
    track<T>(data: T): void {
        console.log('[tracking] uma track',data)
    }
    setGlobal(arg: SetGlobal): void {
        console.log('[tracking] mf setGlobal')
        if (typeof arg === 'function') {
            const fn = arg
            globalData = fn(globalData)
        } else {
            const data = arg
            Object.assign(globalData, data)
        }
    }
    setAccount(arg: SetGlobal): void {
        if (typeof arg === 'function') {
            const fn = arg
            globalData = fn(globalData)
        } else {
            const data = arg
            Object.assign(globalData, data)
        }
    }
}