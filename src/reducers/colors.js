import { assign, clone, forOwn } from 'lodash';
import { generateRandomColor } from '../helpers/colorHelpers';
import { CHANGE_COLOR, RANDOMIZE_COLORS, RANDOMIZE_ALIKE_COLORS } from '../constants/actionTypes';

export default function colors(state = getDefaultColors(), action = {}) {
    switch (action.type) {
        case CHANGE_COLOR:
            return assign({}, state, action.payload);
        case RANDOMIZE_COLORS:
            return newColorsWithLocks(state, action.payload);
        case RANDOMIZE_ALIKE_COLORS:
            return newColorsWithAlike(state, action.payload);
        default:
            return state;
    }
}

function getDefaultColors() {
    const defaultColors = {};

    for (let i = 0; i <= 3; i++) {
        defaultColors[`color${i}`] = generateRandomColor();
    }

    return defaultColors;
}

function newColorsWithLocks(prevState, { lockedColors }) {
    const newColors = getDefaultColors();
    // if a color is set to true in locked colors, we don't want to change the color
    forOwn(lockedColors, (isLocked, color) => {
        if (isLocked) {
            newColors[color] = prevState[color];
        }
    });
    return newColors;
}

function newColorsWithAlike(prevState, payload) {
    const newColors = newColorsWithLocks(prevState, payload);
    const midColor = clone(newColors.color2);
    newColors.color2 = {
        r: Math.round((newColors.color0.r * 0.25) + midColor.r * 0.75),
        g: Math.round((newColors.color0.g * 0.25) + midColor.g * 0.75),
        b: Math.round((newColors.color0.b * 0.25) + midColor.b * 0.75)
    };
    newColors.color3 = {
        r: Math.round((newColors.color1.r * 0.25) + midColor.r * 0.75),
        g: Math.round((newColors.color1.g * 0.25) + midColor.g * 0.75),
        b: Math.round((newColors.color1.b * 0.25) + midColor.b * 0.75)
    };

    return newColors;
}