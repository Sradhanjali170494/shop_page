import React, { Component } from 'react'
import Item from './Item'

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems:props.cartItems
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            cartItems:newProps.cartItems
        })
    }

    removeFromCart=(item)=>{
        console.log(item)
        this.props.removeFromCart(item)
    }

    render() {
        return (
            <React.Fragment>
                <h1>Cart</h1>
                {
                    this.state.cartItems.map((item)=>{
                        return <Item key={item.id} item={item} removeFromCart={this.removeFromCart} isCart={true}/>
                    })
                }
            </React.Fragment>

        )
    }
}

export default Cart; 