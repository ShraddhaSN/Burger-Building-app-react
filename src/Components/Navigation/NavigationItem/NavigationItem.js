import React from 'react'
import classess from './NavigationItem.css'
const NavigationItem = (props) =>
{
     return (
         <li className={classess.NavigationItem}>
       <a href={props.link} className={props.active ? classess.active:null}>{props.childre}</a>
         </li>   

     )
} 


export default NavigationItem