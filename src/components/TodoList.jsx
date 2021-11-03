import TodoGroup from "./TodoGroup"
import '../style/TodoList.css'
import TodoGenerator from "./TodoGenerator"
import api from "../apis/api"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const TodoList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        api.get('/todos')
            .then(response => {
                dispatch({ type: 'todo/init', payload: response.data })
            })
    })
    return (
        <div className='todo'>
            <h2>Todo List</h2>
            <TodoGroup />
            <TodoGenerator />
        </div>
    )
}

export default TodoList