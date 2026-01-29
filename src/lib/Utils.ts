import { derived, get, type Readable, type Writable } from 'svelte/store';

export function styleObjToStr(obj: Record<string, any>) {
    let out = Object.entries(obj).map(([k, v]) => `${k}:${v}`).join(';');
    return out;
}

// Returns a writable store of maps[i][keyStore], with i starting at 0.
// If maps[i][keyStore] is undefined, returns maps[i][defaultKey]
// If maps[i][defaultKey] is also undefined, move to next index and retry.
// If all maps are exhausted, returns undefined.
// The returned store is writable and will update the value in the map it came from.
// It will also trigger an update on that map.
export function derivedMapsStore<
    C,
    K extends string | number | symbol
>(
    keyStore: Readable<K>,
    maps: Array<Writable<Record<K, C | undefined>>>,
    defaultKey: K
): Writable<C | undefined> {
    return {
        subscribe(run) {
            return derived(
                [keyStore, ...maps],
                ([$key, ...$maps]) => {
                    for (let map of $maps) {
                        if ($key in map) return map[$key];
                        if (defaultKey in map) return map[defaultKey];
                    }
                    return undefined;
                }
            ).subscribe(run);
        },
        set(value: C | undefined) {
            const key = get(keyStore);
            for (let map of maps) {
                if (key in get(map)) {
                    map.update(m => {
                        m[key] = value;
                        return m;
                    });
                    return;
                }
                if (defaultKey in get(map)) {
                    map.update(m => {
                        m[defaultKey] = value;
                        return m;
                    });
                    return;
                }
            }
        },
        update(updater: (value: C | undefined) => C | undefined) {
            const key = get(keyStore);
            for (let map of maps) {
                if (key in get(map)) {
                    map.update(m => {
                        m[key] = updater(m[key]);
                        return m;
                    });
                    return;
                }
                if (defaultKey in get(map)) {
                    map.update(m => {
                        m[defaultKey] = updater(m[defaultKey]);
                        return m;
                    });
                    return;
                }
            }
        }
    };
}


export function rgba2rgb(rgba: string) {
    let [r, g, b] = rgba.replace("rgba(", "").replace(")", "").split(",").map((x) => parseInt(x));
    return `rgb(${r}, ${g}, ${b})`;
}
