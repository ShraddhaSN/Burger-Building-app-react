import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const Burger= (props)=>

{
    let TempIngredients = Object.keys(props.ingredients).map(igkey =>
        {
           return  [...Array(props.ingredients[igkey])].map((_,i)=>
           {
              return <BurgerIngredient key={igkey+i} type={igkey}></BurgerIngredient>
           })
        }).reduce((arr,el)=>
        {
            return arr.concat(el)
        },[]);
        if(TempIngredients.length === 0)
        {
            TempIngredients=<p>Please Add the ingredients of your choice!!</p>
        }

     return <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {TempIngredients}
        <BurgerIngredient type="bread-bottom"/>

    </div>
}

export default Burger
