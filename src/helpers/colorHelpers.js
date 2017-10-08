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

/*
 * Returns an adjusted offset so that an rgb value plus an offset won't be outside the rand of 0 to 255.
 * @param {number} originalOffset - a number to offset the rgb value by
 * @param {number} color0Val - an r, g, or b value of 0 to 255
 * @param {number} color1Val - an r, g, or b value of 0 to 255
 * @returns {number} an actual number that is safe to offset by
 */
export function getRgbOffset(originalOffset, color0Val, color1Val) {
    if (originalOffset < 0) {
        // get the lower of the two values
        const lowerOfTwo = Math.min(color0Val, color1Val);

        // if the value plus the offset is less than 0, set the actual offset to the difference between the val and 0
        return lowerOfTwo + originalOffset < 0 ? -(lowerOfTwo) : originalOffset;
    }

    // in this case, the adjusted value may be higher than 255
    // get the higher of the two values
    const higherOfTwo = Math.max(color0Val, color1Val);

    // if the value plus the offset is greater than 255, set the actual offset to the difference between 255 and val
    return higherOfTwo + originalOffset > 255 ? 255 - higherOfTwo : originalOffset;
}