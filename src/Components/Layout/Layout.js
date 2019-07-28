import React from 'react'
import classes from './Layout.module.css'
import MenuToggle from "../MenuToggle/MenuToggle";
import Drawer from "../Drawer/Drawer";

class Layout extends React.Component{
    state={
        menuIs: false
    }
    linkDrawerHandler=()=>{
        this.setState({
            menuIs: false
        })
    }
    changeMenuIs=()=>{
        this.setState({
            menuIs: !this.state.menuIs
        })
    }
    render(){
        return(
            <div className={classes.Layout}>
                <MenuToggle menuIs={this.state.menuIs} changeMenuIs={this.changeMenuIs}  />
                <Drawer menuIs={this.state.menuIs} linkDrawerHandler={this.linkDrawerHandler}/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout