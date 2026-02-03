<style lang="scss">
    div {
        min-width: 200px;
        position: absolute;
        
        border-style: solid;
        border-radius: 16px;
		backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
		-webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
        
        box-shadow: 0 2px 3px rgba(0,0,0,0.5);
        
        padding: 8px 0;
        font-size: 12px;
        
        color: var(--joeysvelte-text-colors-primary) !important;
        background-color: var(--joeysvelte-frame-background-color);
        border-color: var(--joeysvelte-frame-border-color-default);
        border-width: var(--joeysvelte-frame-border-width);
    }
</style>

<script lang="ts">
    import { clickoutside } from '@svelte-put/clickoutside';
    import { fade } from 'svelte/transition';
    
    import RootAnchor from "./RootAnchor.svelte";
    import { styleObjToStr } from './Utils.js';
    
    let isOpen: boolean = false;
    
    let x: number = 0;
    let y: number = 0;
    
    let xAlignment: "left" | "right";
    let yAlignment: "top" | "bottom";
    
    export function open(event: MouseEvent) {
        event.preventDefault();
        x = event.pageX;
        y = event.pageY;
        
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;
        
        if (event.clientX > windowWidth / 2) {
            xAlignment = "right";
            x = windowWidth - x;
        } else {
            xAlignment = "left";
        }
        
        if (event.clientY + 200 > windowHeight) {
            yAlignment = "bottom";
            y = windowHeight - y;
        } else {
            yAlignment = "top";
        }
        
        isOpen = true;
    }
    
    export function close() {
        isOpen = false;
    }
</script>

{#if isOpen}
    <RootAnchor>
        <div
            transition:fade={{ duration: 50 }}
            use:clickoutside={{ event: 'mousedown' }}
            on:clickoutside={() => isOpen = false}
            style={styleObjToStr({
                [xAlignment]: `${x}px`,
                [yAlignment]: `${y}px`
            })}
        >
            <slot />
        </div>
    </RootAnchor>
{/if}