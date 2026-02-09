<!-- https://github.com/sveltejs/svelte/issues/1872#issuecomment-967103728 -->

<style lang="scss">
    .bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--joeysvelte-overlay-backgroundColor);
        backdrop-filter: blur(var(--joeysvelte-overlay-blur));
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
    }
</style>

<script context="module" lang="ts">
    export let overlayID = 0;
</script>

<script lang="ts">
    import ScrollBlocker from './ScrollBlocker.svelte';
    import RootAnchor from './RootAnchor.svelte';
    
    import { fade } from 'svelte/transition';
    import { quartOut } from 'svelte/easing';
        
    let openPrev = false;
    export let open: boolean = false;
    export let allowClose: boolean = true;
    
    let outerContainer: Node;
    
    let id: number | undefined = undefined;
    
    function clickOutsideHandler(event: MouseEvent) {
        if (event.target !== outerContainer) return;
        history.back();
    }
    
    interface OverlayPopState {
        overlayID: number | undefined;
    }
    
    interface OverlayPopEvent extends PopStateEvent {
        state: OverlayPopState;
    }
    
    function onPopState(e: OverlayPopEvent) {
        if (id === undefined) return;
        if (e.state) {
            if (e.state.overlayID !== undefined) {
                if (e.state.overlayID == id) return;
            }
        }
        if (!allowClose) return;
        open = false;
        openPrev = false;
    }
    
    $: {
        if (open && !openPrev)  {
            // svelte-ignore reactive_declaration_module_script_dependency
            // We never set overlayID in the module block so it shouldn't matter
            id = overlayID++;
            console.log(id);
            history.pushState(
                {
                    overlayID: id
                }, "",
                new URL(
                    `?overlay-${id}`,
                    location.href
                ).href
            );
            openPrev = true;
        }
    }
</script>

<svelte:window on:popstate={onPopState} />

{#if open}
    <RootAnchor>
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
    </RootAnchor>
{/if}