import React, { useState } from 'react';
import { v1 } from 'uuid';
import AddItemForm from './AddItemForm';
import './App.css';
import TodoList from './TodoList';

export type TaskType = {
    title: string
    id: string
    isDone: boolean
}

export type filtersValueType = "all" | "active" | "completed"


type TodolistType = {
    id: string
    title: string
    filter: filtersValueType
}

type TaskStateType = {
    [key: string]: Array<TaskType>
}

function App() {
    const todoList_Id1 = v1()
    const todoList_Id2 = v1()


    const [todoLists, setTodoLists] = useState<Array<TodolistType>>([
        { id: todoList_Id1, title: 'What to learn', filter: 'all' },
        { id: todoList_Id2, title: 'What to buy', filter: 'all' },
    ])

    const [tasks, setTasks] = useState<TaskStateType>({
        [todoList_Id1]: [
            { id: v1(), title: "html", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "React", isDone: false }
        ],
        [todoList_Id2]: [
            { id: v1(), title: "Bread", isDone: true },
            { id: v1(), title: "Beer", isDone: true },
            { id: v1(), title: "Fish", isDone: false }
        ]
    })

    function getTasksForTodolist(todoList:TodolistType) {
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
                removeTodoList={removeTodoList} />
        )
    })

    return (
        <div className="App">
            <AddItemForm addItem={addTodoList} />
            {todoListsComponents}
        </div>
    );
    function removeTask(taskID: string, todoListID: string) {
        tasks[todoListID] = tasks[todoListID].filter(t => t.id !== taskID)
        setTasks({ ...tasks })
    }
    function addTask(title: string, todoListID: string) {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        setTasks({ ...tasks, [todoListID]: [newTask,...tasks[todoListID]] })
    }
    function changeTaskStatus(taskID: string, newIsDone: boolean, todoListID: string) {
        tasks[todoListID] = tasks[todoListID].map(t => t.id === taskID ? { ...t, isDone: newIsDone } : t)
        setTasks({ ...tasks })
    }
    function changeFilter(value: filtersValueType, todoListID: string) {
        setTodoLists(todoLists.map(tl => tl.id === todoListID ? { ...tl, filter: value } : tl)
        )}
    function removeTodoList(todoListID:string){
        setTodoLists(todoLists.filter(tl => tl.id!== todoListID))
        delete tasks[todoListID]
    }
    function addTodoList (title:string) {
        const newTodoListId = v1()
        const newTodoList:TodolistType = {
            id:newTodoListId,
            title,
            filter:('all'),
        }
            setTodoLists([...todoLists,newTodoList])
            setTasks({...tasks,[newTodoListId]:[]})
        }
    }


export default App;

