<script lang="ts">

import { currentTheme } from "./Theming.js";

export let value: string;

function rgba2rgb(rgba: string) {
    // Discard the alpha value
    let [r, g, b] = rgba.replace("rgba(", "").replace(")", "").split(",").map((x) => parseInt(x));
    return `rgb(${r}, ${g}, ${b})`;
}

</script>

<option
    value={value}
    style:background-color={rgba2rgb($currentTheme.textfield.background.color)}
>
    <slot></slot>
</option>

<style lang="scss">
    option {
        color: var(--joeysvelte-text-colors-primary);
    }
</style>