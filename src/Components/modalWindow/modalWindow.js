import React from 'react'
import classes from './modalWindow.module.css'

const ModalWindow = (props)=>{
    return(
        <div className={classes.modalWindow}>
            <i className="fa fa-times" aria-hidden="true" onClick={props.closeModalHandler}></i>
            {
                props.children
            }
        </div>
    )
}

export default ModalWindow