<style lang="scss">

    div {
        display: flex;
        flex-direction: column;
        
        label {
            margin-left: 12px;
            margin-bottom: 4px;
            user-select: none  ;
        }
        
        textarea {
            width: 100%;
            border: none;
            padding: 10px 12px;
            border-radius: 24px;
            backdrop-filter: blur(32px);
            box-sizing: border-box;
            
            &:focus {
                outline: none;
            }
            
            &::placeholder {
                color: var(--placeholder-color);
                user-select: none;
            }
        }
    }
    
    
    </style>
    
<script lang="ts">
    import { currentTheme } from "./Theming.js";
    import { styleObjToStr } from '$lib/Utils.js';
    
    export let value: string = "";
    export let label: string = "";
    export let name: string = "";
    export let width: string = "100%";
    export let rows = 10;
    export let placeholder: string = "";
    export let autofocus: boolean = false;
    
    export let onInput: (event: Event) => void = () => {};
    export let onKeydown: (event: KeyboardEvent) => void = () => {};
    
    </script>
    
    <div>
        {#if label}
            <label for={name}
                style:color={$currentTheme.text.secondary.color}
            >
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
                "min-width": width,
                "max-width": width,
                "--placeholder-color": $currentTheme.text.secondary.color,
                color: $currentTheme.text.primary.color,
                "background-color": $currentTheme.textfield.background.color
            })}
            bind:value={value}
            on:input={onInput}
            on:keydown={onKeydown}
        ></textarea>
    </div>
    