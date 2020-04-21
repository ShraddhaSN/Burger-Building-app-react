 import React from 'react'
 import classes from './OrderSummer.css'
 const orderSummery = (props) => {
 const ingredientsSummery = Object.keys(props.ingredients).map(igkey => 
    
    <li key= {igkey}>
     <span style={{textTransform:'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
    </li>);
    
 
return(
 <React.Fragment>
     <strong><h3>Your Order</h3></strong>
     <p>Your Delicious Order</p>
    < ul>
     {ingredientsSummery}
     </ul>
     <h4>Payable Amount: {props.price.toFixed(2)} Rs</h4>
     <p> Continue to Order</p>
     <button className={classes.OrderButton}onClick={props.Checkout}> CheckOut Order</button>
     <button onClick={props.cancelOrder} className={classes.CancelButton}>Cancel Order</button>
 </React.Fragment>
);
 }
 export default orderSummery;

 