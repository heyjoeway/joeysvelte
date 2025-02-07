<!-- https://github.com/sveltejs/svelte/issues/1872#issuecomment-967103728 -->

<style lang="scss">
    .bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(8px);
    }
    
    .outer-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 32px;
        box-sizing: border-box;
        
        scrollbar-color: #111 #000;
    }
</style>

<script lang="ts">
    import ScrollBlocker from './ScrollBlocker.svelte';
    
    import { fade } from 'svelte/transition';
    import { quartOut } from 'svelte/easing';
    
    import { onMount } from 'svelte';
    
    export let open: boolean = false;
    export let allowClose: boolean = true;

    let overlay: Node;
    let outerContainer: Node;
    
    onMount(() => {
        let container = document.getElementById('overlay-container');
        if (!container) {
            container = document.body.appendChild(document.createElement('div'));
            container.id = 'overlay-container';
        }
        container.appendChild(overlay)
        
        // On Unmount
        return () => {
            container.removeChild(overlay);
        }
    });
    
    function clickOutsideHandler(event: MouseEvent) {
        if (event.target !== outerContainer) return;
        if (!allowClose) return;
        open = false;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={overlay}
    class="overlay"
>
{#if open}

    <ScrollBlocker />
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="bg"
        transition:fade={{
            duration: 500,
            easing: quartOut
        }}
    ></div>
    
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="outer-container"
        on:click={clickOutsideHandler}
        bind:this={outerContainer}
        transition:fade={{
            duration: 100,
            easing: quartOut
        }}
    >
        <slot />
    </div>
    {/if}
</div>
