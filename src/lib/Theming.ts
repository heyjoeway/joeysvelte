import { persisted } from 'svelte-persisted-store'
import type { ImageUploadFile } from './ImageUpload.ts';

export interface Theme {
    general: {
        gap: {
            sm: string,
            md: string,
            lg: string
        }
    },
    overlay: {
        backgroundColor: string,
        blur: string
    },
    scrollbar: {
        color: string
    },
    text: {
        colors: {
            primary: string,
            secondary: string
        }
    },
    blockquote: {
        backgroundColor: string,
        borderColor: string
    },
    textfield: {
        backgroundColor: string,
        borderColor: string
    },
    link: {
        colors: {
            default: string,
            hover: string
        }   
    },
    bg: {
        backgroundColor: string,
        backgroundImage: ImageUploadFile,
        topLeft: {
            text: string,
            color: string
        },
        bottomRight: {
            color: string
        }
    },
    brand: {
        // idk man this is what copilot gave me and i don't see a better way
        colors: [string, string, string]
    },
    header: {
        colors: [string, string, string, string, string, string]
    },
    item: {
        folder: {
            color: string
        },
        liveStream: {
            colors: {
                checking: string,
                online: string
            }
        }
    },
    frame: {
        background: {
            color: string,
            blur: string
        },
        border: {
            width: string,
            color: {
                default: string,
                focus: string
            }
        }
    },
    action: {
        colors: {
            confirm: string,
            warning: string,
            danger: string
        }
    },
    clickable: {
        colors: {
            hover: string,
            active: string
        }
    },
    code: {
        colors: {
            primary: string,
            tag: string,
            subst: string,
            strong: string,
            emphasis: string,
            bullet: string,
            quote: string,
            number: string,
            regexp: string,
            literal: string,
            link: string,
            code: string,
            section: string,
            selectorClass: string,
            keyword: string,
            selectorTag: string,
            name: string,
            attr: string,
            symbol: string,
            attribute: string,
            params: string,
            title: string,
            class: string,
            string: string,
            type: string,
            built_in: string,
            selectorId: string,
            selectorAttr: string,
            selectorPseudo: string,
            addition: string,
            variable: string,
            templateVariable: string,
            comment: string,
            deletion: string,
            meta: string,
        }
    }
}

const darkTheme = {
    general: {
        gap: {
            sm: "8px",
            md: "16px",
            lg: "24px"
        }
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        blur: "32px"
    },
    scrollbar: {
        color: "rgba(128, 128, 128, 0.5)"
    },
    text: {
        colors: {
            primary: "white",
            secondary: "rgba(255, 255, 255, 0.6)",
        }
    },
    blockquote: {
        backgroundColor: "linear-gradient(to right, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0))",
    },
    textfield: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#303030"
    },
    bg: {
        backgroundColor: "black",
        backgroundImage: {} as ImageUploadFile,
        topLeft: {
            text: "start",
            color: "rgba(128, 128, 128, 0.1)"
        },
        bottomRight: {
            color: "rgba(128, 128, 128, 0.1)"   
        }
    },
    brand: {
        colors: [
            "palevioletred",
            "orange",
            "skyblue"
        ]
    },
    header: {
        colors: [
            "palevioletred",
            "orange",
            "yellowgreen",
            "skyblue",
            "orchid",
            "tomato"
        ]
    },
    link: {
        colors: {
            default: "orange",
            hover: "brown"
        }   
    },
    item: {
        folder: {
            color: "white"
        },
        liveStream: {
            colors: {
                checking: "orange",
                online: "red"
            }
        }
    },
    frame: {
        background: {
            color: "rgba(0, 0, 0, 0.8)",
            blur: "8px"
        },
        border: {
            width: "1px",
            color: {
                default: "#222",
                focus: "orange"
            }
        }
    },
    action: {
        colors: {
            confirm: "lightgreen",
            warning: "orange",
            danger: "red"
        }
    },
    clickable: {
        colors: {
            hover: "#ffa50054",
            active: "#ffa50030",
        }
    },
    code: {
        // Monokai Sublime style. Derived from Monokai by noformnocontent http://nn.mit-license.org/
        colors: {
            primary: "white",
            tag: "white",
            subst: "white",
            strong: "white",
            emphasis: "white",
            bullet: "#ae81ff",
            quote: "#ae81ff",
            number: "#ae81ff",
            regexp: "#ae81ff",
            literal: "#ae81ff",
            link: "#ae81ff",
            code: "#a6e22e",
            title: "#a6e22e",
            section: "#a6e22e",
            selectorClass: "#a6e22e",
            keyword: "#f92672",
            selectorTag: "#f92672",
            name: "#f92672",
            attr: "#f92672",
            symbol: "#66d9ef",
            attribute: "#66d9ef",
            params: "white",
            class: "white",
            string: "#e6db74",
            type: "#e6db74",
            built_in: "#e6db74",
            selectorId: "#e6db74",
            selectorAttr: "#e6db74",
            selectorPseudo: "#e6db74",
            addition: "#e6db74",
            variable: "#e6db74",
            templateVariable: "#e6db74",
            comment: "#75715e",
            deletion: "#75715e",
            meta: "#75715e"
        }
    }
} as Theme;

