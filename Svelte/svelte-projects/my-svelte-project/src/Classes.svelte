<script>
    let active = false;
</script>
<style>
    .active {
        background-color: #ff3e00;
        color: white;
    }
</style>
<!-- class="{acitve ? 'active' : ''"} -->
<button 
    on:click={() => active = !active}
    class:active="{active}"
>
    {#if active}
        inactive
        {:else}
        active
    {/if}
</button>