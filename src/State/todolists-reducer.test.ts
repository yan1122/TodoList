import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC,
    RemoveTodoListAC,
    todolistsReducer
} from './todolists-reducer';
import {v1} from 'uuid';
import {filtersValueType, TodolistType} from '../App';
let todolistId1:string
let todolistId2:string
let startState:Array<TodolistType>

beforeEach(() => {
     todolistId1 = v1();
     todolistId2 = v1();

     startState = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
})

test('correct todolist should be removed', () => {

    const endState = todolistsReducer(startState,RemoveTodoListAC(todolistId1))

    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
});
test('correct todolist should be added', () => {

    let newTodolistTitle = "New Todolist";
    const endState = todolistsReducer(startState, addTodoListAC(newTodolistTitle))

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(newTodolistTitle);
});
test('correct filter of todolist should be changed', () => {

    let newFilter: filtersValueType = "completed";

    const action = {
        type: 'CHANGE-TODOLIST-FILTER',
        todoListID: todolistId2,
        value: newFilter
    };

    const endState = todolistsReducer(startState, changeTodoListFilterAC(newFilter,todolistId2));

    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe(newFilter);
});
test('correct todolist should change its name', () => {
    let newTodolistTitle = "New Todolist";
    const action = {
        type: 'CHANGE-TD-TITLE',
        todoListID: todolistId2,
        newTitle: newTodolistTitle
    };

    const endState = todolistsReducer(startState, changeTodoListTitleAC(todolistId2,newTodolistTitle));

    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});



