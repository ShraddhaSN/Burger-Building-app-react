import React from 'react'
import classes from '../../UI/Model/Model.css'
import Backdrop from '../../UI/Model/Backdrop/Backdrop'
const model = (props)=>
{ return(
   <React.Fragment>
      <Backdrop show={props.show} clicked={props.modelClosed}/>
   <div className={classes.Modal}
   style={{transform:props.show? 'translate(0)': 'translate(-100vh)',
   opacity: props.show? '1': '0'}}>{props.children}</div>
   </React.Fragment>)
}
export default model;