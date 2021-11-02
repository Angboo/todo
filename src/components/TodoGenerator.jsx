import { useState } from "react"
import { useDispatch } from "react-redux"

const TodoGenerator = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    return (
        <div>
            <input onChange={event => setText(event.target.value)} defaultValue={text} />
            <button onClick={() => dispatch({ type: 'todo/add', payload: text })}>add</button>
        </div>
    )
}
export default TodoGenerator