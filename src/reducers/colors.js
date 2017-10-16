import { assign, forOwn } from 'lodash';
import { generateRandomColor } from '../helpers/colorHelpers';
import { CHANGE_COLOR, RANDOMIZE_COLORS } from '../constants/actionTypes';

export default function colors(state = getDefaultColors(), action = {}) {
    switch (action.type) {
        case CHANGE_COLOR:
            return assign({}, state, action.payload);
        case RANDOMIZE_COLORS:
            return newColorsWithLocks(state, action.payload);
        default:
            return state;
    }
}

function getDefaultColors() {
    const defaultColors = {};

    for (let i = 0; i < 4; i++) {
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