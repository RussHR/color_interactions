import { assign, forOwn } from 'lodash';
import { generateRandomColor } from '../helpers/colorHelpers';
import {
    CHANGE_COLOR,
    RANDOMIZE_COLORS,
    RANDOMIZE_WITH_AVERAGE
} from '../constants/actionTypes';

export default function colors(state = getDefaultColors(), action = {}) {
    switch (action.type) {
        case CHANGE_COLOR:
            return assign({}, state, action.payload);
        case RANDOMIZE_COLORS:
            return newColorsWithLocks(state, action.payload);
        case RANDOMIZE_WITH_AVERAGE:
            return newColorsWithAverage(state, action.payload);
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

function newColorsWithAverage(prevState, payload) {
    const newColors = newColorsWithLocks(prevState, payload);
    newColors.color2 = {
        r: Math.round((newColors.color0.r * 0.5) + newColors.color1.r * 0.5),
        g: Math.round((newColors.color0.g * 0.5) + newColors.color1.g * 0.5),
        b: Math.round((newColors.color0.b * 0.5) + newColors.color1.b * 0.5)
    };

    return newColors;
}