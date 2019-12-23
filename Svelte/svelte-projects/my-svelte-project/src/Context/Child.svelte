<script>
    import { getContext } from 'svelte';

    const { getTransfer } = getContext('key');

    const data = getTransfer();
</script>
<div>
    {data}
</div>
