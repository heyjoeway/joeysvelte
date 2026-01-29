<script lang="ts">

import { rgba2rgb } from "./Utils.js";
import { getPropStore } from "./Theming.js";
import { derived } from "svelte/store";

export let value: string;

let bgColorStore = getPropStore("textfield.backgroundColor");
let bgColorRgbStore = derived(bgColorStore, ($bgColorStore) => {
    if (!$bgColorStore) return "";
    return rgba2rgb($bgColorStore);
});


</script>

<!-- We have to remove alpha from option bg or it no workie -->
<option
    value={value}
    style:background-color={$bgColorRgbStore}
>
    <slot></slot>
</option>

<style lang="scss">
    option {
        color: var(--joeysvelte-text-colors-primary);
    }
</style>