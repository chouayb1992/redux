import { ADD_TASK, EDIT_TASK, DELETE_TASK, DONE_TASK} from '../Constant/actionsTypes';

export const addTask = ( newTask ) => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const editTaskTask = ( id, newTitle ) => {
    return {
        type: EDIT_TASK,
        payload: {id, newTitle}
    }
}

export const deleteTask = ( id ) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const doneTask = ( id ) => {
    return {
        type: DONE_TASK,
        payload: id
    }
}