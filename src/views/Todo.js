const Todo = (props) => {
    const todos = props.childTodos;
    return (
        <div className='todo-container'>
            {todos && todos.length > 0 &&
                todos.map((item, index) => {
                    return (
                        <li className="todo-child" key={item.id}>
                            {index + 1} - {item.title}
                        </li>
                    )
                })
            }
            <hr />
        </div>

    )
}
export default Todo;