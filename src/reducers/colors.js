import { generateRandomColor } from '../helpers/colorHelpers';

export default function colors(state = getDefaultColors(), action = {}) {
    switch (action.type) {
        default:
            return state
    }
}

function getDefaultColors() {
    const defaultColors = {};

    for (let i = 0; i <= 3; i++) {
        defaultColors[`color${i}`] = generateRandomColor();
    }

    return defaultColors;
}