<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        
        margin-bottom: var(--joeysvelte-general-gap-sm);
        
        label {
            margin-left: 12px;
            margin-bottom: 4px;
            user-select: none;
            color: var(--joeysvelte-text-colors-secondary);
        }
        
        textarea {
            width: 100%;
            border: none;
            padding: 10px 12px;
            border-radius: 16px;
            box-sizing: border-box;
            
            border-width: var(--joeysvelte-frame-border-width);
            border-color: var(--joeysvelte-frame-border-color-default);
            border-style: solid;
            backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
            -webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
                        
            --placeholder-color: var(--joeysvelte-text-colors-secondary);
            color: var(--joeysvelte-text-colors-primary);
            background-color: var(--joeysvelte-textfield-backgroundColor);
            
            &:focus {
                outline: none;
                border-color: var(--joeysvelte-frame-border-color-focus);
            }
            
            &::placeholder {
                color: var(--placeholder-color);
                user-select: none;
            }
        }
    }
    
    
    </style>
    
<script lang="ts">
    import { styleObjToStr } from '$lib/Utils.js';
    
    export let value: string = "";
    export let label: string = "";
    export let name: string = "";
    export let width: string = "100%";
    export let height: string = "300px";
    export let rows = 10;
    export let placeholder: string = "";
    export let autofocus: boolean = false;
    
    export let onInput: (event: Event) => void = () => {};
    export let onKeydown: (event: KeyboardEvent) => void = () => {};
    export let wrap: boolean = true;
</script>
    <div>
        {#if label}
            <label for={name}>
                {label}
            </label>
        {/if}
        <!-- svelte-ignore a11y-autofocus -->
        <textarea
            name={name}
            placeholder={placeholder}
            autofocus={autofocus}
            rows={rows}
            style={styleObjToStr({
                width: width,
                height: height,
                "min-width": width,
                "max-width": width,
                "text-wrap": wrap ? "wrap" : "nowrap"
            })}
            bind:value={value}
            on:input={onInput}
            on:keydown={onKeydown}
        ></textarea>
    </div>
    