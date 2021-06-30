import {filtersValueType, TasksStateType, TaskType, TodolistType} from "../App";
import {v1} from "uuid";
import {addTodoListAT, removeTodoListAT} from "./todolists-reducer";

type RemoveTaskAT = {
    type: 'REMOVE-TASK'
    taskID: string
    todoListID: string
}

type addTaskAT = {
    type: 'ADD-TASK'
    title: string,
    todoListID: string
}

type ChangeTaskStatusAT = {
    type: 'CHANGE-STATUS',
    taskID: string,
    newIsDone: boolean,
    todoListID: string
}

type changeTaskTitleAT = {
    type: 'CHANGE-TITLE',
    taskID: string,
    newTitle: string,
    todoListID: string
}

type AT = RemoveTaskAT | addTaskAT |ChangeTaskStatusAT |changeTaskTitleAT |addTodoListAT | removeTodoListAT

let InitialState:TasksStateType = {}


export const tasksReducer = (state: TasksStateType=InitialState, action: AT) => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {...state,[action.todoListID]:state[action.todoListID].filter(task => task.id !== action.taskID)}
        case 'ADD-TASK':
            const newTask: TaskType = {
                id: v1(),
                title:action.title,
                isDone: false
            }
            return {...state, [action.todoListID]:[newTask,...state[action.todoListID]]}
        case 'CHANGE-STATUS':
            return{...state,
                [action.todoListID]:state[action.todoListID].map(t => t.id === action.taskID ? {...t, isDone: action.newIsDone} : t)}
        case 'CHANGE-TITLE':
            return{...state,[action.todoListID]:state[action.todoListID].map(t => t.id ===action.taskID ?{...t,title:action.newTitle} :t)}
        case'ADD-TODOLIST':
            return{...state,[action.TodolistID]:[]}
        case "REMOVE-TODOLIST" :
            let StateCopy = {...state}
            delete StateCopy[action.todoListID]
            return StateCopy
        default:
            return state
    }
}

export const removeTaskAC = (taskID: string, todoListID: string): RemoveTaskAT => {
    return {
        type: 'REMOVE-TASK',
        taskID,
        todoListID
    }
}

export const addTaskAC = (title: string, todoListID: string):addTaskAT => {
    return {
        type: 'ADD-TASK',
        title,
        todoListID
    }
}

export const changeTaskStatusAC = (taskID: string, newIsDone: boolean, todoListID: string): ChangeTaskStatusAT => {
    return{
        type: 'CHANGE-STATUS',
        taskID,
        newIsDone,
        todoListID,
    }
}

export const changeTaskTitleAC = (taskID: string, newTitle: string, todoListID: string):changeTaskTitleAT => {
    return{
        type:'CHANGE-TITLE',
        taskID,
        newTitle,
        todoListID
    }
}

