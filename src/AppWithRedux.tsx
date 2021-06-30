import React, {useReducer, useState} from 'react';
import {v1} from 'uuid';
import AddItemForm from './AddItemForm';
import './App.css';
import TodoList from './TodoList';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC,
    RemoveTodoListAC,
    todolistsReducer
} from "./State/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./State/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./State/Store";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type filtersValueType = "all" | "active" | "completed"


export type TodolistType = {
    id: string
    title: string
    filter: filtersValueType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function AppWithRedux() {

    let todoLists = useSelector<AppRootStateType,TodolistType[]>(
        state => state.todolists
    )

    let tasks = useSelector<AppRootStateType,TasksStateType>(
        state => state.tasks
    )

    const dispatch = useDispatch()
    function getTasksForTodolist(todoList: TodolistType) {
        switch (todoList.filter) {
            case "active":
                return tasks[todoList.id].filter(t => !t.isDone)
            case "completed":
                return tasks[todoList.id].filter(t => t.isDone)
            default:
                return tasks[todoList.id]
        }
    }


    const todoListsComponents = todoLists.map(tl => {

        return (
            <Grid item>
                <Paper style={ {padding:"10px"} }>
                <TodoList
                    key={tl.id}
                    todoListID={tl.id}
                    changeTaskStatus={changeTaskStatus}
                    filter={tl.filter}
                    addTask={addTask}
                    changeFilter={changeFilter}
                    title={tl.title}
                    tasks={getTasksForTodolist(tl)}
                    removeTask={removeTask}
                    removeTodoList={removeTodoList}
                    changeTaskTitle={changeTaskTitle}
                    changeTodoListTitle={changeTodoListTitle}
                />
                </Paper>
            </Grid>

        )
    })

    return (
        <div className="App">
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton edge={"start"} color={"inherit"} aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant={"h6"}>
                        News
                    </Typography>
                    <Button color={"inherit"}>Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={ {padding:"20px"} } >
                    <AddItemForm addItem={addTodoList}/>
                </Grid>
                <Grid container spacing={3}>
                    {todoListsComponents}
                </Grid>
            </Container>
        </div>
    );

    function removeTask(taskID: string, todoListID: string) {
        let action = removeTaskAC(taskID,todoListID)
        dispatch(action)
    }

    function addTask(title: string, todoListID: string) {
        let action = addTaskAC(title,todoListID)
        dispatch(action)
    }

    function changeTaskStatus(taskID: string, newIsDone: boolean, todoListID: string) {
        let action = changeTaskStatusAC(taskID,newIsDone,todoListID)
        dispatch(action)
    }

    function changeTaskTitle(taskID: string, newTitle: string, todoListID: string) {
        let action = changeTaskTitleAC(taskID,newTitle,todoListID)
        dispatch(action)
    }

    function changeTodoListTitle(todoListID:string, newTitle:string ){
        let action = changeTodoListTitleAC(todoListID,newTitle)
        dispatch(action)
    }

    function changeFilter(value: filtersValueType, todoListID: string) {
        let action = changeTodoListFilterAC (value,todoListID)
        dispatch(action)
    }

    function removeTodoList(todoListID: string) {
        let action = RemoveTodoListAC(todoListID)
        dispatch(action)
    }

    function addTodoList(title: string) {
        let action = addTodoListAC(title)
        dispatch(action)
    }


}


export default AppWithRedux;

