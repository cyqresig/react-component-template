/**
 * @since 2017-04-17 22:52
 * @author chenyiqin
 */

import { createStore, combineReducers, compose, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk'
import '../reducers/index'

import reducers from '../reducers'

const store = createStore(combineReducers(reducers), compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
        const nextRootReducer = require('../reducers/index').default

        store.replaceReducer(combineReducers(nextRootReducer))
    })
}

export default store
