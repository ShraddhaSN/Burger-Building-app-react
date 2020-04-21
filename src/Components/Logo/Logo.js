import React from 'react'
import burgerLogo from '../../assets/Images/original.png';
import classes from './Logo.css'
const logo = (props)=>
{
    return (
 <div className={classes.Logo}>
     <img src={burgerLogo} alt="Burger_App"/>
 </div> )
}
export default logo;