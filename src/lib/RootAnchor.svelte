<!-- https://github.com/sveltejs/svelte/issues/1872#issuecomment-967103728 -->

<script lang="ts">
    import { onMount } from 'svelte';
    import ThemeProvider from './ThemeProvider.svelte';
    
    let anchor: Node;
    
    onMount(() => {
        let container = document.getElementById('anchor-container');
        if (!container) {
            container = document.body.appendChild(document.createElement('div'));
            container.id = 'anchor-container';
        }
        container.appendChild(anchor)
                
        // On Unmount
        return () => {
            container.removeChild(anchor);
        }
    });
    
    
</script>

<div bind:this={anchor} class="anchor">
    <ThemeProvider>
        <slot />
    </ThemeProvider>
</div>