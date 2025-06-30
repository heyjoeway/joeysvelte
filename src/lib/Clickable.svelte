<style lang="scss">
.clickable {
    cursor: pointer;
    transform: scale(100%);
    transition: opacity 0.1s, scale 0.05s;
    transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-all;
}

.clickable:hover {
    opacity: 100%;
    background-color: rgba(255,255,255,0.1);
}

.clickable:active {
    transform: scale(90%);
    opacity: 90%;
    background-color: rgba(255,255,255,0.05);
}

a {
    color: white;
    text-decoration: none;
}

a:hover {
    color: white;
}
</style>

<script lang="ts">
    export let width: string = "default";
    export let height: string = "default";
    export let onClick: ((event: MouseEvent) => void) | string | undefined = undefined;
    export let onContextMenu: ((event: MouseEvent) => void) | undefined = undefined;
    export let preloadLink = true;
    export let style: string = "";
    export let copyOnClick: string | undefined = undefined;
    
    async function handleClick(event: MouseEvent) {
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
        if (typeof onContextMenu === 'function') {
            event.preventDefault();
            onContextMenu(event);
        }
    }
    
    let showCopyConfirmation = false;
    
    let elementA: HTMLAnchorElement;
    
    async function onAClick(event: MouseEvent) {
        if (!copyOnClick) return;
        event.preventDefault();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="clickable"
    on:click={handleClick}
    on:contextmenu={handleContextMenu}
    style={style}
    style:width={width}
    style:height={height}
>
    {#if typeof onClick === 'string'}
        <a
            bind:this={elementA}
            on:click={onAClick} href={onClick}
            data-sveltekit-reload={!preloadLink}
            data-sveltekit-preload-data={preloadLink ? "hover" : "tap"}
        >
            {#if showCopyConfirmation}
                ✅ Copied!
            {:else}
                <slot></slot>
            {/if}
        </a>
    {:else}
        {#if showCopyConfirmation}
            ✅ Copied!
        {:else}
            <slot></slot>
        {/if}
    {/if}
</div>
