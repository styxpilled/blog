import rough from 'roughjs';

export function opsToPath(drawing: any, fixedDecimals?: number): string {
	let path = '';
	for (const item of drawing.ops) {
		const data =
			typeof fixedDecimals === 'number' && fixedDecimals >= 0
				? item.data.map((d) => +d.toFixed(fixedDecimals))
				: item.data;
		switch (item.op) {
			case 'move':
				path += `M${data[0]} ${data[1]} `;
				break;
			case 'bcurveTo':
				path += `C${data[0]} ${data[1]}, ${data[2]} ${data[3]}, ${data[4]} ${data[5]} `;
				break;
			case 'lineTo':
				path += `L${data[0]} ${data[1]} `;
				break;
		}
	}
	return path.trim();
}

export const gen = rough.generator();
