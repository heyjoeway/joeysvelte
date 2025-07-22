<style lang="scss">
span :global(.clickable) {
    border: var(--joeysvelte-frame-border-width) solid var(--joeysvelte-frame-border-color-default);
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
    backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
    -webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
    height: 100%;
    color: var(--joeysvelte-text-colors-primary);
    background-color: var(--joeysvelte-frame-background-color);
    // line-height: 100%;
}

span.not-link :global(.clickable) {
    padding: 0 var(--joeysvelte-general-gap-md);
}

span.link :global(a) {
    padding: 0 var(--joeysvelte-general-gap-md);
}

img {
    width: 24px;
    height: 24px;
    margin-right: var(--joeysvelte-general-gap-sm);
    user-select: none;
}
img:not([src]) {
    visibility: hidden;
}

</style>

<script lang="ts">
    import Clickable from "./Clickable.svelte";
    
    export let onClick: ((event: MouseEvent) => void) | string | undefined = undefined;
    export let preloadLink = true;
    export let copyOnClick: string | undefined = undefined;
    export let iconSrc: string = "";
    export let height = "32px";
    
    export let color: string | null = null;
    
    const isLink = typeof onClick === 'string';
</script>

<span class={isLink ? "link" : "not-link"}>
    <Clickable
        height={height}
        onClick={onClick}
        copyOnClick={copyOnClick}
        preloadLink={preloadLink}
        style="color:{color}"
    >
        <!-- svelte-ignore a11y-missing-attribute -->
        {#if iconSrc}
            <img src={iconSrc} />
        {/if}
        <slot />
    </Clickable>
</span>