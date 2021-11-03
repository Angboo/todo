import { useDispatch } from 'react-redux'
import { DELETE_TODO, UPDATE_TODO_STATUS } from '../reducers/todoReducer';
import '../style/TodoItem.css'
const TodoItem = ({ todo }) => {

    const dispatch = useDispatch();
    const className = todo.done ? 'box done' : 'box'

    return (
        <div
            onClick={() => dispatch({ type: UPDATE_TODO_STATUS, payload: todo.id })}
            className={className}
        >
            {todo.text}
            <span
                onClick={() => dispatch({ type: DELETE_TODO, payload: todo.id })}
                className='delete'
            >
                x
            </span>
        </div>
    )
}
export default TodoItem