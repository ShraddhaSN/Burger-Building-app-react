import React from 'react'
import classes from './BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl'


const controls =[
    {label: 'Salad', type:'salad'},
    {label: 'Meat', type:'meat'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Bacon', type:'bacon'}
];
const buildcontrols = (props)=>
{
     return(
    <div className={classes.BuildControls}>
           <p>Your Burger Costs:<strong> {props.price.toFixed(2)}</strong></p>
           {controls.map(ctrl => {
             return  <BuildControl key={ctrl.label} label={ctrl.label} 
             added={()=>props.ingredientAdded(ctrl.type)}
             removed={()=>props.ingredientRemoved(ctrl.type)}/>
           })}
           <button className={classes.OrderButton} onClick={props.ordered} >Order Now!!!</button>
      </div>
      );
}

export default buildcontrols