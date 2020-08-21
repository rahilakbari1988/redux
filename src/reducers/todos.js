import { ADD_TODO, TOGGLE_TODO } from './constants/actionTypes.js';

export const todo = (state = '', action) => {

    switch (action.type) {
        case ADD_TODO: return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
        case TOGGLE_TODO:
            return state.map((todo) =>
                (action.id === todo.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
    }
};