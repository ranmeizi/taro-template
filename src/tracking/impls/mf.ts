/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-25 00:48:59
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-25 13:48:39
 * @FilePath: /taro-template/src/tracking/impls/mf.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { TrackingTrait, SetGlobal } from "../abstract";


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