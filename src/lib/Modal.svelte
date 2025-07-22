<style lang="scss">

.inner-container {
    width: 100%;
    margin: auto var(--joeysvelte-general-gap-sm);
    
    border-style: solid;
    backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
    -webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
    
    box-shadow: 0 4px 10px rgba(0,0,0,0.5);
    
    padding: 16px;
    
    background-color: var(--joeysvelte-frame-background-color);
    border-color: var(--joeysvelte-frame-border-color-default);
    border-width: var(--joeysvelte-frame-border-width);
    color: var(--joeysvelte-text-colors-primary);
}

h1 {
    margin-top: 0;
    margin-bottom: var(--joeysvelte-general-gap-md);
    user-select: none;
}

.footer {
    // margin-top: var(--joeysvelte-general-gap-md);
    text-align: right;
    
    display: flex;
    gap: var(--joeysvelte-general-gap-sm);
    flex-direction: row;
    justify-content: flex-end;
}

</style>

<script lang="ts">
    import Overlay from "./Overlay.svelte";
    
    export let open: boolean = false;
    
    export let size: "sm" | "md" | "lg" = "sm";
    const sizes = {
        sm: "350px",
        md: "500px",
        lg: "800px"
    };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<Overlay bind:open={open}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        style="max-width:{sizes[size]}"
        class="inner-container"
        on:click|stopPropagation
    >
        <h1><slot name="header"></slot></h1>
        <slot name="body"></slot>
        <div class="footer"><slot name="footer"></slot></div>
    </div>
</Overlay>