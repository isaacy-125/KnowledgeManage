<script>
    let user = { loggedIn: false };

    function toggle() {
        user.loggedIn = !user.loggedIn;
    }

    let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<!-- 相当于v-if -->
{#if user.loggedIn}
    <button on:click={toggle}>
        Log out
    </button>
<!-- 相当于v-else -->
<!-- 同时也会有:else if -->
{:else}
    <button on:click={toggle}>
        Log in
    </button>
{/if}

<ul>
<!-- 相当于v-for -->
<!-- (cat.id)设置遍历的key -->
{#each cats as cat, i (cat.id)}
    <li>
        <a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
            {i + 1} {cat.name}
        </a>
    </li>
{/each}
</ul>


