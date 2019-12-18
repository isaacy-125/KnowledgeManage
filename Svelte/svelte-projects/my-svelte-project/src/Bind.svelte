<script>
    let name = 'world';
</script>

<!-- 双向绑定数据 -->
<input bind:value={name} />

<h1>Hello {name}</h1>