<style lang="scss">

.inner-container {
    width: 350px;
    margin: auto 8px;
    
    border-style: solid;
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    
    padding: 16px;
}

h1 {
    margin-top: 0;
    user-select: none;
}

.footer {
    margin-top: 16px;
    text-align: right;
    
    display: flex;
    gap: 16px;
    flex-direction: row;
    justify-content: flex-end;
}

</style>

<script lang="ts">
    import { currentTheme } from './Theming.js';
    import Overlay from "./Overlay.svelte";
    
    export let open: boolean = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<Overlay bind:open={open}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="inner-container"
        style:background-color={$currentTheme.frame.background.color}
        style:border-color={$currentTheme.frame.border.color}
        style:border-width={$currentTheme.frame.border.width}
        style:color={$currentTheme.text.primary.color}
        on:click|stopPropagation
    >
        <h1><slot name="header"></slot></h1>
        <slot name="body"></slot>
        <div class="footer"><slot name="footer"></slot></div>
    </div>
</Overlay>