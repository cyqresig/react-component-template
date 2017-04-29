/**
 * @since 2017-04-04 17:38
 * @author chenyiqin
 */

import * as actionType from '../constant/action-type'
import createReducer from '../util/createReducer'

const initialState = {
    id: 1,
    title: 'todo-1',
    complete: false,
    fetching: false,
}

export default createReducer(initialState, {
    [actionType.FETCHING_TODO]: (state, action) => {
        return {
            ...state,
            fetching: action.fetching,
        }
    },
    [actionType.GET_TODO]: (state, action) => {
        return {
            ...action.todo,
        }
    },
})
