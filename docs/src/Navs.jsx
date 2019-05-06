import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import DocConfig from './doc.config';
import { Link } from "react-router-dom";
import 'antd/lib/menu/style/css';

const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;
export default class Navs extends Component {
    getSubMenu = (navs) => {
        return navs.map((navs, index) => {
            return <MenuItemGroup key={index} title={navs.name}>
                {navs.groups.map(nav => <Menu.Item index={nav.path} key={nav.path}>
                    <Link to={`/components${nav.path}`}>{nav.name}</Link></Menu.Item>)}
            </MenuItemGroup>
        })
    }

    render() {
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['/intro']}
                defaultOpenKeys={['Components']}
                style={{ height: '100%' }}
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