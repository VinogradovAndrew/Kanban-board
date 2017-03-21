export const Types = {
    TASK: 'task'
};
export const taskSource = {
    beginDrag(props) {
        const item = {
            id: props.id,
            phase: props.phase
        };

        props.dragTask(props.phase);

        return item;
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }
        const {id, phase} = monitor.getItem();
        const {section} = monitor.getDropResult();
        let from = phase;
        let to = section;

        if (to - from === 1 ||
            (from === 1 && to === 3) ||
            (from === 1 && to === 4)) {
            props.editTask(id, 'phase', to);
        }
        props.dragTask(phase);
    },
    canDrag(props,monitor){
        return !props.isDescriptionEditing;
    }
};

export function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}