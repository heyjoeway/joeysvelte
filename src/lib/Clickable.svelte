<style lang="scss">
    .clickable {
        cursor: pointer;
        transform: scale(100%);
        transition: opacity 0.05s, scale 0.05s;
        transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        word-break: break-all;
        
        &:hover {
            opacity: 100%;
            background-color: var(--joeysvelte-clickable-colors-hover);
        }

        &:active {
            transform: scale(90%);
            opacity: 90%;
            background-color: var(--joeysvelte-clickable-colors-active);
        }
    }

a {
    color: var(--joeysvelte-text-colors-primary);
    text-decoration: none;
}

a:hover {
    color: var(--joeysvelte-text-colors-primary);
}
</style>

<script lang="ts">
    export let width: string = "default";
    export let height: string = "default";
    export let disabled: boolean = false;
    export let onClick: ((event: MouseEvent) => void) | string | undefined = undefined;
    export let onContextMenu: ((event: MouseEvent) => void) | undefined = undefined;
    export let preloadLink = true;
    export let style: string = "";
    export let copyOnClick: string | undefined = undefined;
    
    async function handleClick(event: MouseEvent) {
        if (disabled) return;
        if (typeof onClick === 'function') {
            onClick(event);
            return;
        }
        
        if (!copyOnClick) return;
        if (showCopyConfirmation) {
            showCopyConfirmation = false;
            return;
        }
        await navigator.clipboard.writeText(copyOnClick);
        showCopyConfirmation = true;
        setTimeout(() => { showCopyConfirmation = false; }, 1000);
    }
    
    function handleContextMenu(event: MouseEvent) {
        if (disabled) return;
        if (typeof onContextMenu === 'function') {
            event.preventDefault();
            onContextMenu(event);
        }
    }
    
    let showCopyConfirmation = false;
    
    let elementA: HTMLAnchorElement;
    
    async function onAClick(event: MouseEvent) {
        if (disabled) return;
        if (!copyOnClick) return;
        event.preventDefault();
    }
</script>


{#if typeof onClick === 'string'}
    <a
        bind:this={elementA}
        on:click={onAClick} href={onClick}
        data-sveltekit-reload={!preloadLink}
        data-sveltekit-preload-data={preloadLink ? "hover" : "tap"}
        on:contextmenu={handleContextMenu}
        class="clickable"
        style={style}
        style:width={width}
        style:height={height}
        style:pointer-events={disabled ? 'none' : 'auto'}
        style:opacity={disabled ? '70%' : '100%'}
        style:filter={disabled ? 'grayscale(100%)' : 'none'}
    >
        {#if showCopyConfirmation}
            ✅ Copied!
        {:else}
            <slot></slot>
        {/if}
    </a>
{:else}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="clickable"
        on:click={handleClick}
        on:contextmenu={handleContextMenu}
        style={style}
        style:width={width}
        style:height={height}
        style:pointer-events={disabled ? 'none' : 'auto'}
        style:opacity={disabled ? '70%' : '100%'}
        style:filter={disabled ? 'grayscale(100%)' : 'none'}
    >
        {#if showCopyConfirmation}
            ✅ Copied!
        {:else}
            <slot></slot>
        {/if}
    </div>
{/if}