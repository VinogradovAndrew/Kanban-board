export const Types = {
    TASK: 'task'
};

export const squareTarget = {
    drop(props) {
        return {section: props.phase};
    }
};

export function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        draggingItem: monitor.getItem()
    };
}
