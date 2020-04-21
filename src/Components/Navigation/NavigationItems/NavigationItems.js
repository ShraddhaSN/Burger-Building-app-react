import React from 'react'
import classes from '../NavigationItems/NavigationItems.css'
import item from '../NavigationItem/NavigationItem'
const navigationItems = (props)=>
{
   return ( <ul className={classes.NavigationItems}>

 
 <item link="/" active={true}>Burger Builder</item>
 
 <item link="/">Checkout</item>
 
    </ul>);
}

export default navigationItems