/*
 * @Author: boboan 360969885@qq.com
 * @Date: 2023-07-26 11:59:39
 * @LastEditors: boboan 360969885@qq.com
 * @LastEditTime: 2023-07-26 12:00:47
 * @FilePath: /taro-template/src/utils/delay.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
type anyFn = (...args: any[]) => any;

export function throttle(fn: anyFn, delay: number) {
    let prevTime = 0;
    return function (this: unknown, ...args: any[]) {
        const now = new Date().getTime();
        if (now - prevTime > delay) {
            fn.apply(this, args);
            prevTime = now;
        }
    };
}

export function debounce(fn: anyFn, delay: number) {
    let timer: any = null;
    return function (this: unknown, ...args: any[]) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, args);
        }, delay);
    };
}

/**
 *
 * @param timeout 延迟timeout
 * @returns
 */
export async function sleep(timeout: number) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}