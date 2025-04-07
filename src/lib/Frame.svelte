
<style lang="scss">
    
div {
    margin: 16px 0px;
    
    border-style: solid;
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    
    padding: 12px 16px;
}


</style>

<script lang="ts">

import { currentTheme } from './Theming.js';

export let theme = $currentTheme;

export let overflow: "visible" | "auto" = "visible";

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    style:background-color={theme.frame.background.color}
    style:border-color={theme.frame.border.color}
    style:border-width={theme.frame.border.width}
    style:color={theme.text.primary.color}
    style:overflow={overflow}
>
    <slot></slot>
</div>