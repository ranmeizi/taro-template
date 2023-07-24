// 埋点
export abstract class TrackingTrait {
    // 初始化函数
    abstract initialize<Options>(options: Options): void

    // 埋点
    abstract track<T>(data: T): void

    // 设置全局数据,会随着track记录发送
    abstract setGlobal(): void

    // 设置用户数据,会随着track记录发送
    abstract setAccount(): void
}