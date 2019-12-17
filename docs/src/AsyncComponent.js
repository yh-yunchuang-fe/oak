import React, {
    Component
} from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import CodeBlock from './CodeBlock'
import Layout from 'antd/lib/layout'
const {
    Sider, Content,
} = Layout

export default function asyncComponent(importComponent) {
    class AsyncComponent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                markdown: '# 加载中...'
            }
        }

        async componentDidMount() {
            let {
                default: markdown
            } = await importComponent()
            const gifLinkReg = /<!--PreviewGifLink:\s*(.*)\s*-->\n*/g;
            const qrcodeLinkReg = /<!--PreviewQrCodeLink:\s*(.*)\s*-->\n*/g;

            let gifLink =''
            let qrcodeLink = ''
            if (gifLinkReg.test(markdown)) {
                gifLink = gifLinkReg.exec(markdown.match(gifLinkReg))[1]
                markdown = markdown.replace(markdown.match(gifLink), '')
            }

            if (qrcodeLinkReg.test(markdown)) {
                qrcodeLink = qrcodeLinkReg.exec(markdown.match(qrcodeLinkReg))[1]
                markdown = markdown.replace(markdown.match(gifLink), '')
            }

            console.log('qrcodeLink', qrcodeLink)


            this.setState({
                markdown,
                qrcodeLink,
                gifLink
            })
        }


        render() {
            const { markdown, gifLink, qrcodeLink } = this.state
            return <Layout className='doc-body'  style={{backgroundColor: '#fff'}}>
                <Content>
                    <ReactMarkdown source = {
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
                    />
                </Content>
                { gifLink ? <Sider style={{ background: 'transparent',}} width={'30vh'} >
                    <div className="oak-component-preview">
                        <img src="https://static.yonghuivip.com/wechatapp/static/images/iphone-xs-max.png" alt=""/>
                        <div className="oak-component-preview-content">
                            <img className='preview-img' src={gifLink} alt="" />
                        </div>
                    </div>
                    { qrcodeLink ? <img className='oak-component-preview-code' src={qrcodeLink} alt=""/> : null}
                </Sider> : null}
            </Layout>
        }
    }

    return AsyncComponent
}