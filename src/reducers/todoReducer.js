import { v4 as uuidv4 } from 'uuid'

const initState = { todoList: [] }

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const todo = { id: uuidv4(), text: action.payload, done: false }
            return { todoList: [...state.todoList, todo] }

        case UPDATE_TODO_STATUS:
            const newTodoList = state.todoList.map(item => {
                if (item.id === action.payload) {
                    return { ...item, done: !item.done }
                }
                return item
            })
            return { todoList: newTodoList }

        case DELETE_TODO:
            const filteredList = state.todoList.filter(item => {
                return item.id !== action.payload
            })
            return { todoList: filteredList }
        case 'todo/init':
            console.log(action)
            return { todoList: action.payload }

        default:
            return state
    }
}

export const ADD_TODO = 'todo/add'
export const UPDATE_TODO_STATUS = 'todo/updateStatus'
export const DELETE_TODO = 'todo/delete'
export default todoReducer