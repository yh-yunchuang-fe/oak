import React, {
    Component
} from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import CodeBlock from './CodeBlock';

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                markdown: null
            };
        }

        async componentDidMount() {
            const {
                default: markdown
            } = await importComponent();

            this.setState({
                markdown
            });
        }


        render() {
            const { markdown } = this.state;
            return <ReactMarkdown source = {
                markdown
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
    }

    return AsyncComponent;
};