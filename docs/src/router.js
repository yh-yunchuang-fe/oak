import DocConfig from './doc.config';
import asyncComponent from './AsyncComponent';

const createRoutes = () => {
    const route = [];

    const navs = DocConfig.navs || [];

    navs.forEach(nav => {
        if (nav.components) {
            nav.list.forEach(list => {
                list.groups.forEach(page => addRoute(page, true));
            });
        } else {
            addRoute(nav);
        }
    });

    function addRoute(page, iscomponent = false) {
        let {
            path
        } = page;
        if (path) {
            path = path.replace('/', '');

            let component = null;
            if (!iscomponent) {
                component = asyncComponent(() => import('../markdown/' + path + '.md'));
            } else {
                component = asyncComponent(() => import('../../src/packages/' + path + '/README.md'));
            }
            route.push({
                ...page,
                component,
                path: !iscomponent ? `/${path}` : `/components/${path}`,
            });
        }
    }

    return route;
};

export default createRoutes();