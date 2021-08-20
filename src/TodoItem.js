import s from './App.module.css'


const TodoItem = ({todo, toggleTask, removeTask}) => {
    return (
    <div className={todo.complete ? s.complete__item : s.item } key={todo.id}>
        <span 
            onClick={() => toggleTask(todo.id)} 
            className={ todo.complete ? s.complete : s.notcomplete }
        > 
            {todo.task} 
        </span>
        <span className={s.delete} onClick={() => removeTask(todo.id)}>&#10006;</span>
    </div>
    )
}

export default TodoItem