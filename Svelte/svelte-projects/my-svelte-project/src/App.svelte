<script>
	import Variable from './Variable.svelte';
	import Attributes from './Attributes.svelte';
	import HtmlRender from './HtmlRender.svelte';
	import Reactivity from './Reactivity.svelte';
	export let name;
</script>

<main>
	<Variable />
	<Attributes />
	<HtmlRender />
	<Reactivity />
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