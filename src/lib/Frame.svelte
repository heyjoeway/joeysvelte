
<style lang="scss">

div {
    margin: 16px 0px;
    
    border-style: solid;
    backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
    -webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
        
    padding: 12px 16px;
    
    background-color: var(--joeysvelte-frame-background-color);
    border-color: var(--joeysvelte-frame-border-color-default);
    border-width: var(--joeysvelte-frame-border-width);
    color: var(--joeysvelte-text-colors-primary);
}

</style>

<script lang="ts">

import type { Readable } from 'svelte/store';
import { currentTheme, type Theme } from './Theming.js';
import ThemeProvider from './ThemeProvider.svelte';

export let theme: Readable<Theme> = currentTheme;

export let overflow: "visible" | "auto" = "visible";

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<ThemeProvider {theme}>
    <div style:overflow={overflow}>
        <slot></slot>
    </div>
</ThemeProvider>