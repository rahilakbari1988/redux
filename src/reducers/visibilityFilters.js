import { VisibilityFilters } from '../actions'


export const visibilityFilters = (state = 'VisibilityFilters.SHOW_ALL', action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        case default:
            return state;
    }
}