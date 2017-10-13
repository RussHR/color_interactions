import { CHANGE_COLOR, RANDOMIZE_COLORS } from '../constants/actionTypes';

export function changeColorAction(payload) {
    return { type: CHANGE_COLOR, payload };
}

export function randomColorsAction(lockedColors) {
    return { type: RANDOMIZE_COLORS, payload: { lockedColors } };
}