import { memo } from "react"

function TodoItem({ todo }) {
    console.log("todoitem rendered", todo)
    return (
        <li>
        {todo}
      </li>
    )
}

export default memo(TodoItem)