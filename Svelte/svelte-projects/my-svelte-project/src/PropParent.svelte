<script>
import PropChild from './PropChild.svelte';

const pkg = {
    answer: 42,
    name: '123',
    age: 20,
}

function handleMessage(event) {
    alert(event.detail.text);
}
</script>

<PropChild {...pkg} on:message={handleMessage} />