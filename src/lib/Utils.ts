export function styleObjToStr(obj: Record<string, any>) {
	return Object.entries(obj).map(([k, v]) => `${k}:${v}`).join(';')
}