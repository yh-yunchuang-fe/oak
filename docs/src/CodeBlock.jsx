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
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string,
    }

    static defaultProps = {
        language: null,
    }

    render() {
        const { language, value } = this.props;

        return (
            <SyntaxHighlighter language={language} style={githubGist}>
                {value}
            </SyntaxHighlighter>
        );
    }
}