const lightTheme = {
    general: {
        gap: {
            sm: "8px",
            md: "16px",
            lg: "24px"
        }
    },
    overlay: {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        blur: "16px"
    },
    scrollbar: {
        color: "rgba(128, 128, 128, 0.5)"
    },
    text: {
        colors: {
            primary: "black",
            secondary: "rgba(0, 0, 0, 0.6)",
        }
    },
    blockquote: {
        backgroundColor: "linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0))",
        borderColor: "#d0d0d0"
    },
    textfield: {
        backgroundColor: "rgba(128, 128, 128, 0.05)",
        borderColor: "#d0d0d0"
    },
    link: {
        colors: {
            default: "#f46400",
            hover: "brown"
        }   
    },
    bg: {
        backgroundColor: "white",
        backgroundImage: {} as ImageUploadFile,
        topLeft: {
            text: "start",
            color: "rgba(128, 128, 128, 0.05)"
        },
        bottomRight: {
            color: "rgba(128, 128, 128, 0.05)"   
        }
    },
    brand: {
        colors: [
            "#ff568c",
		    "#f8a000",
		    "#4b6bcb",
        ]
    },
    header: {
        colors: [
		    "#ff568c",
		    "#f8a000",
		    "#00863b",
		    "#4b6bcb",
		    "#cc0e9c",
		    "#ce2929",
        ]
    },
    item: {
        folder: {
            color: "black"
        },
        liveStream: {
            colors: {
                checking: "orange",
                online: "red"
            }
        }
    },
    frame: {
        background: {
            color: "rgba(255, 255, 255, 0.6)",
            blur: "8px"
        },
        border: {
            width: "1px",
            color: {
                default: "#ccc",
                focus: "orange"
            }
        }
    },
    action: {
        colors: {
            confirm: "green",
            warning: "orange",
            danger: "red"
        }
    },
    clickable: {
        colors: {
            hover: "#ffa50054",
            active: "#c882006e",
        }
    },
    code: {
        colors: {
            primary: "black",
            tag: "black",
            subst: "black",
            strong: "black",
            emphasis: "black",
            bullet: "#5900ff",
            quote: "#5900ff",
            number: "#5900ff",
            regexp: "#5900ff",
            literal: "#5900ff",
            link: "#5900ff",
            code: "#537d00",
            title: "#537d00",
            section: "#537d00",
            selectorClass: "#537d00",
            keyword: "#b10041",
            selectorTag: "#b10041",
            name: "#b10041",
            attr: "#b10041",
            symbol: "#007a92",
            attribute: "#007a92",
            params: "black",
            class: "black",
            string: "#a56100",
            type: "#a56100",
            built_in: "#a56100",
            selectorId: "#a56100",
            selectorAttr: "#a56100",
            selectorPseudo: "#a56100",
            addition: "#a56100",
            variable: "#a56100",
            templateVariable: "#a56100",
            comment: "#6f6f6f",
            deletion: "#6f6f6f",
            meta: "#aaaaaa"
        }
    }
} as Theme;

export let currentTheme = persisted('theme.1', darkTheme as Theme);
export let bundledThemes: Record<string, Theme> = {
    "Dark": darkTheme,
    "Light": lightTheme
};
export let savedThemes = persisted('themes.1', {} as Record<string, Theme>);