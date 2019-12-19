<script>
    import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from 'svelte';

    let result = '';
    let seconds = 0;

    // 将在组件首次呈现在DOM之后运行
    onMount(() => {
        setTimeout(async () => {
            result = 'onMount';
            // tick 个人理解在之前的DOM更改后 才会执行下面的函数
            // 类似于vue的nextTrick
            await tick();
            console.log('finish onMount');
        }, 2000);
    })

    // 销毁组件时运行的代码
    onDestroy(() => {
        clearInterval(interval);
    })

    // 在DOM更新之前工作 虽然不知道这里为什么拿不到老数据
    beforeUpdate(() => {
        console.log(`old seconds is ${seconds}`);
    })

    // DOM与数据同步时 运行
    afterUpdate(() => {
        console.log(`new seconds is ${seconds}`);
    })

    const interval = setInterval(() => {
        seconds += 1
    },  2000);
</script>
<h1>
    {#if result}
        {result}
    {:else}
        loading
    {/if}
</h1>
<p>the page has been open for {seconds} seconds</p>