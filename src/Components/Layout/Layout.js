import React from 'react'
import classes from './Layout.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/Sidedrawer';
const layout = (props)=>
(
    <React.Fragment> 
    <Toolbar/>
    <SideDrawer/>
    <main className={classes.LayoutStyle}>{props.children}</main>
    </React.Fragment> 
);

export default layout;