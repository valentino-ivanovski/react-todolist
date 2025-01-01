import { TodoCard } from "./TodoCard";

export function TodoList (props) {

    const {todos} = props;

    const tab = "All"

    return (
        <div>
            {todos.map((todos, todosIndex) => {
                return(
                    <TodoCard key={todosIndex} todoIndex = {todosIndex} {...props} /*u can also use todos={todos}*/ />
                )
            })}
        </div>
    )
}