<style lang="scss">

div {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    // padding: 4px;
    display: flex;
    align-items: center;
    flex-direction: row;
    
    color: var(--joeysvelte-text-colors-primary);
}

img, span {
    width: 24px;
    height: 24px;
    margin-right: 4px;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 6px;
}

</style>

<script lang="ts">
    import Clickable from "./Clickable.svelte";
        
    export let onClick: ((event: MouseEvent) => void) | string | undefined = undefined;
    export let icon: string = "";
    export let disabled: boolean = false;
    
    let iconIsUrl = icon.length > 3;
</script>

<Clickable
    width='100%' height='24px'
    onClick={onClick}
    disabled={disabled}
>
    <div>
        <!-- svelte-ignore a11y-missing-attribute -->
        {#if iconIsUrl}
            <img src={icon} />
        {:else}
            <span>{@html icon}</span>
        {/if}
        <slot />
    </div>
</Clickable>
    