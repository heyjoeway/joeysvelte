
<style lang="scss">

div {
    backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
    -webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
    background: var(--joeysvelte-frame-background-color);
    border-width: var(--joeysvelte-frame-border-width);
    border-color: var(--joeysvelte-frame-border-color-default);
    color: var(--joeysvelte-text-colors-primary);
    border-style: solid;
}

</style>

<script lang="ts">

import ThemeProvider from './ThemeProvider.svelte';

export let theme: string = "";
export let overflow: "visible" | "auto" = "visible";
export let padding: string = "16px";
export let minWidth: string = "0px";

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<ThemeProvider {theme}>
    <div
        style:overflow={overflow}
        style:padding={padding}
        style:min-width={minWidth}
    >
        <slot></slot>
    </div>
</ThemeProvider>