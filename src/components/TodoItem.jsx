import { useDispatch } from 'react-redux'
import '../style/TodoItem.css'
const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const className = todo.done ? 'box done' : 'box'
    return (<div
        onClick={() => dispatch({ type: 'todo/updateStatus', payload: todo.id })}
        className={className}>
        {todo.text}
        <span
            onClick={() => dispatch({ type: 'todo/delete', payload: todo.id })}
            className='delete'
        >
            x
        </span>
    </div>)
}
export default TodoItem