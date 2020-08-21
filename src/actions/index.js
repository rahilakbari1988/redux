import { ADD_TODO } from './constants/actionTypes.js';

let nameOfText = 0;

const addTodo = text => (
    {
        type: ADD_TODO,
        id: nameOfText++,
        text
    }
)

const setVisibilityFilter = filter =>(
    {
        type:VisibilityFilters,
        filter
    }
) 

const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}