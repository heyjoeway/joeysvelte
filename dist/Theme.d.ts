/// <reference types="svelte" />
declare let currentTheme: import("svelte/store").Writable<any>;
export default currentTheme;
export declare let bundledThemes: {
    [key: string]: any;
};
export declare let savedThemes: import("svelte/store").Writable<any>;
