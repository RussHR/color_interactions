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