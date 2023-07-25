/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-25 00:48:54
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-25 13:48:23
 * @FilePath: /taro-template/src/tracking/impls/uma.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import uma from "umtrack-wx";
import { SetGlobal, TrackingTrait } from "../abstract";

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