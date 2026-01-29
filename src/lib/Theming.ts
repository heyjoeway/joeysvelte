import { persisted } from 'svelte-persisted-store'
import type { ImageUploadFile } from './ImageUpload.ts';
import { derived, get, readable, writable, type Readable, type Writable } from 'svelte/store';
import { derivedMapsStore } from './Utils.js';

export interface Theme {
    "general.gap.sm": string,
    "general.gap.md": string,
    "general.gap.lg": string,
    "overlay.backgroundColor": string,
    "overlay.blur": string,
    "scrollbar.color": string,
    "text.colors.primary": string,
    "text.colors.secondary": string,
    "blockquote.backgroundColor": string,
    "blockquote.borderColor": string,
    "textfield.backgroundColor": string,
    "textfield.borderColor": string,
    "link.colors.default": string,
    "link.colors.hover": string,
    "bg.backgroundColor": string,
    "bg.backgroundImage": ImageUploadFile,
    "bg.topLeft.text": string,
    "bg.topLeft.color": string,
    "bg.bottomRight.color": string,
    // idk man this is what copilot gave me and i don't see a better way
    "brand.colors": [string, string, string],
    "header.colors": [string, string, string, string, string, string],
    "item.folder.color": string,
    "item.liveStream.colors.checking": string,
    "item.liveStream.colors.online": string,
    "frame.background.color": string,
    "frame.background.blur": string,
    "frame.border.width": string,
    "frame.border.color.default": string,
    "frame.border.color.focus": string,
    "action.colors.confirm": string,
    "action.colors.warning": string,
    "action.colors.danger": string,
    "clickable.colors.hover": string,
    "clickable.colors.active": string,
    "code.colors.primary": string,
    "code.colors.tag": string,
    "code.colors.subst": string,
    "code.colors.strong": string,
    "code.colors.emphasis": string,
    "code.colors.bullet": string,
    "code.colors.quote": string,
    "code.colors.number": string,
    "code.colors.regexp": string,
    "code.colors.literal": string,
    "code.colors.link": string,
    "code.colors.code": string,
    "code.colors.section": string,
    "code.colors.selectorClass": string,
    "code.colors.keyword": string,
    "code.colors.selectorTag": string,
    "code.colors.name": string,
    "code.colors.attr": string,
    "code.colors.symbol": string,
    "code.colors.attribute": string,
    "code.colors.params": string,
    "code.colors.title": string,
    "code.colors.class": string,
    "code.colors.string": string,
    "code.colors.type": string,
    "code.colors.built_in": string,
    "code.colors.selectorId": string,
    "code.colors.selectorAttr": string,
    "code.colors.selectorPseudo": string,
    "code.colors.addition": string,
    "code.colors.variable": string,
    "code.colors.templateVariable": string,
    "code.colors.comment": string,
    "code.colors.deletion": string,
    "code.colors.meta": string,
}

