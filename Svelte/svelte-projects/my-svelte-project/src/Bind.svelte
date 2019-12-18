<script>
    let name = 'world';
    let checked = false;
    let thisDiv;

    function getWidth() {
        console.log(thisDiv);
    }
</script>

<!-- 双向绑定数据 -->
<input bind:value={name} />

<h1>Hello {name}</h1>

<input type="checkbox" bind:checked={checked}>
{#if checked}
yes
{:else}
no
{/if}

<!-- bind:this可以获取当前ref -->
<button bind:this={thisDiv} class="bindThis" on:click={getWidth}>
    get this width
</button>

<style>
    .bindThis {
        width: 100px;
        height: 100px;
    }
</style>