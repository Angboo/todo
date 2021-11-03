import { useState } from "react"
import { useDispatch } from "react-redux"
import { ADD_TODO } from "../reducers/todoReducer"

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    
    return (
        <div>
            <input onChange={event => setText(event.target.value)} defaultValue={text} />
            <button onClick={() => dispatch({ type: ADD_TODO, payload: text })}>add</button>
        </div>
    )
}
export default TodoGenerator