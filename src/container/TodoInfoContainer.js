/**
 * @since 2017-04-18 15:24
 * @author chenyiqin
 */

import React, { PureComponent, } from 'react'
// import { bindActionCreators, } from 'redux'
import { connect, } from 'react-redux'

import action from '../action'
import './TodoInfoContainer.pcss'

@connect(
    state => ({
        todo: state.todo,
    }),
    action.todo,
    // state => ({
    //     todoList: state.todoList,
    //     todo: state.todo,
    // }),
    // dispatch => bindActionCreators(action.todo, dispatch)
)
class TodoInfoContainer extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const {
            getTodo,
        } = this.props

        console.log(`this.props = `, this.props)    // eslint-disable-line
        getTodo()
    }

    render() {
        const {
            todo: {
                id,
                title,
                complete,
                fetching,
            },
        } = this.props

        let view = null

        console.log(`fetching = `, fetching)    // eslint-disable-line
        if (fetching) {
            view = (
                <div className="todo">loading...<br/><br/><br/></div>
            )
        } else {
            view = (
                <div className="todo">
                    id: {id}
                    <br/>
                    title: {title}
                    <br/>
                    complete: {complete}
                </div>
            )
        }

        return view
    }
}

export default TodoInfoContainer
