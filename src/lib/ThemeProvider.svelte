<script lang="ts">
	// Supports weights 100-700
	import '@fontsource-variable/ibm-plex-sans';
	
	import { getThemeStore, themeToCssVars } from "./Theming.js";
	import { styleObjToStr } from './Utils.js';
    import { derived } from 'svelte/store';
	
	export let theme: string = "";
	let themeStore = getThemeStore(theme);
	let styleStr = derived(
		themeStore,
		($themeStore) => {
			if (!$themeStore) return "";
			return styleObjToStr(themeToCssVars($themeStore))
		}
	);
</script>

<span style={
	"display: contents;"
	+ $styleStr
}>
	<slot></slot>
</span>

<style lang="scss">
	// ==================================================================
	// # Core rules
	
	@for $i from 1 through 6 {
		:global(h#{$i}) {
			display: table;
			font-family: "franklin_gothicregular", sans-serif;
			font-weight: 400;
			margin-top: 16px;
			margin-bottom: 8px;
			line-height: 1em;
		}
	}
	
	span {
		font: 400 16px/1.5 'IBM Plex Sans Variable',sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" !important;
		line-height: 1.7;
		font-weight: 500;
	}
	
	:global(a) {
		text-decoration: none;
	}
	
	:global(h1) {
		padding-top: 16px;
		font-size: 42px;
		letter-spacing: -1px;
		line-height: 1;
	}
	
	:global(h2) {
		font-size: 28px;
	}
	
	@media screen and (max-width: 800px) {
		:global(h1) {
			font-size: 36px;
		}
		
		:global(h2) {
			font-size: 22px;
		}
	}
	
	:global(li) {
		margin-bottom: 8px;
	}
	
	:global(pre) {
		overflow: auto;
	}
	
	:global(p),
	:global(blockquote),
	:global(pre),
	:global(dl),
	:global(figure) {
	margin-bottom: 16px;
}

	:global(ul),
	:global(ol),
	:global(hr) {
		margin-top: 8px;
		margin-bottom: 8px;
	}

	:global(hr) {
		border: none;
		// These colors work well in both light and dark mode
		// So I'm not separating them out (yet)
		border-bottom: rgba(128, 128, 128, 0.25) solid 1px;
		border-top: rgba(128, 128, 128, 0.25) solid 1px;
		border-radius: 256px;
	}
	
	:global(ul),
	:global(ol) {
		padding-left: 24px;
	}
	
	:global(td:first-child), :global(th:first-child) {
		padding-left: 8px;
	}
	:global(td:last-child), :global(th:last-child) {
		padding-right: 8px;
	}
	
	:global(code > span) {
		display: inline-block;
		min-width: 100%;
		padding-right: 32px;
		padding-left: 8px;
	}
	
	:global(th) {
		text-align: left;
		font-size: 16px;
		font-weight: bold;
		line-height: 1em;
	}
	
	:global(blockquote) {
		position:relative;
		padding: 12px 16px;
		background-size: 100% 100%;
	}
	
	:global(pre), :global(table) {
		border-width: 1px;
		border-style: solid;
		backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
		-webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
		margin: 16px 0;
		padding-top: 8px;
		padding-bottom: 8px;
	}
	
	:global(table) {
		font-family: monospace;
		font-size: 14px;
		width: 100%;
		overflow: auto;
		margin-top: 8px;
		margin-bottom: 8px;
	}
	
	:global(thead) {
		padding-bottom: 8px;
	}
	
	:global(code), :global(pre), :global(textarea), :global(table),
	:global(input[type="text"]), :global(input[type="search"]),
	:global(input[type="url"]), :global(input[type="tel"]),
	:global(input[type="email"]) {
		font-family: 'terminus_ttf', monospace;
		// font-weight: bold;
		direction: ltr;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		line-height: 1.25;
		font-size: 18px;
		font-smooth: never;
		-webkit-font-smoothing: none;
		-moz-font-smoothing: none;
		-ms-font-smoothing: none;

		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;

		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}
	
	// ==================================================================
	
	
	// ==================================================================
	// # Colors	
	
	span {
		color: var(--joeysvelte-text-colors-primary);
		scrollbar-color: var(--joeysvelte-scrollbar-color) transparent;
	}
	
	:global(a) {
		transition: color 0.1s;
		color: var(--joeysvelte-link-colors-default);
		
		&:hover {
			color: var(--joeysvelte-link-colors-hover);
		}
	}
	
	:global(blockquote) {
		border-left: 2px solid var(--joeysvelte-blockquote-borderColor);
		background: var(--joeysvelte-blockquote-backgroundColor);
	}
	
	:global(pre), :global(table) {
		border-color: var(--joeysvelte-frame-border-color-default);
		background: var(--joeysvelte-frame-background-color);
	}
	
	:global(thead) {
		border-bottom: 1px solid #222;
	}
	
	:global(code), :global(pre), :global(textarea), :global(table) {
		color: var(--joeysvelte-code-colors-primary);
	}
		
	:global(tr:nth-child(even)), :global(code > span:nth-child(even)) {
		background: rgba(255, 255, 255, 0.025);
	}
	
	:global(.hljs-primary)           { color: var(--joeysvelte-code-colors-primary);          }
	:global(.hljs-tag)               { color: var(--joeysvelte-code-colors-tag);              }
	:global(.hljs-subst)             { color: var(--joeysvelte-code-colors-subst);            }
	:global(.hljs-bullet)            { color: var(--joeysvelte-code-colors-bullet);           }
	:global(.hljs-quote)             { color: var(--joeysvelte-code-colors-quote);            }
	:global(.hljs-number)            { color: var(--joeysvelte-code-colors-number);           }
	:global(.hljs-regexp)            { color: var(--joeysvelte-code-colors-regexp);           }
	:global(.hljs-literal)           { color: var(--joeysvelte-code-colors-literal);          }
	:global(.hljs-link)              { color: var(--joeysvelte-code-colors-link);             }
	:global(.hljs-code)              { color: var(--joeysvelte-code-colors-code);             }
	:global(.hljs-title)             { color: var(--joeysvelte-code-colors-title);            }
	:global(.hljs-section)           { color: var(--joeysvelte-code-colors-section);          }
	:global(.hljs-selector-class)    { color: var(--joeysvelte-code-colors-selectorClass);    }
	:global(.hljs-keyword)           { color: var(--joeysvelte-code-colors-keyword);          }
	:global(.hljs-selector-tag)      { color: var(--joeysvelte-code-colors-selectorTag);      }
	:global(.hljs-name)              { color: var(--joeysvelte-code-colors-name);             }
	:global(.hljs-attr)              { color: var(--joeysvelte-code-colors-attr);             }
	:global(.hljs-symbol)            { color: var(--joeysvelte-code-colors-symbol);           }
	:global(.hljs-attribute)         { color: var(--joeysvelte-code-colors-attribute);        }
	:global(.hljs-params)            { color: var(--joeysvelte-code-colors-params);           }
	:global(.hljs-class)             { color: var(--joeysvelte-code-colors-class);            }
	:global(.hljs-string)            { color: var(--joeysvelte-code-colors-string);           }
	:global(.hljs-type)              { color: var(--joeysvelte-code-colors-type);             }
	:global(.hljs-built_in)          { color: var(--joeysvelte-code-colors-built_in);         }
	:global(.hljs-selector-id)       { color: var(--joeysvelte-code-colors-selectorId);       }
	:global(.hljs-selector-attr)     { color: var(--joeysvelte-code-colors-selectorAttr);     }
	:global(.hljs-selector-pseudo)   { color: var(--joeysvelte-code-colors-selectorPseudo);   }
	:global(.hljs-addition)          { color: var(--joeysvelte-code-colors-addition);         }
	:global(.hljs-variable)          { color: var(--joeysvelte-code-colors-variable);         }
	:global(.hljs-template-variable) { color: var(--joeysvelte-code-colors-templateVariable); }
	:global(.hljs-comment)           { color: var(--joeysvelte-code-colors-comment);          }
	:global(.hljs-deletion)          { color: var(--joeysvelte-code-colors-deletion);         }
	:global(.hljs-meta)              { color: var(--joeysvelte-code-colors-meta);             }
	
	// ==================================================================
	
	
	// ==================================================================
	// # Header colors

	$header-colors-length: 5;
	
	@for $i from 1 through $header-colors-length * 2 {
		:global(.h1-#{$i}) {
			background: linear-gradient(
				45deg,
				var(--joeysvelte-header-colors-#{
					mod($i - 1, $header-colors-length)
					+ 1
				}),
				var(--joeysvelte-header-colors-#{
					mod($i, $header-colors-length)
					+ 1
				})
			);
			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
			filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.15));
		}
	}

	@for $i from 1 through $header-colors-length * 2 {
		:global(.h2-#{$i}) {
			color: var(--joeysvelte-header-colors-#{
				mod($i - 1, $header-colors-length)
				+ 1
			});
			filter: drop-shadow(0 0.75px 0.75px rgba(0, 0, 0, 0.3));
		}
	}

	// ==================================================================
	// For printing
	
	@media print {
		span {
			--joeysvelte-overlay-backgroundColor: rgba(255, 255, 255, 0.5) !important;
			--joeysvelte-scrollbar-color: rgba(128, 128, 128, 0.5) !important;
			--joeysvelte-text-colors-primary: black !important;
			--joeysvelte-text-colors-secondary: rgba(0, 0, 0, 0.6) !important;
			--joeysvelte-blockquote-backgroundColor: linear-gradient(to right, rgba(0, 0, 0, ;08), rgba(0, 0, 0, 0)) !important;
			--joeysvelte-blockquote-borderColor: #d0d0d0 !important;
			--joeysvelte-textfield-backgroundColor: rgba(128, 128, 128, 0.05) !important;
			--joeysvelte-textfield-borderColor: #d0d0d0 !important;
			--joeysvelte-link-colors-default: #f46400 !important;
			--joeysvelte-link-colors-hover: brown !important;
			--joeysvelte-bg-backgroundColor: white !important;
			--joeysvelte-bg-topLeft-text: "" !important;
			--joeysvelte-bg-topLeft-color: rgba(128, 128, 128, 0.05) !important;
			--joeysvelte-bg-bottomRight-color: rgba(128, 128, 128, 0.05) !important;
			--joeysvelte-brand-colors-1: #ff568c !important;
			--joeysvelte-brand-colors-2: #f8a000 !important;
			--joeysvelte-brand-colors-3: #4b6bcb !important;
			--joeysvelte-header-colors-1: #ff568c !important;
			--joeysvelte-header-colors-2: #f8a000 !important;
			--joeysvelte-header-colors-3: #00863b !important;
			--joeysvelte-header-colors-4: #4b6bcb !important;
			--joeysvelte-header-colors-5: #cc0e9c !important;
			--joeysvelte-header-colors-6: #ce2929 !important;
			--joeysvelte-item-folder-color: black !important;
			--joeysvelte-item-liveStream-colors-checking: orange !important;
			--joeysvelte-item-liveStream-colors-online: red !important;
			--joeysvelte-frame-background-color: rgba(255, 255, 255, 0.6) !important;
			--joeysvelte-frame-background-blur: 8px !important;
			--joeysvelte-frame-border-width: 1px !important;
			--joeysvelte-frame-border-color-default: #ccc !important;
			--joeysvelte-frame-border-color-focus: orange !important;
			--joeysvelte-action-colors-confirm: green !important;
			--joeysvelte-action-colors-warning: orange !important;
			--joeysvelte-action-colors-danger: red !important;
			--joeysvelte-clickable-colors-hover: #ffa50054 !important;
			--joeysvelte-clickable-colors-active: #c882006e !important;
			--joeysvelte-code-colors-primary: black !important;
			--joeysvelte-code-colors-tag: black !important;
			--joeysvelte-code-colors-subst: black !important;
			--joeysvelte-code-colors-strong: black !important;
			--joeysvelte-code-colors-emphasis: black !important;
			--joeysvelte-code-colors-bullet: #5900ff !important;
			--joeysvelte-code-colors-quote: #5900ff !important;
			--joeysvelte-code-colors-number: #5900ff !important;
			--joeysvelte-code-colors-regexp: #5900ff !important;
			--joeysvelte-code-colors-literal: #5900ff !important;
			--joeysvelte-code-colors-link: #5900ff !important;
			--joeysvelte-code-colors-code: #537d00 !important;
			--joeysvelte-code-colors-title: #537d00 !important;
			--joeysvelte-code-colors-section: #537d00 !important;
			--joeysvelte-code-colors-selectorClass: #537d00 !important;
			--joeysvelte-code-colors-keyword: #b10041 !important;
			--joeysvelte-code-colors-selectorTag: #b10041 !important;
			--joeysvelte-code-colors-name: #b10041 !important;
			--joeysvelte-code-colors-attr: #b10041 !important;
			--joeysvelte-code-colors-symbol: #007a92 !important;
			--joeysvelte-code-colors-attribute: #007a92 !important;
			--joeysvelte-code-colors-params: black !important;
			--joeysvelte-code-colors-class: black !important;
			--joeysvelte-code-colors-string: #a56100 !important;
			--joeysvelte-code-colors-type: #a56100 !important;
			--joeysvelte-code-colors-built_in: #a56100 !important;
			--joeysvelte-code-colors-selectorId: #a56100 !important;
			--joeysvelte-code-colors-selectorAttr: #a56100 !important;
			--joeysvelte-code-colors-selectorPseudo: #a56100 !important;
			--joeysvelte-code-colors-addition: #a56100 !important;
			--joeysvelte-code-colors-variable: #a56100 !important;
			--joeysvelte-code-colors-templateVariable: #a56100 !important;
			--joeysvelte-code-colors-comment: #6f6f6f !important;
			--joeysvelte-code-colors-deletion: #6f6f6f !important;
			--joeysvelte-code-colors-meta: #aaaaaa !important;
		}
		
		@page {
			background: white;
		}
		
		:global(html), :global(body) {
			background-color: white;
			print-color-adjust: exact !important;
			-webkit-print-color-adjust: exact !important;
		}
		
		:global(li) {
			margin-bottom: 8px;
		}
		
		span {
			line-height: 1.25;
		}
		
		@for $i from 1 through 6 {
			:global(h#{$i}) {
				margin-top: 8px;
				margin-bottom: 0px;
				line-height: 1em;
			}
		}
		
		:global(h1) {
			padding-top: 8px;
			font-size: 34px !important;
			letter-spacing: -1px;
			line-height: 1;
		}

		:global(h2) {
			font-size: 24px;
		}
	}
</style>