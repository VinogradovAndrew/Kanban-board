import * as actions from './task';
import uuid from 'uuid/v4';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const getTasks = () => (dispatch) => {
    fetch('/tasks', {headers})
        .then(handleErrors)
        .then(function (res) {
            dispatch(actions.receiveTasks(res.data.tasks));
        })
        .catch(function (err) {
            console.log(err)
        })
};

export const createTask = (description, priority) => (dispatch) => {
    let task = {
        id: uuid(),
        phase: 1,
        time: new Date(),
        description,
        priority
    };

    return fetch('/tasks', {
        method: "POST",
        body: JSON.stringify(task),
        headers
    })
        .then(handleErrors)
        .then(function (res) {
            dispatch(actions.createTask(res.task));
        })
        .catch(function (err) {
            console.log(err)
        })

};
export const editTask = (id, prop, val) => (dispatch) => {
    fetch('/tasks/' + id, {
        method: "PUT",
        body: JSON.stringify({task: {prop, val}}),
        headers
    })
        .then(handleErrors)
        .then(function (res) {
            dispatch(actions.editTask(id, prop, val));
            prop === 'description' && dispatch(actions.toggleDescription(id));
        })
        .catch(function (err) {
            console.log(err)
        });
};
export const deleteTask = (id) => (dispatch) => {
    return fetch('/tasks/' + id, {method: "DELETE", headers})
        .then(handleErrors)
        .then(function (res) {
            dispatch(actions.removeTask(id));
        })
        .catch(function (err) {
            console.log(err)
        });
};

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}
