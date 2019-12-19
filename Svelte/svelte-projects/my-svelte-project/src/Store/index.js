import { writable, readable, derived } from 'svelte/store';

// 初始化一个字段为0
export const count = writable(0);
/**
 * 也可以设置暴露的方法名来调用
 * function createCount() {
 *  const { subscribe, set, update } = writable(0);
 *  return {
 *    subscribe,
 *    increment: () => update(n => n + 1),
 *    decrement: () => update(n => n - 1),
 *    reset: () => set(0)
 *  }
 * }
 * export const count = createCount();
 */

// readable是一个初始化函数
// 第一个参数为初始值
// 第二个参数为第一次订阅后触发
// 返回一个停止时触发的函数
export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const start = new Date();

// derived是创建一个基于其他属性改变而改变的store变量
export const elapsed = derived(
    time,
    $time => Math.round(($time - start) / 1000)
)