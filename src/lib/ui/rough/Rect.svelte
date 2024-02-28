<script lang="ts">
	import { gen } from '$lib/rough';
	import type { ShapeProps } from '.';
	import Shape from './Shape.svelte';

	export let fill: string | undefined = undefined;
	export let stroke: string | undefined = undefined;
	export let props: ShapeProps;
</script>

<Shape ops={gen.rectangle(0, 0, props.width, props.height, { fill, stroke })} {props} />
