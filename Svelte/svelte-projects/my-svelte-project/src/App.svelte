<script>
	import Variable from './Variable.svelte';
	import Attributes from './Attributes.svelte';
	import HtmlRender from './HtmlRender.svelte';
	import Reactivity from './Reactivity.svelte';
	import PropParent from './PropParent.svelte';
	import Logic from './Logic.svelte';
	import Promise from './Promise.svelte';
	import Events from './Events.svelte';
	import Bind from './Bind.svelte';
	import Lifecycle from './Lifecycle.svelte';
	import StoreSvelte from './Store.svelte';
	import Classes from './Classes.svelte';
	import SlotParent from './Slots/SlotParent.svelte';

	export let name;
</script>

<main>
	<Variable />
	<Attributes />
	<HtmlRender />
	<Reactivity />
	<PropParent />
	<Logic />
	<Promise />
	<Events />
	<Bind />
	<Lifecycle />
	<StoreSvelte />
	<Classes />
	<SlotParent />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>