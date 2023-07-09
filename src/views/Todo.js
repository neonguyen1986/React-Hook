

const Todo = (props) => {
    const { childTodos, deleteDataTodo } = props;
    //khi truyền props nên truyền như cách trên

    const handleDeleteTodo = (id) => {
        // console.log('>>>check todo: ', todo)
        deleteDataTodo(id)
    }

    return (
        <div className='todo-container'>
            {/* {childTodos && childTodos.length > 0 && */}
            {childTodos.map((item, index) => {
                return (

                    <div className='child-todo' key={item.id}>
                        {index + 1} - {item.title} &nbsp;
                        <span>
                            <button
                                type="button"
                                onClick={() => handleDeleteTodo(item.id)}>
                                Delete</button>
                        </span>
                    </div>


                )
            })
            }
            <hr />
        </div>

    )
}
export default Todo;