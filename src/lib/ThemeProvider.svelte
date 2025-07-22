<script lang="ts">
	import { currentTheme } from "./Theming.js";
	import { styleObjToStr } from '$lib/Utils.js';
	
	// Recursively for each item in $currentTheme, convert the object to a string
	// For example $currentTheme.text.primary.color becomes --joeysvelte-text-colors-primary
	function themeToStyleObj(theme: any, prefix: string = 'joeysvelte'): Record<string, string> {
		const styleObj: Record<string, string> = {};
		for (const key in theme) {
			if (Array.isArray(theme[key])) {
				for (let index = 0; index < theme[key].length; index++) {
					const val = theme[key][index];
					styleObj[`--${prefix}-${key}-${index + 1}`] = val;
				}
			} else if (typeof theme[key] === 'object' && theme[key] !== null) {
				Object.assign(styleObj, themeToStyleObj(theme[key], `${prefix}-${key}`));
			} else {
				styleObj[`--${prefix}-${key}`] = theme[key];
			}
		}
		return styleObj;
	}
</script>

<span style={
	"display: contents;"
	+ styleObjToStr(
		themeToStyleObj($currentTheme)
	)
}>
	<slot></slot>
</span>

<style lang="scss">
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
	
	@for $i from 1 through 6 {
		:global(h#{$i}) {
			// Display similar to inline-block, but have width fit to content
			display: table;
		}
	}
	
	:global(blockquote) {
		position:relative;
		padding: 12px 16px;
		border-left: 2px solid var(--joeysvelte-blockquote-borderColor);
		background: var(--joeysvelte-blockquote-backgroundColor);
		background-size: 100% 100%;
	}
	
	:global(pre), :global(table) {
		border-width: 1px;
		border-color: var(--joeysvelte-frame-border-color-default);
		border-style: solid;
		background: var(--joeysvelte-frame-background-color);
		backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
		-webkit-backdrop-filter: blur(var(--joeysvelte-frame-background-blur));
		margin: 16px 0;
		padding-top: 8px;
		padding-bottom: 8px;	
	}
		
	:global(code), :global(pre), :global(textarea), :global(table) {
		color: var(--joeysvelte-code-colors-primary);
		font-family: 'terminus_ttf', monospace;
		font-weight: bold;
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
	
	:global(code > span) {
		display: inline-block;
		min-width: 100%;
		padding-right: 32px;
		padding-left: 8px;
	}
	
	:global(td:first-child), :global(th:first-child) {
		padding-left: 8px;
	}
	:global(td:last-child), :global(th:last-child) {
		padding-right: 8px;
	}
	
	:global(tr:nth-child(even)), :global(code > span:nth-child(even)) {
		background: rgba(255, 255, 255, 0.025);
	}

	
	:global(a) {
		transition: color 0.1s;
		scale: 100%;
		color: var(--joeysvelte-link-colors-default);
		text-decoration: none;
		
		&:hover {
			color: var(--joeysvelte-link-colors-hover);
		}
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
	
	span {
		font: 400 16px/1.5 'IBM Plex Sans Variable',sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
		color: var(--joeysvelte-text-colors-primary);
		line-height: 1.7;
		font-weight: 500;
		scrollbar-color: var(--joeysvelte-scrollbar-color) transparent;
	}
</style>