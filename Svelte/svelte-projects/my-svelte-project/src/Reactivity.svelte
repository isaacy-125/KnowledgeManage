<script>
let count = 0;

// $: 写法相当于computed
$: doubled = count * 2;
// 只要依赖项变了 就会执行语句
$: console.log(`this count is ${count}`);
// 也会执行代码块
$: {
    console.log(`the count is ${count}`);
    if (count >= 10) {
        alert('count is dangerously high!');
    }
}

function handleClick() {
    // 变量的反应式也一样不会对push或splice等方法触发
    count += 1;
}
</script>

<button on:click={handleClick}>
    Clicked { count } { count === 1 ? 'time' : 'times' }
</button>
<p>{count} doubled is {doubled}</p>