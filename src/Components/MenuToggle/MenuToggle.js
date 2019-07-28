import React from 'react'
import classes from './MenuToggle.module.css'
const MenuToggle = (props) =>{
    const cls = [
        'fa',
        classes.MenuToggle
    ]
    props.menuIs ? cls.push('fa-times', classes.open) : cls.push('fa-bars')
    return(
        <i className={cls.join(' ')} aria-hidden="true" onClick={props.changeMenuIs}></i>
    )
}
export default MenuToggle