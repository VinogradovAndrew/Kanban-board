export const dragTask = (taskPhase) => ({
    type: "DRAG_TASK",
    taskPhase
});
export const editTask = (id, propName, value) => ({
    type: "EDIT_TASK",
    propName,
    value,
    id
});

export const toggleDescription = (id) => ({
    type: "TOGGLE_DESCRIPTION",
    id
});
export const createTask = (task) => ({
    type: 'CREATE_TASK',
    ...task
});

export const removeTask = (id) => ({
    type: "REMOVE_TASK",
    id
});

export const receiveTasks = (tasks) => ({
    type: "RECEIVE_TASKS",
    tasks
});
