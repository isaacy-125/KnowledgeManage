<script>
    import { count, time, elapsed } from './Store/index.js';

    let count_value;
    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
    });

    // 订阅一个store属性
    count.subscribe(value => {
        count_value = value;
    })

    function increment() {
        // 更新方法
        // count.increment
        count.update(n => n + 1);
    }

    function decrement() {
        // count.decrement
        count.update(n => n - 1);
    }

    function reset() {
        // 设置方法
        // count.reset
        count.set(0);
    }
</script>
<h1>The count is { count_value }</h1>
<!-- $变量名 相当于简写订阅 -->
<h1>The count is { $count }</h1>
<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
<button on:click={reset}>reset</button>

<h1>the time is { formatter.format($time) }</h1>
<p>this page has been open for { $elapsed } seconds</p>