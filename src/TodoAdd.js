import { useState } from 'react';

const TodoAdd = ({addTask}) => {
    const[userInput, setUserInput] = useState('')
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)   
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Придумайте себе дело...'
                value={userInput}
                onChange={handleChange}
            />
            <button> Добавить </button>
        </form>
)}

export default TodoAdd;