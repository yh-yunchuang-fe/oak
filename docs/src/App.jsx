import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from 'antd/lib/layout';
import Navs from './Navs.jsx';
import RouterConfig from './router';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import 'antd/lib/layout/style/css';
import './App.scss';

const {
    Header, Footer, Sider, Content,
} = Layout;

class App extends Component {
    render() {
        return (
            <Router>
                <Layout className='layout'>
                    <Header className='header'>
                        <h2>Oak UI</h2>
                        <a href="https://github.com/yh-yunchuang-fe/oak" rel="Oak"><img src="https://static.yonghuivip.com/oak/github.png" alt="" className="github" /></a>
                    </Header>
                    <Layout className='doc-body'>
                        <Sider style={{ background: '#fff'}}>
                            <Navs />
                        </Sider>
                        <Layout>
                            <Content className='doc-content'>
                                <Switch>
                                    {RouterConfig.map((route, index) => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.path == '/' ? true : false}
                                            component={route.component}
                                        />
                                    ))}
                                    <Redirect from="/" to="intro" />
                                </Switch>
                            </Content>
                            <Footer>Footer</Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </Router >
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
