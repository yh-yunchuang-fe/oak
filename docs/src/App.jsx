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
                        <h2><img src='https://static.yonghuivip.com/oak/images/logo.png' alt='Logo' className='logo'/> Oak Weui</h2>
                        <a href='https://github.com/yh-yunchuang-fe/oak' rel='Oak'><img src='https://static.yonghuivip.com/oak/github.png' alt="" className="github" /></a>
                    </Header>
                    <Layout className='doc-body'>
                        <Sider style={{ background: '#fff'}}>
                            <Navs />
                        </Sider>
                        <Layout style={{backgroundColor: '#fff'}}>
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
                            <Footer className='doc-footer'>- © 2019 Code & Design by YHFE, All rights reserved -</Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </Router >
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
