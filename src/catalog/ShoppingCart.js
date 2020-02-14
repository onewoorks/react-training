import React from 'react'
import Axios from 'axios'

import { connect } from 'react-redux'


class ShoppingCart extends React.Component{
    state = {
        cart_items: []
    }

    componentDidMount(){
        Axios.get('http://localhost:3007/shopping_cart')
        .then(response=>{
            this.setState({
                cart_items: response.data
            })
        })
    }

    render_table = () => {
        let items = []
        this.state.cart_items.forEach((k,v)=>{
            items.push(
                <tr>
                    <td>
                        <img src={k.cart_item.product.photo} className="img-thumbnail" alt={k.cart_item.product.name} />
                    </td>
                    <td>
                        {k.cart_item.product.name}
                    </td>
                </tr>
            )
        })
        return items
    }

    render(){
        return(
            <div>
                <div>Shopping Cart</div>
                <div>{this.props.username}</div>
                <div>{this.props.password}</div>
                <table className="table table-bordered">
                    {this.render_table()}
                </table>
            </div>
            
        )
    }
    
}

const mapPropsToState = state => {
    return {
        username: state.username,
        password: state.password
    }
}

export default connect(mapPropsToState)(ShoppingCart)