const darkTheme = {
    "general.gap.sm": "8px",
    "general.gap.md": "16px",
    "general.gap.lg": "24px",
    "overlay.backgroundColor": "rgba(0, 0, 0, 0.5)",
    "overlay.blur": "32px",
    "scrollbar.color": "rgba(128, 128, 128, 0.5)",
    "text.colors.primary": "white",
    "text.colors.secondary": "rgba(255, 255, 255, 0.6)",
    "blockquote.backgroundColor": "linear-gradient(to right, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0))",
    "textfield.backgroundColor": "rgba(0, 0, 0, 0.8)",
    "textfield.borderColor": "#303030",
    "bg.backgroundColor": "black",
    "bg.backgroundImage": {} as ImageUploadFile,
    "bg.topLeft.text": "start",
    "bg.topLeft.color": "rgba(128, 128, 128, 0.1)",
    "bg.bottomRight.color": "rgba(128, 128, 128, 0.1)",
    "brand.colors": [
        "palevioletred",
        "orange",
        "skyblue"
    ],
    "header.colors": [
        "palevioletred",
        "orange",
        "yellowgreen",
        "skyblue",
        "orchid",
        "tomato"
    ],
    "link.colors.default": "orange",
    "link.colors.hover": "brown",
    "item.folder.color": "white",
    "item.liveStream.colors.checking": "orange",
    "item.liveStream.colors.online": "red",
    "frame.background.color": "rgba(0, 0, 0, 0.6)",
    "frame.background.blur": "8px",
    "frame.border.width": "1px",
    "frame.border.color.default": "#222",
    "frame.border.color.focus": "orange",
    "action.colors.confirm": "lightgreen",
    "action.colors.warning": "orange",
    "action.colors.danger": "red",
    "clickable.colors.hover": "#ffa50033",
    "clickable.colors.active": "#ffa5001a",
    // Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/
    "code.colors.primary": "white",
    "code.colors.tag": "white",
    "code.colors.subst": "white",
    "code.colors.strong": "white",
    "code.colors.emphasis": "white",
    "code.colors.bullet": "#ae81ff",
    "code.colors.quote": "#ae81ff",
    "code.colors.number": "#ae81ff",
    "code.colors.regexp": "#ae81ff",
    "code.colors.literal": "#ae81ff",
    "code.colors.link": "#ae81ff",
    "code.colors.code": "#a6e22e",
    "code.colors.title": "#a6e22e",
    "code.colors.section": "#a6e22e",
    "code.colors.selectorClass": "#a6e22e",
    "code.colors.keyword": "#f92672",
    "code.colors.selectorTag": "#f92672",
    "code.colors.name": "#f92672",
    "code.colors.attr": "#f92672",
    "code.colors.symbol": "#66d9ef",
    "code.colors.attribute": "#66d9ef",
    "code.colors.params": "white",
    "code.colors.class": "white",
    "code.colors.string": "#e6db74",
    "code.colors.type": "#e6db74",
    "code.colors.built_in": "#e6db74",
    "code.colors.selectorId": "#e6db74",
    "code.colors.selectorAttr": "#e6db74",
    "code.colors.selectorPseudo": "#e6db74",
    "code.colors.addition": "#e6db74",
    "code.colors.variable": "#e6db74",
    "code.colors.templateVariable": "#e6db74",
    "code.colors.comment": "#75715e",
    "code.colors.deletion": "#75715e",
    "code.colors.meta": "#75715e"
} as Theme;

