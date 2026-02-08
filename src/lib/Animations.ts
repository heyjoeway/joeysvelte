import {
	quartOut
} from 'svelte/easing';
import { UAParser } from 'ua-parser-js';

const { device } = UAParser();

function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
	return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

export function shift(node: HTMLElement, params?: {
	delay?: number,
	duration?: number,
	direction?: 'up' | 'down' | 'left' | 'right',
	distance?: number
}) {
	const direction = params?.direction || 'down';
	const distance = params?.distance || 20;
	return {
		delay: params?.delay || 0,
		duration: params?.duration || 100,
		css: (t: number) => {
			let out = `
				opacity: ${t};
				transform: translate${direction === 'up' || direction === 'down' ? 'Y' : 'X'}(${(1 - t) * (direction === 'up' || direction === 'left' ? distance : -distance)}px);
			`;
			return out;
		}
	};
}

export function blurFall(node: HTMLElement, params?: {
	delay?: number,
	duration?: number,
	rotateStart?: number,
	rotateEnd?: number
}) {
	return {
		delay: params?.delay || 0,
		duration: params?.duration || 500,
		css: (t: number) => {
			let tQuart = quartOut(t);
			const rotateStart = params?.rotateStart || 15;
			const rotateEnd = params?.rotateEnd || 0;
			const rotate = mapRange(tQuart, 0, 1, rotateStart, rotateEnd);
			let out = `
				opacity: ${t};
				scale: ${1 + (1 - tQuart)};
				rotate: z ${rotate}deg;
			`;
			return out;
		}
	};
}

export function blurSink(node: HTMLElement, params?: {
	delay?: number,
	duration?: number
}) {
	return {
		delay: params?.delay || 0,
		duration: params?.duration || 500,
		css: (t: number) => {
			let out = `
				opacity: t;
				scale: ${t};
			`;
			return out;
		}
	};
}