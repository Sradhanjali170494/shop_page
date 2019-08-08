import React, { Component } from 'react'

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item,
            isCart: props.isCart
        }
    }

    addToCart = () => {
        this.props.addItemToCart(this.state.item)
    }

    removeFromCart=()=>{
        this.props.removeFromCart(this.state.item)
    }

    render() {
        return (
            <React.Fragment>
                <h3>{this.state.item.name}</h3>
                <h4>Price:{this.state.item.price}</h4>
                
                {
                    (this.state.isCart) ?
                    (<p>Quantity:{this.state.item.qty}</p>) :
                    ("")
                }
                {
                    (this.state.isCart) ?
                        (<button onClick={this.removeFromCart}>Remove</button>) :
                        (<button onClick={this.addToCart}>Add to cart</button>)
                }

            </React.Fragment>

        )
    }
}

export default Item; 