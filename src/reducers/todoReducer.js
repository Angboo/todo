import { v4 as uuidv4 } from 'uuid'

const initState = { todoList: [{ id: 1, text: 'todo example1', done: false }, { id: 2, text: 'todo example 2', done: false }] }
const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'todo/add':
            const todo = { id: uuidv4(), text: action.payload, done: false }
            return { todoList: [...state.todoList, todo] }
        default:
            return state
    }
}

export default todoReducer