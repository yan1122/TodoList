import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import AddItemForm from './AddItemForm';
import { filtersValueType, TaskType } from './App';
import EditableSpan from './EditableSpan';
import {Button, Checkbox, Icon, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type TodoListPropsType = {
    todoListID: string
    title: string
    tasks: Array<TaskType>
    filter: filtersValueType
    removeTask: (taskID: string, todoListID: string) => void
    changeFilter: (value: filtersValueType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    changeTaskStatus: (taskID: string, newIsDone: boolean, todoListID: string) => void
    removeTodoList: (todoListID: string) => void
    changeTaskTitle:(taskID: string, newTitle:string , todoListID: string) => void
}



function TodoList(props: TodoListPropsType) {
    
    const tasks = props.tasks.map((t: TaskType) => {
        const removeTask = () => props.removeTask(t.id, props.todoListID)
        const changeTaskTitle = (title:string) =>{
            props.changeTaskTitle(t.id,title,props.todoListID)
        }
        return (
            <div className={t.isDone ? 'is-done' : ''}>
                <Checkbox onChange={(e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked, props.todoListID)} checked={t.isDone} />
                <EditableSpan title={t.title} changeTitle={changeTaskTitle} />
                <IconButton onClick={removeTask}> <Delete/> </IconButton>
            </div>
        )
    })


    const onClickAllButton = () => props.changeFilter("all", props.todoListID)
    const onClickActiveButton = () => props.changeFilter("active", props.todoListID)
    const onClickCompletedButton = () => props.changeFilter("completed", props.todoListID)
    const addTask = (title: string) => props.addTask(title, props.todoListID)
    const onClickRemoveTodolist = () => props.removeTodoList(props.todoListID)



    return (
        <div className="TodoList">
            <div>
                <h3>{props.title}
                    <IconButton onClick={onClickRemoveTodolist}> <Delete/> </IconButton>
                </h3>

                <div>
                    <AddItemForm addItem={addTask} />
                </div>
                <div>
                    {tasks}
                </div>
                <div>
                    <Button variant={props.filter === 'all' ? "contained" : 'outlined'} onClick={onClickAllButton}>All</Button>
                    <Button variant={props.filter === 'active' ? "contained" : 'outlined'}  onClick={onClickActiveButton}>Active</Button>
                    <Button  variant={props.filter === 'completed' ? "contained" : 'outlined'} onClick={onClickCompletedButton}>Completed</Button>
                </div>
            </div>
        </div>
    );
}

export default TodoList