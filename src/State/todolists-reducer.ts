import {filtersValueType, TodolistType} from "../App";
import {v1} from "uuid";

export type removeTodoListAT = {
    type: 'REMOVE-TODOLIST'
    todoListID: string
}

export type addTodoListAT = {
    type: 'ADD-TODOLIST'
    title: string
    TodolistID:string
}

type changeTodoListFilterAT = {
    type: 'CHANGE-TODOLIST-FILTER'
    value: filtersValueType
    todoListID: string
}

type changeTodoListTitleAT = {
    type: 'CHANGE-TD-TITLE'
    todoListID: string
    newTitle: string
}

type AT = removeTodoListAT | addTodoListAT | changeTodoListFilterAT | changeTodoListTitleAT

let InitialState:TodolistType[] = []

export const todolistsReducer = (todoLists: Array<TodolistType> = InitialState, action: AT) => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            return (todoLists.filter(tl => tl.id !== action.todoListID))
        case 'ADD-TODOLIST':
            const NewTodoListId = action.TodolistID
            const NewTodoList: TodolistType = {
                id: NewTodoListId,
                title: action.title,
                filter: 'all'
            }
            return ([NewTodoList, ...todoLists])
        case 'CHANGE-TODOLIST-FILTER':
            return (todoLists.map(tl => tl.id === action.todoListID ? {...tl, filter: action.value} : tl))
        case 'CHANGE-TD-TITLE':
            return (todoLists.map(td => td.id === action.todoListID ? {...td, title: action.newTitle} : td))
        default:
            return todoLists
    }
}

export const RemoveTodoListAC = (todoListID:string): removeTodoListAT => {
    return {
        type: 'REMOVE-TODOLIST',
        todoListID
    }
}

export const addTodoListAC = (title:string):addTodoListAT => {
   return {
        type: 'ADD-TODOLIST',
        title,
       TodolistID:v1()
    }
}

export const changeTodoListFilterAC = (value: filtersValueType,todoListID: string):changeTodoListFilterAT => {
    return({
        type: 'CHANGE-TODOLIST-FILTER',
        value,
        todoListID,
    })
}

export const changeTodoListTitleAC = (todoListID: string,newTitle: string):changeTodoListTitleAT => {
    return({
        type: 'CHANGE-TD-TITLE',
        todoListID,
        newTitle,
    })
}