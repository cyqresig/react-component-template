/**
 * @since 2017-04-28 18:39
 * @author chenyiqin
 */

import renderPage from '../pages/todoInfo'

renderPage()

if (module.hot) {
    module.hot.accept('../pages/todoInfo', () => {
        const renderNewPage = require('../pages/todoInfo').default

        renderNewPage()
    })
}
