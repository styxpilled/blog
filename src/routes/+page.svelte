<script lang="ts">
	import Rect from '$ui/rough/Rect.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button>
	<Rect fill="red" stroke="black" props={{ height: 50, width: 100 }} />
</button>

<style>
	button {
		box-shadow: 5px 5px black;
	}

	button:active {
		box-shadow: none;
		transform: translateY(5px);
	}
</style>
