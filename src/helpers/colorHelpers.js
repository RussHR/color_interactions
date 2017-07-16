export function generateRandomColor() {
    return {
        r: parseInt(Math.random() * 256),
        g: parseInt(Math.random() * 256),
        b: parseInt(Math.random() * 256)
    }
}