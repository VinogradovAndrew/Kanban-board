import  {combineReducers} from 'redux';
import omit from 'lodash/omit';

const dragTask = (state = {}, action) => {
    switch (action.type) {
        case 'DRAG_TASK':
            return {taskPhase: action.taskPhase === state.taskPhase ? null : action.taskPhase};
        default:
            return state;
    }
};

const task = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return omit(action, 'type');
        case 'MOVE_TASK':
            return {...state, phase: action.phase};
        case 'EDIT_TASK':
            return {...state, [action.propName]: action.value};
        case 'TOGGLE_DESCRIPTION':
            if (!state.isDescriptionEditing && state.phase === 1) {
                return {...state, isDescriptionEditing: true}
            }
            return omit(state, 'isDescriptionEditing');
        default:
            return state;
    }
};


const byId = (state = {}, action) => {
    switch (action.type) {
        case 'RECEIVE_TASKS':
            return action.tasks.reduce((result, item) => {
                result[item.id] = item;
                return result;
            }, {});
        case 'CREATE_TASK':
        case 'EDIT_TASK':
        case 'TOGGLE_DESCRIPTION':
            return {
                ...state,
                [action.id]: task(state[action.id], action)
            };
        case 'REMOVE_TASK':
            return omit(state, action.id);
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    switch (action.type) {
        case 'RECEIVE_TASKS':
            return action.tasks.map((item) => item.id);
        case 'CREATE_TASK':
            return [...state, action.id];
        case 'REMOVE_TASK':
            return state.filter((item) => item !== action.id);
        default:
            return state;
    }
};

export default combineReducers({
    byId,
    allIds,
    dragTask
});