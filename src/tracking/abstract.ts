// 埋点
export abstract class TrackingTrait {
    // 初始化函数
    abstract initialize(): void

    // 埋点
    abstract track<T>(data: T): void

    // 设置全局数据,会随着track记录发送
    abstract setGlobal(arg: SetGlobal): void

    // 设置用户数据,会随着track记录发送
    abstract setAccount(arg: SetGlobal): void
}

type setGlobalDataFn = (data: Data) => Data
type Data = Record<string, any>

export type SetGlobal = setGlobalDataFn | Data