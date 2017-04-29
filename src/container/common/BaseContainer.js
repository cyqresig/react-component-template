/**
 * @since 2017-04-04 18:04
 * @author chenyiqin
 */

import React, {PureComponent, PropTypes, } from 'react'
import './BaseContainer.pcss'

class BaseContainer extends PureComponent {

    static defaultProps = {
        children: [],
    }

    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        const {
            children,
        } = this.props

        return (
            <div className="base">
                <header>
                    React Webpack Template
                </header>
                <div className="content">
                    {children}
                </div>
                <footer>
                    copyright
                </footer>
            </div>
        )
    }

}

export default BaseContainer
