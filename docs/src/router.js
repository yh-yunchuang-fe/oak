import React, {
    Component
} from 'react';
import DocConfig from './doc.config';
import ReactMarkdown from 'react-markdown/with-html';
import CodeBlock from './CodeBlock';

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
            const component = (props) => {
                const _source = !iscomponent ? require(`../markdown/${path}.md`) : require(`../../src/packages/${path}/README.md`);

                return <ReactMarkdown source = {
                    _source.default
                }
                escapeHtml = {
                    false
                }
                renderers = {
                    {
                        code: CodeBlock,
                    }
                }
                />;
            }

            // if (!component) {
            //     return;
            // }
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