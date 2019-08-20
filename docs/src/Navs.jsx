import React, { Component } from 'react'
import Menu from 'antd/lib/menu'
import DocConfig from './doc.config'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { Element } from 'react-scroll'
import 'antd/lib/menu/style/css'

const MenuItemGroup = Menu.ItemGroup
const SubMenu = Menu.SubMenu
class Navs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: {}
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY
            const { style } = this.state
            if (scrollY >= 86) {
                this.setState({
                    style: {
                        position: 'fixed',
                    },
                })
            } else if (scrollY <= 86 && style.position) {
                this.setState({
                    style: {
                        position: 'static',
                    },
                })
            }
        })
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
        const { pathname } = this.props.location
        return (
            <Element style={this.state.style} className='nav' >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[`${pathname === '/' ? '/intro' : pathname}`]}
                    defaultOpenKeys={['Components']}
                >
                    {DocConfig.navs.map((nav) => {
                        if (!nav.components) {
                            return <Menu.Item key={nav.path} ><Link to={nav.path}>{nav.name}</Link></Menu.Item>
                        } else {
                            return <SubMenu key="Components" title={nav.name} >
                                {this.getSubMenu(nav.list)}
                            </SubMenu>
                        }
                    })}
                </Menu>
            </Element>
        )
    }
}

export default withRouter(Navs)