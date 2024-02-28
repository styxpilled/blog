<script lang="ts">
	import { opsToPath } from '$lib/rough';
	import type { Drawable } from 'roughjs/bin/core';
	import type { ShapeProps } from '.';
	export let props: ShapeProps;
	export let ops: Drawable;

	interface props extends ShapeProps {}

	let paths: { path: string; stroke: string }[] = [];

	for (const drawing of ops.sets) {
		let path = opsToPath(drawing);
		paths.push({
			path,
			stroke: (drawing.type === 'path' ? ops.options.stroke : ops.options.fill) || '#000'
		});
		paths = paths;
	}
</script>

<svg
	viewBox="0 0 {props.width} {props.height}"
	width={props.width}
	height={props.height}
	class:absolute={props.absolute}
	style:--top={props.top}
	style:--left={props.left}
>
	{#each paths as path, i}
		<path d={path.path} stroke={path.stroke} stroke-width="1" fill="none" />
		<text x="5" y="35">development</text>
	{/each}
</svg>

<style>
	svg {
		overflow: visible;
	}

	.absolute {
		position: absolute;
		z-index: -1;
		top: var(--top);
		left: var(--left);
	}
</style>
