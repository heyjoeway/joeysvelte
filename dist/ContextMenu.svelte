<style>div {
  min-width: 200px;
  position: absolute;
  border-style: solid;
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  padding: 8px 0;
}</style>

<script>import Theme from "./Theme.js";
import { clickoutside } from "@svelte-put/clickoutside";
import { fade } from "svelte/transition";
import Overlay from "./Overlay.svelte";
export let open = false;
export let x, y;
</script>

{#if open}
    <Overlay>
        <div
            transition:fade={{ duration: 100 }}
            use:clickoutside={{ event: 'mousedown' }}
            on:clickoutside={() => open = false}
            style:background-color={$Theme.frame.background.color}
            style:border-color={$Theme.frame.border.color}
            style:border-width={$Theme.frame.border.width}
            style:top="{y}px"
            style:left="{x}px"
        >
            <slot />
        </div>
    </Overlay>
{/if}