const lightTheme = {
    "general.gap.sm": "8px",
    "general.gap.md": "16px",
    "general.gap.lg": "24px",
    "overlay.backgroundColor": "rgba(255, 255, 255, 0.5)",
    "overlay.blur": "16px",
    "scrollbar.color": "rgba(128, 128, 128, 0.5)",
    "text.colors.primary": "black",
    "text.colors.secondary": "rgba(0, 0, 0, 0.6)",
    "blockquote.backgroundColor": "linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0))",
    "blockquote.borderColor": "#d0d0d0",
    "textfield.backgroundColor": "rgba(255, 255, 255, 0.8)",
    "textfield.borderColor": "#d0d0d0",
    "link.colors.default": "#f46400",
    "link.colors.hover": "brown",
    "bg.backgroundColor": "white",
    "bg.backgroundImage": {} as ImageUploadFile,
    "bg.topLeft.text": "start",
    "bg.topLeft.color": "rgba(128, 128, 128, 0.05)",
    "bg.bottomRight.color": "rgba(128, 128, 128, 0.05)",
    "brand.colors": [
        "#ff568c",
        "#f8a000",
        "#4b6bcb",
    ],
    "header.colors": [
        "#ff568c",
        "#f8a000",
        "#00863b",
        "#4b6bcb",
        "#cc0e9c",
        "#ce2929",
    ],
    "item.folder.color": "black",
    "item.liveStream.colors.checking": "orange",
    "item.liveStream.colors.online": "red",
    "frame.background.color": "rgba(255, 255, 255, 0.6)",
    "frame.background.blur": "8px",
    "frame.border.width": "1px",
    "frame.border.color.default": "#ccc",
    "frame.border.color.focus": "orange",
    "action.colors.confirm": "green",
    "action.colors.warning": "orange",
    "action.colors.danger": "red",
    "clickable.colors.hover": "#ffa50054",
    "clickable.colors.active": "#c882006e",
    "code.colors.primary": "black",
    "code.colors.tag": "black",
    "code.colors.subst": "black",
    "code.colors.strong": "black",
    "code.colors.emphasis": "black",
    "code.colors.bullet": "#5900ff",
    "code.colors.quote": "#5900ff",
    "code.colors.number": "#5900ff",
    "code.colors.regexp": "#5900ff",
    "code.colors.literal": "#5900ff",
    "code.colors.link": "#5900ff",
    "code.colors.code": "#537d00",
    "code.colors.title": "#537d00",
    "code.colors.section": "#537d00",
    "code.colors.selectorClass": "#537d00",
    "code.colors.keyword": "#b10041",
    "code.colors.selectorTag": "#b10041",
    "code.colors.name": "#b10041",
    "code.colors.attr": "#b10041",
    "code.colors.symbol": "#007a92",
    "code.colors.attribute": "#007a92",
    "code.colors.params": "black",
    "code.colors.class": "black",
    "code.colors.string": "#a56100",
    "code.colors.type": "#a56100",
    "code.colors.built_in": "#a56100",
    "code.colors.selectorId": "#a56100",
    "code.colors.selectorAttr": "#a56100",
    "code.colors.selectorPseudo": "#a56100",
    "code.colors.addition": "#a56100",
    "code.colors.variable": "#a56100",
    "code.colors.templateVariable": "#a56100",
    "code.colors.comment": "#6f6f6f",
    "code.colors.deletion": "#6f6f6f",
    "code.colors.meta": "#aaaaaa"
} as Theme;

export let currentThemeKey = persisted("currentTheme", "Dark");

export let savedThemesStore = persisted<Record<string, Theme>>("savedThemes", {});
export let bundledThemesStore: Writable<Record<string, Theme>> = writable({
    "Dark": darkTheme,
    "Light": lightTheme
});

export let currentThemeStore = derivedMapsStore(
    currentThemeKey,
    [savedThemesStore, bundledThemesStore],
    "Dark"
);

export function getThemeStore(
    theme?: string
) {
    if (!theme) return currentThemeStore;
    return derivedMapsStore(
        readable(theme),
        [savedThemesStore, bundledThemesStore],
        "Dark"
    );
}

export function getPropStore<
    K extends keyof Theme
>(
    key: K,
    theme?: string
) {
    let themeStore = getThemeStore(theme);
    const { subscribe } = derived(
        themeStore,
        ($theme) => {
            if ($theme) return $theme[key];
            return undefined;
        }
    );

    return {
        subscribe,
        set: (value: Theme[K]) => {
            themeStore.update(t => {
                if (!t) return t;
                t[key] = value as Theme[K];
                return t;
            });
        },
        update: (updater: (v: Theme[K]) => Theme[K]) => {
            themeStore.update(t => {
                if (!t) return t;
                t[key] = updater(t[key]);
                return t;
            });
        }
    };
}

export function getCssVar(key: keyof Theme) {
    return `var(--joeysvelte-${key.replace(/\./g, '-')})`;
}

export function themeToCssVars(theme: Theme, prefix: string = "--joeysvelte") {
    let cssVars: Record<string, string> = {};
    for (let [k, v] of Object.entries(theme)) {
        cssVars[`${prefix}-${k.replace(/\./g, '-')}`] = typeof v === 'string' ? v : '';
    }
    return cssVars;
}