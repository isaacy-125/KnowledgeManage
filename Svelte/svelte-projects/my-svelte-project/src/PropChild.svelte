<script>
    import { createEventDispatcher } from 'svelte';

    // 定义一个dispatch方法用于回调传入的方法
    const dispatch = createEventDispatcher();
    // export 定义一个prop 可以有默认值
    export let answer = 'a mystery';
    export let name;

    function sayHello() {
        dispatch('message', {
            text: 'Hello'
        });
    }
</script>

<!-- $$props用来代替没有定义的prop -->
<p>The answer is {answer},
name is {name}, age is {$$props.age}</p>

<button on:click={sayHello}>
    click to say hello
</button>