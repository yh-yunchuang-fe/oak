import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import DocConfig from './doc.config';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import 'antd/lib/menu/style/css';

const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;
class Navs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                height: '100vh',
                width: '200px',
            }
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            const scrollY = window.scrollY;
            const { style } = this.state;
            if (scrollY >= 86 && !style.position) {
                this.setState({
                    style: {
                        position: 'fixed',
                        top: 0,
                        width: '200px',
                        height: '100vh',
                        left: 0,
                    },
                })
            } else if (scrollY <= 86 && style.position) {
                this.setState({
                    style: {
                        height: '100vh',
                        width: '200px',
                    },
                })
            }
        });
    }

    getSubMenu = (navs) => {
        return navs.map((navs, index) => {
            return <MenuItemGroup key={index} title={navs.name}>
                {navs.groups.map(nav => <Menu.Item index={nav.path} key={`/components${nav.path}`}>
                    <Link to={`/components${nav.path}`}>{nav.name}</Link></Menu.Item>)}
            </MenuItemGroup>
        })
    }

    render() {
        const { pathname } = this.props.location;
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={[`${pathname || '/intro'}`]}
                defaultOpenKeys={['Components']}
                style={this.state.style}
            >
                {DocConfig.navs.map((nav) => {
                    if (!nav.components) {
                        return <Menu.Item key={nav.path} ><Link to={nav.path}>{nav.name}</Link></Menu.Item>;
                    } else {
                        return <SubMenu key="Components" title={nav.name} >
                            {this.getSubMenu(nav.list)}
                        </SubMenu>
                    }
                })}
            </Menu>
        );
    }
}

export default  withRouter(Navs);