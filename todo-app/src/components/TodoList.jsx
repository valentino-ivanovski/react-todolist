import { TodoCard } from "./TodoCard";

export function TodoList (props) {

    const {todos, selectedTab} = props;

    const tab = selectedTab

    const filterTodosList = tab === 'All' ?
        todos :
        tab === 'Completed' ?
        todos.filter(val => val.complete) :
        todos.filter(val => !val.complete);

    return (
        <div>
            {filterTodosList.map((todo, todosIndex) => {
                return(
                    <TodoCard key={todosIndex} 
                    {...props}
                    todosIndex = {todosIndex}
                    todo={todo} />
                )
            })}
        </div>
    )
}