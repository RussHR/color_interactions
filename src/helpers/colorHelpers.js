import { forOwn, has, times } from 'lodash';

export function generateRandomColor() {
    return {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    };
}

export function validatePropColors(numColors) {
    return (props, propName, componentName) => {
        let error;
        times(numColors, (i) => {
            if (!has(props[propName], `color${i}`)) {
                error = new Error(
                    `Invalid prop ${propName}: missing color${i} in colors of ${componentName}`
                );
            }
        });

        if (error) {
            return error;
        }

        // make sure r, g, and b are 0-255
        forOwn(props[propName], (color) => {
            forOwn(color, (rgbValue, rgb) => {
                if (rgbValue < 0 || rgbValue > 255) {
                    return new Error(
                        `Invalid prop ${propName} of ${componentName}:
                        rgb for ${color} out of bounds (${rgb}: ${rgbValue})`
                    );
                }
            });
        });
    };
}

export function getBetweenColor({ r: r0, g: g0, b: b0 }, { r: r1, g: g1, b: b1 }, ratio) {
    const newR = Math.round(r0 * (1 - ratio) + r1 * ratio);
    const newG = Math.round(g0 * (1 - ratio) + g1 * ratio);
    const newB = Math.round(b0 * (1 - ratio) + b1 * ratio);

    return { backgroundColor: `rgb(${newR}, ${newG}, ${newB})` };
}