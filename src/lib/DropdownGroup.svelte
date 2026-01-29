<script lang="ts">

import { rgba2rgb } from "./Utils.js";
import { getPropStore } from "./Theming.js";
import { derived } from "svelte/store";

export let label: string = "";

let bgColorStore = getPropStore("textfield.backgroundColor");
let bgColorRgbStore = derived(bgColorStore, ($bgColorStore) => {
    if (!$bgColorStore) return "";
    return rgba2rgb($bgColorStore);
});

</script>

<!-- We have to remove alpha from option bg or it no workie -->
<optgroup
    label={label}
    style:background-color={$bgColorRgbStore}
>
    <slot></slot>
</optgroup>

<style lang="scss">
    optgroup {
        color: var(--joeysvelte-text-colors-primary);
    }
</style>