export const arrowDirections = {
    3: 'up',
    2: 'right',
    1: 'down'
};

export const calculateColor = (draggedTaskPhase, phase) => {
    let from = draggedTaskPhase;
    let to = phase;
    if (to - from === 1 ||
        (from === 1 && to === 3) ||
        (from === 1 && to === 4)) {
        return '#1edc1e';
    }
    if (to === from) return 'white';
    return 'red';
};