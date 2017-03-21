import {combineReducers} from 'redux';
import tasks from './tasks';
import modal from './modal';

export default combineReducers({
    tasks,
    modal
});

export const getAddTaskModalPriority = (state) => {
    return state.modal.data.priority;
};
export const getAddTaskModalError = (state) => {
    return state.modal.data.error;
};
export const getAddTaskModalDescription = (state) => {
    return state.modal.data.description || '';
};
export const getShownModal = (state) => {
    return state.modal.modalType;
};
export const getDraggedTask = (state) => {
    return state.tasks.dragTask.taskPhase;
};

export const getTasksByPhase = (state, phase) => {
    const tasks = state.tasks;

    const sortFn = function (a, b) {
        if(a.priority === b.priority){
            return +a.time > +b.time;
        }

        return a.priority < b.priority;
    };

    return tasks.allIds.map((id) => tasks.byId[id]).filter((task) => task.phase === phase).sort(sortFn);
};