<style lang="scss">
    div {
        min-width: 200px;
        position: fixed;
        
        border-style: solid;
        backdrop-filter: blur(32px);
        -webkit-backdrop-filter: blur(32px);
        
        box-shadow: 0 4px 10px rgba(0,0,0,0.5);
        
        padding: 8px 0;
        font-size: 12px;
    }
</style>

<script lang="ts">
    import { currentTheme } from './Theming.js';
    
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
        x = event.clientX;
        y = event.clientY;
        
        const windowWidth = document.documentElement.clientWidth;
        const windowHeight = document.documentElement.clientHeight;

        if (x > windowWidth / 2) {
            xAlignment = "right";
            x = windowWidth - x;
        } else {
            xAlignment = "left";
        }
        
        if (y + 200 > windowHeight) {
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
            transition:fade={{ duration: 100 }}
            use:clickoutside={{ event: 'mousedown' }}
            on:clickoutside={() => isOpen = false}
            style={styleObjToStr({
                [xAlignment]: `${x}px`,
                [yAlignment]: `${y}px`,
                "background-color": $currentTheme.frame.background.color,
                "border-color": $currentTheme.frame.border.color,
                "border-width": $currentTheme.frame.border.width
            })}
        >
            <slot />
        </div>
    </RootAnchor>
{/if}