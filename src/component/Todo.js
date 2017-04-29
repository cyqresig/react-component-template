/**
 * @since 2017-04-04 18:04
 * @author chenyiqin
 */

import React, { PureComponent, PropTypes, } from 'react'
import noop from 'lodash.noop'
import classNames from 'classnames'
import './Todo.pcss'


class Todo extends PureComponent {

    static defaultProps = {
        complete: false,
        id: 0,
        title: '',
        remove: noop,
    }

    static propTypes = {
        complete: PropTypes.bool,
        id: PropTypes.number,
        title: PropTypes.string,
        remove: PropTypes.func,
    }

    constructor(props) {
        super(props)
        const {
            complete,
            id,
            title,
        } = props

        this.state = {
            complete,
            id,
            title,
        }
    }

    handleRemoveTodoClick = () => {
        this.props.remove(this.state.id)
    }

    handleViewTodoClick = () => {
        window.location.href = `todoInfo.html?id=${this.state.id}`
    }

    render() {
        // console.log(`render ... todo`)
        const { complete, id, title, } = this.state
        const statusClassName = classNames('status', complete ? 'complete' : '')

        return (
            <div className="todo">
                <span className="label">标题：{title}</span>
                <span className="id">id: {id}</span>
                <span className={statusClassName}>{complete ? '已完成' : '未完成'}</span>
                <input className="button" type="button" onClick={this.handleViewTodoClick} value="查看任务"/>
                <input className="button" type="button" onClick={this.handleRemoveTodoClick} value="删除任务"/>
            </div>
        )
    }
}

export default Todo
