<style>

.bg-element {   
    position: fixed;
    font-size: 350px;
    font-weight: bold;
    user-select: none;
    pointer-events: none;
}

#bg-top-left { 
    font-size: calc(min(40vw, 350px));
    top: -4.1vw;
    left: 0.95vh;
    overflow-x: hidden;
    filter: blur(12px);
}

#bg-bottom-right { 
    font-size: calc(min(92vw, 1000px));
    bottom: -0.3em;
    right: -0.09em;
    filter: blur(12px);
    rotate: z 45deg;
}

.bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}

</style>

<script lang="ts">

import Theme from "./Theme.js";
import blurFall from "./Animations.js";

let startAnimation = false;
import { onMount } from 'svelte';
onMount(() => {
    startAnimation = true;
});

</script>

<div
    class="bg"
    style:background-color={$Theme.background.color}
    style:background-image="url({$Theme.background.image.uri})"
/>

{#if startAnimation}

<div 
    class="bg-element"
    id="bg-top-left"
    in:blurFall={{
        delay: 250,
        radiusStart: 128,
        radiusEnd: 12,
        duration: 1000
    }}
    style:color={$Theme.background.topLeft.color}
>
    <slot name="topLeft"></slot>
</div>

<div
    class="bg-element"
    id="bg-bottom-right"
    in:blurFall|global={{
        delay: 750,
        radiusStart: 128,
        radiusEnd: 12,
        duration: 1000,
        rotateStart: 60,
        rotateEnd: 45
    }}
    style:color={$Theme.background.bottomRight.color}
>
    <slot name="bottomRight"></slot>
</div>

{/if}