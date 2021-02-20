import {
    ADD_TODO,
    TODOS_LOADED,
    DELETE_TODO,
    MARK_COMPLETED,
} from '../actions/types'

const initialState = {
    todos: [],
}

export default (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case TODOS_LOADED:
            const todoItems = JSON.parse(localStorage.getItem('todos'))
            return {
                ...state,
                todos: !todoItems ? [] : todoItems,
            }
        case ADD_TODO:
            if (!localStorage.todos) {
                let todos = []
                todos.push(payload)
                localStorage.setItem('todos', JSON.stringify(todos))
            } else {
                let todos = JSON.parse(localStorage.getItem('todos'))
                todos.unshift(payload)
                localStorage.setItem('todos', JSON.stringify(todos))
            }
            return {
                ...state,
                todos: [payload, ...state.todos],
            }
        case DELETE_TODO:
            let todos = JSON.parse(localStorage.getItem('todos'))
            todos.forEach(todo => todo.id === payload && todos.splice(todo, 1))
            localStorage.setItem('todos', JSON.stringify(todos))
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload),
            }
        case MARK_COMPLETED:
            let todoitems = JSON.parse(localStorage.getItem('todos'))
            todoitems.map(todo =>
                todo.id === payload.id ? (todo.isCompleted = !todo.isCompleted) : todo
            )
            localStorage.setItem('todos', JSON.stringify(todoitems))
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === payload.id ? payload : todo
                ),
            }
        default:
            return state
    }
};