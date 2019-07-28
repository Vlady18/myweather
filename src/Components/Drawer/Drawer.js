import React from 'react'
import classes from './Drawer.module.css'
import {NavLink} from "react-router-dom";

class Drawer extends React.Component{

    renderLinks=(links)=>{
       return links.map((link, index)=>{
            return(
                <li key={index}>
                    <NavLink to={link.to} exact={link.exact} onClick={this.props.linkDrawerHandler}>{link.label}</NavLink>
                </li>
            )
        })
    }

    render(){
        const cls = [classes.Drawer]
        if (!this.props.menuIs) {
            cls.push(classes.close)
        }
        const links = [
            {label: 'Погода', to: '/weather', exact: true},
            {label: 'Новости', to: '/news', exact: true}
            ]
        return(
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
        )
    }
}
export default Drawer