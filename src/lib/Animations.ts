import {
	quartOut
} from 'svelte/easing';
import { UAParser } from 'ua-parser-js';

const { device } = UAParser();

function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
	return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function blurFall(node: HTMLElement, params?: {
	delay?: number,
	duration?: number,
	rotateStart?: number,
	rotateEnd?: number
}) {
	return {
		delay: params?.delay || 0,
		duration: params?.duration || 500,
		css: (t: number) => {
			let out = `
				opacity: ${t};
			`;
			let tQuart = quartOut(t);
			
			if (device.type !== 'mobile') {
				const rotateStart = params?.rotateStart || 15;
				const rotateEnd = params?.rotateEnd || 0;
				const rotate = mapRange(tQuart, 0, 1, rotateStart, rotateEnd);
				out += `
					scale: ${1 + (1 - tQuart)};
					rotate: z ${rotate}deg;
				`;
			}
			return out;
		}
	};
}

function blurSink(node: HTMLElement, params?: {
	delay?: number,
	duration?: number
}) {
	return {
		delay: params?.delay || 0,
		duration: params?.duration || 500,
		css: (t: number) => {
			let out = `
				opacity: t;
			`;
			if (device.type !== 'mobile') out += `
				scale: ${t};
			`;
			return out;
		}
	};
}

export default { blurFall, blurSink };