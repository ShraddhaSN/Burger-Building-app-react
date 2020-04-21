import React, {Component} from 'react';
import Burger from '../../Components/Burger/Burgur';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Model from '../../Components/UI/Model/Model'
import OrderSummery from '../../Components/Burger/OrderSummery/OrderSummery'

const ingredientPrices = {
    salad : 20,
    cheese: 20,
    meat : 40,
    bacon : 60
}


class BurgerBuilder  extends Component
{
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            bacon:0,
          cheese: 0,
        },
        totalPrice: 100,
        ordergiven: false
    };
    addIngredientHandler=(type)=>
    {
         const oldCount = this.state.ingredients[type];
         const updatedCount = oldCount + 1;
         const updatedIngredient= {
           ...this.state.ingredients
         };
         updatedIngredient[type] = updatedCount;
         const priceAddition = ingredientPrices[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = priceAddition + oldPrice ;
         this.setState({
             totalPrice: newPrice,
             ingredients: updatedIngredient
         })

    }
    removeIngredientHandler= (type)=>
    {
         const oldCount = this.state.ingredients[type];
         if(oldCount<=0){
             return;
         }
         const updatedCount = oldCount - 1;
         const updatedIngredient = {
             ...this.state.ingredients
         };
         updatedIngredient[type] = updatedCount;
         const priceDeduction = ingredientPrices[type]
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice - priceDeduction;
         this.setState({
             totalPrice: newPrice,
             ingredients:updatedIngredient
         })
    }
    orderNowHandler = ()=>
    {
       const  presentState = this.state.ordergiven;
       this.setState ({
           ordergiven : !presentState
       })

    }
    purchaseCancelHandler =() =>
    {   
        this.setState ({
            ordergiven : false
        })
    }
    orderFinalHandler = () =>
    {
        alert('Your Order Has Been Place !!!')
    }
    render()
    {
        return(
            <React.Fragment>
                {this.state.ordergiven?
                <Model show={this.state.ordergiven} modelClosed={this.purchaseCancelHandler}><OrderSummery ingredients={this.state.ingredients} Checkout={this.orderFinalHandler} cancelOrder={this.purchaseCancelHandler} price={this.state.totalPrice}></OrderSummery></Model>:null }
            <Burger  ingredients={this.state.ingredients}/>
            <BuildControls ingredientAdded={this.addIngredientHandler} ingredientRemoved={
                this.removeIngredientHandler}
                price={this.state.totalPrice}
                ordered={this.orderNowHandler}/>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;
