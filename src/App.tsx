import React, {useState} from 'react';
import {v1} from 'uuid';
import AddItemForm from './AddItemForm';
import './App.css';
import TodoList from './TodoList';
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";

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

function App() {
    const todoList_Id1 = v1()
    const todoList_Id2 = v1()


    let [todoLists, setTodoLists] = useState<Array<TodolistType>>([
        {id: todoList_Id1, title: 'What to learn', filter: 'all'},
        {id: todoList_Id2, title: 'What to buy', filter: 'all'},
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [todoList_Id1]: [
            {id: v1(), title: "html", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false}
        ],
        [todoList_Id2]: [
            {id: v1(), title: "Bread", isDone: true},
            {id: v1(), title: "Beer", isDone: true},
            {id: v1(), title: "Fish", isDone: false}
        ]
    })

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
        tasks[todoListID] = tasks[todoListID].filter(t => t.id !== taskID)
        setTasks({...tasks})
    }

    function addTask(title: string, todoListID: string) {
        const newTask: TaskType = {
            id: v1(),
            title,
            isDone: false
        }
        setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]})
    }

    function changeTaskStatus(taskID: string, newIsDone: boolean, todoListID: string) {
        tasks[todoListID] = tasks[todoListID].map(t => t.id === taskID ? {...t, isDone: newIsDone} : t)
        setTasks({...tasks})
    }

    function changeTaskTitle(taskID: string, newTitle: string, todoListID: string) {
        tasks[todoListID] = tasks[todoListID].map(t => t.id === taskID ? {...t, title: newTitle} : t)
        setTasks({...tasks})
    }

    function changeTodoListTitle(todoListID:string, newTitle:string ){
        todoLists = todoLists.map(td => td.id === todoListID ? {...td,title:newTitle} : td)
        setTodoLists(todoLists)
    }

    function changeFilter(value: filtersValueType, todoListID: string) {
        setTodoLists(todoLists.map(tl => tl.id === todoListID ? {...tl, filter: value} : tl)
        )
    }

    function removeTodoList(todoListID: string) {
        setTodoLists(todoLists.filter(tl => tl.id !== todoListID))
        delete tasks[todoListID]
    }

    function addTodoList(title: string) {
        const NewTodoListId = v1()
        const NewTodoList: TodolistType = {
            id: NewTodoListId,
            title,
            filter: 'all'
        }
        setTodoLists([NewTodoList, ...todoLists])
        setTasks({...tasks, [NewTodoListId]: []})
    }


}


export default App;

