<script>
    import { setContext } from 'svelte';
    import Child from './Child.svelte';

    let transfer = 'from parent';

    // context会像子级传递
    setContext('key', {
        getTransfer: () => transfer
    });
</script>
<div>
    <Child></Child>
</div>
