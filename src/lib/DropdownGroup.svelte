<script lang="ts">

import { currentTheme } from "./Theming.js";

export let label: string = "";

function rgba2rgb(rgba: string) {
    // Discard the alpha value
    let [r, g, b] = rgba.replace("rgba(", "").replace(")", "").split(",").map((x) => parseInt(x));
    return `rgb(${r}, ${g}, ${b})`;
}

</script>

<optgroup
    label={label}
    style:background-color={rgba2rgb($currentTheme.textfield.background.color)}
>
    <slot></slot>
</optgroup>

<style lang="scss">
    optgroup {
        color: var(--joeysvelte-text-colors-primary);
    }
</style>