export const toggleModal = () => ({
    type: 'TOGGLE_MODAL',
    modalType: 'ADD_TASK'
});
export const editModalTaskPriority = (priority) => (
    {
        type: 'EDIT_MODAL_TASK_PRIORITY',
        modalType: 'ADD_TASK',
        priority
    }
);
export const editModalTaskDescription = (description) => ({
    type: 'EDIT_MODAL_TASK_DESCRIPTION',
    modalType: 'ADD_TASK',
    description
});



