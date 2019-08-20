import DocConfig from './doc.config'
import asyncComponent from './AsyncComponent'

const createRoutes = () => {
    const route = []

    const navs = DocConfig.navs || []

    function addRoute(page, iscomponent = false) {
        let {
            path
        } = page
        if (path) {
            path = path.replace('/', '')

            let component = null
            if (!iscomponent) {
                component = asyncComponent(() => import('../markdown/' + path + '.md'))
            } else {
                component = asyncComponent(() => import('../../src/' + path + '/README.md'))
            }
            route.push({
                ...page,
                component,
                path: !iscomponent ? `/${path}` : `/components/${path}`,
            })
        }
    }

    navs.forEach(nav => {
        if (nav.components) {
            nav.list.forEach(list => {
                list.groups.forEach(page => addRoute(page, true))
            })
        } else {
            addRoute(nav)
        }
    })

    return route
}

export default createRoutes()