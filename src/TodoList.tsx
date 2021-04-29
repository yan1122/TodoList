import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { filtersValueType, TaskType } from './App';

type TodoListPropsType = {
    todoListID: string
    title: string
    tasks: Array<TaskType>
    filter: filtersValueType
    removeTask: (taskID: string,todoListID: string) => void
    changeFilter: (value: filtersValueType,todoListID: string) => void
    addTask: (title: string,todoListID: string) => void
    changeTaskStatus:(taskID:string,newIsDone:boolean,todoListID: string) => void
    removeTodoList:(todoListID:string) => void
}



function TodoList(props: TodoListPropsType) {
    const [title, setTitle] = useState('')

    const [error,setError] = useState<boolean>(false)

    const tasks = props.tasks.map((t: TaskType) => {
        const removeTask = () => props.removeTask(t.id,props.todoListID)
        return (
            <li className={t.isDone ? 'is-done' : ''}>
                <input type="checkbox" onChange={(e:ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id,e.currentTarget.checked,props.todoListID)} checked={t.isDone} />
                <span>{t.title}</span>
                <button onClick={removeTask}>X</button>
            </li>
        )
    })

    const onClickAddTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle,props.todoListID)
            setTitle('')
            setError(false)
        }
        else{setError(true)}
    }

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onClickAllButton = () => props.changeFilter("all",props.todoListID)
    const onClickActiveButton = () => props.changeFilter("active",props.todoListID)
    const onClickCompletedButton = () => props.changeFilter("completed",props.todoListID)
    const errorMessage = error?<div className='error-message'>Title is requared</div> :null

    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAddTask()
        }
    }

    const onClickRemoveTodolist = () => props.removeTodoList(props.todoListID)
    return (
        <div className="App">
            <div>
                <h3>{props.title}<button onClick={onClickRemoveTodolist}>X</button></h3> 
                
                <div>
                    <input 
                        className={error ?'error':''}
                        value = {title}
                        onChange={onChangeTitle}
                        onKeyPress={onKeyPressAddTask} />
                    <button onClick={onClickAddTask}>+</button>
                     {errorMessage}
                </div>
                <ul>
                    {tasks}
                </ul>
                <div>
                    <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onClickAllButton}>All</button>
                    <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onClickActiveButton}>Active</button>
                    <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={onClickCompletedButton}>Completed</button>
                </div>
            </div>
        </div>
    );
}

export default TodoList