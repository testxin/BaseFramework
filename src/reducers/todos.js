import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

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
            console.log('action.text===='+action.text)

            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                },
                ...state
            ]

        case DELETE_TODO:
            console.log('action.text11111===='+action.id)


            return state.filter(todo =>
                todo.id !== action.id
            )

        case EDIT_TODO:

            console.log('action.text111222211===='+action.text)

            return state.map(todo =>
                todo.id === action.id ?
                    Object.assign({}, todo, {text: action.text}) :
                    todo
            )

        case COMPLETE_TODO:
            console.log('action.3333333===='+action.text)

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
            console.log('action.4444444444===='+action.text)


            return state.filter(todo => todo.completed === false)

        default:
            return state
    }
}
