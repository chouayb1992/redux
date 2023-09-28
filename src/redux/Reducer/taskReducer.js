import { ADD_TASK, EDIT_TASK, DELETE_TASK, DONE_TASK} from '../Constant/actionsTypes';

const initialState = {
    listTasks:[
        {id: 1, title:'task 1', status:false},
        {id: 2, title:'task 2', status:false},
        
    ]
}

const taskReducer = (state = initialState, actions) => {
    switch (actions.type){
         case ADD_TASK:
            return {...state, listTasks: [...state.listTasks, actions.payload]}
         case EDIT_TASK:
            return {...state, listTasks: state.listTasks.map((el) =>el.id ===actions.payload.id ? {...el, title: actions.payload.newTitle} : el)}
        case DELETE_TASK:
            return {...state, listTasks: state.listTasks.filter((el) =>el.id !==actions.payload)}
        case DONE_TASK:
            return {...state, listTasks: state.listTasks.map((el) =>el.id ===actions.payload ? {...el, status: !el.status} : el)}
        default:
            return state
    }

}

export default taskReducer;