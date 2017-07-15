// Reducer
export default function colors(state = getDefaultColors(), action = {}) {
    switch (action.type) {
        default:
            return state
    }
}

function getDefaultColors() {
    const defaultColors = {};

    for (let i = 0; i <= 3; i++) {
        defaultColors[`color${i}`] = {
            r: parseInt(Math.random() * 256),
            g: parseInt(Math.random() * 256),
            b: parseInt(Math.random() * 256)
        };
    }

    return defaultColors;
}