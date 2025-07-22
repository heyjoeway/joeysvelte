<script lang="ts">
    import Animations from "./Animations.js";
    const blurFall = Animations.blurFall;

    let startAnimation = false;
    import { onMount } from "svelte";
    onMount(() => {
        startAnimation = true;
    });
</script>

<div class="bg">
    {#if startAnimation}
        <div
            class="bg-element"
            id="bg-top-left"
            in:blurFall={{
                delay: 250,
                duration: 1000,
            }}
        >
            <slot name="topLeft"></slot>
        </div>

        <div
            class="bg-element"
            id="bg-bottom-right"
            in:blurFall|global={{
                delay: 750,
                duration: 1000,
                rotateStart: 60,
                rotateEnd: 45,
            }}
        >
            <slot name="bottomRight"></slot>
        </div>
    {/if}
</div>

<style>
    .bg-element {
        position: fixed;
        font-size: 350px;
        font-weight: normal;
        user-select: none;
        pointer-events: none;
        filter: blur(12px);
        position: absolute;
        text-transform: lowercase;
        white-space: nowrap;
    }

    #bg-top-left {
        font-size: calc(min(40vw, 350px));
        top: -7vw;
        left: 0.95vh;
        overflow-x: hidden;
        color: var(--joeysvelte-bg-topLeft-color);
    }

    #bg-bottom-right {
        font-size: calc(min(92vw, 1000px));
        bottom: -0.5em;
        right: -0.1em;
        rotate: z 45deg;
        color: var(--joeysvelte-bg-bottomRight-color);
    }

    .bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        z-index: -9999;
        font-family: "franklin_gothicregular";
        
        background-color: var(--joeysvelte-bg-backgroundColor);
        /* background-image: url(--joeysvelte-bg-backgroundImage-uri); TODO? */
    }
</style>
