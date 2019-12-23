<script>
    import SlotChild from './SlotChild.svelte';
</script>

<!--拿到slot回传的参数-->
<SlotChild let:hovering={active}>
    Hello
    {#if active}
        active
        {:else}
        inactive
    {/if}
    <span slot="name">
        isaac
    </span>
    <span slot="intro">
        love coding
    </span>
</SlotChild>
