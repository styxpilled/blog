<script lang="ts">
	import Rect from './rough/Rect.svelte';
</script>

<header>
	<Rect
		fill="red"
		stroke="black"
		props={{ height: 50, width: 1500, left: '2rem', absolute: true }}
	/>
	<section>
		<h3 class="site-logo">
			<a href="/">styx's fun blog </a>
		</h3>
		<nav>
			<ul>
				<li>
					<span class="crossed">S</span>articles
				</li>
			</ul>
		</nav>
	</section>
</header>

<style>
	header {
		background-color: var(--color-bg-bright);
		width: 100%;
		transform: rotate(-1.5deg);
		position: relative;
	}

	section {
		margin: 0 auto;
		width: 1000px;
		height: 3rem;
	}

	section,
	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		justify-content: space-around;
		gap: 1rem;
		font-size: 2rem;
		& > li,
		& > li > * {
			text-transform: lowercase;
			font-weight: 500;
			display: flex;
			align-items: center;
			gap: 0.25rem;
		}
	}

	header {
		font-family: 'Rock Salt';
	}

	h3 {
		font-size: 2rem;
	}

	li {
		text-transform: lowercase;
	}
</style>
