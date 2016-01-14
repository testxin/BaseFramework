import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED
    ,FETCH_POSTS_REQUEST,FETCH_POSTS_FAILURE,FETCH_POSTS_SUCCESS} from '../constants/ActionTypes'


const initialState = [
    {
        text: 'Use Redux 我感觉不爽啊',
        completed: false,
        id: 0
    }
]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
           var id= state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
            console.log("id====="+id);
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                },
                ...state
            ]

        case DELETE_TODO:


            return state.filter(todo =>
                todo.id !== action.id
            )

        case EDIT_TODO:


            return state.map(todo =>
                todo.id === action.id ?
                    Object.assign({}, todo, {text: action.text}) :
                    todo
            )

        case COMPLETE_TODO:

            return state.map(todo =>
                todo.id === action.id ?
                    Object.assign({}, todo, {completed: !todo.completed}) :
                    todo
            )

        case COMPLETE_ALL:
            const areAllMarked = state.every(todo => todo.completed)
            return state.map(todo => Object.assign({}, todo, {
                completed: !areAllMarked
            }))

        case CLEAR_COMPLETED:

            return state.filter(todo => todo.completed === false)


        case FETCH_POSTS_REQUEST:

            return state.map(todo =>
                todo.id === action.id ?
                    Object.assign({}, todo, {completed: !todo.completed}) :
                    todo
            )

        default:
            return state
    }
}
