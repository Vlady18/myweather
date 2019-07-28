import React from 'react'
import classes from './Input.module.css'
const Input = (props)=>{
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${(Math.random())}`
    return(
        <div className={classes.Input_wrap}>
            <label htmlFor={htmlFor}>For example: Kyiv, London, Paris</label>
            <input id={htmlFor} onChange={(e)=> props.setCurrentInputCity(e)} />
        </div>
    )
}
export default Input