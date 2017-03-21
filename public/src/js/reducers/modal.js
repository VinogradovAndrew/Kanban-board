const modalData = (state = {priority: 1}, action) => {
    switch (action.type) {
        case 'EDIT_MODAL_TASK_PRIORITY':
            return {...state, priority: action.priority};
        case 'EDIT_MODAL_TASK_DESCRIPTION':
            return {...state, description: action.description};
        case 'TOGGLE_MODAL':
            return state;
        default:
            return state;
    }
};

const modal = (state = {modalType: false, data: {}}, action) => {
    switch (action.type) {
        case 'TOGGLE_MODAL':
            return {
                modalType: state.modalType === action.modalType ? false : action.modalType,
                data: modalData(undefined, action)
            };
        case 'EDIT_MODAL_TASK_PRIORITY':
        case 'EDIT_MODAL_TASK_DESCRIPTION':
            return {
                ...state,
                data: modalData(state.data, action)
            };
        case 'SAVE_MODAL_TASK':
            return action.taskPhase;
        default:
            return state;
    }
};

export default modal;