<script>
    let number = 0;
    let promise;
    function setNumber() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Math.random())
            }, 2000);
        }).then((res) => {
            // 这里return的变量 会在:then后以变量形式保存
            number = res;
            return res;
        })
    }
    function handleClick() {
        // 将变量promise指向一个异步方法
        promise = setNumber();
    }
</script>
<button on:click={handleClick}>
    generate random number
</button>

<!-- promise resolve前的展示 -->
{#await promise}
    <p>waiting...</p>
{:then numberRes}
    {number}
    {numberRes}
{:catch error}
    <p style="color: red;">catch error</p>
{/await}