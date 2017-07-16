import { assign } from 'lodash';
import { generateRandomColor } from '../helpers/colorHelpers';
import { CHANGE_COLOR } from '../constants/actionTypes';

export default function colors(state = getDefaultColors(), action = {}) {
    switch (action.type) {
        case CHANGE_COLOR:
            return assign({}, state, action.payload);
        default:
            return state;
    }
}

function getDefaultColors() {
    const defaultColors = {};

    for (let i = 0; i <= 2; i++) {
        defaultColors[`color${i}`] = generateRandomColor();
    }

    return defaultColors;
}