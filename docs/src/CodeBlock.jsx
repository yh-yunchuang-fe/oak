import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import htmlbars from 'react-syntax-highlighter/dist/esm/languages/hljs/htmlbars';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown';
import githubGist from 'react-syntax-highlighter/dist/esm/styles/hljs/github-gist';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('xml', xml);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('htmlbars', htmlbars);
SyntaxHighlighter.registerLanguage('markdown', markdown);

export default class CodeBlock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            codeLink: '',
            _value: '',
        }
    }

    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string,
    }

    static defaultProps = {
        language: null,
    }

    componentDidMount() {
        const codeLinkReg = /<!--CodeLink:\s*(.*)\s*-->\n/g;
        const { value } = this.props;
        const isHasLink = codeLinkReg.test(value);
        if (isHasLink) {
            const link = codeLinkReg.exec(value.match(codeLinkReg));
            this.setState({
                codeLink: link[1],
                _value: value.replace(value.match(codeLinkReg), '')
            });
        } else {
            this.setState({
                codeLink: '',
                _value: value,
            })
        }

    }

    copy = () => {
        this.copied = false
        const textarea = document.createElement('textarea')

        textarea.value = this.state._value;
        textarea.setAttribute('readonly', '');

        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';

        document.body.appendChild(textarea);
        textarea.select()

        try {
            this.copied = document.execCommand('copy');
        } catch (err) {
            this.copied = false
        }
        textarea.remove()

        this.copied && alert('已复制');
    }

    render() {
        const { language } = this.props;
        const { _value, codeLink } = this.state;
        return (
            <div className="yh-oak-code-block">
                <SyntaxHighlighter language={language} style={githubGist}>
                    {_value}
                </SyntaxHighlighter>
                <div className="yh-oak-code-block-icon">
                    <span className="iconfont icon-copy" title="复制代码" onClick={this.copy} ></span>
                    {codeLink ? <a target='_blank' href={codeLink} className="iconfont icon-code" title="在开发者工具中打开"></a> : null}
                </div>
            </div>
        );
    }
}