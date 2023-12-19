import Taro from '@tarojs/taro';

let title = '';
let timer: number | null = null;
const x = 5000;
const n = 50;

// // x秒内设置n次title
export function rudelySetTitle(text) {
  stopTimer();
  title = text;
  startSetTitle();
}
function startSetTitle(time = 0) {
  if (time < n) {
    Taro.setNavigationBarTitle({ title });
    timer = setTimeout(() => {
      startSetTitle(time + 1);
    }, x / n) as any;
  }
}
export function stopTimer() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}
