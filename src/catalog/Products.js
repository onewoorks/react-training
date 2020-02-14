import React from 'react'
import axios from 'axios'

import Product from './Product'
import {
    Link
} from 'react-router-dom'

export default class Products extends React.Component {

    state = {
        isGallery: true,
        searchResult: false,
        shopping_cart: [],
        products: []
    }

    componentDidMount() {
        axios.get(
            'http://localhost:3007/products'
        ).then(response => {
            this.setState({
                products: response.data
            })
        })

        this.check_cart_items()
    }

    show_product = () => {
        let product_html = []
        this.state.products.forEach((element, key) => {
            let column_size = this.state.isGallery ? 4 : 12
            let margin_bottom = this.state.isGallery ? 4 : 2
            product_html.push(
                <div key={key} className={`col-${column_size} mb-${margin_bottom}`} >
                    <Product data={element} viewStyle={this.state.isGallery} click={this.add_to_card} />
                </div>
            )
        })
        return product_html
    }

    change_view = () => {
        this.setState({
            isGallery: !this.state.isGallery
        })
    }

    check_cart_items = () => {
        axios.get('http://localhost:3007/shopping_cart')
            .then(response => {
                this.setState({
                    shopping_cart: response.data
                })
            }
            )
    }

    handle_search = (e) => {
        let start_letter = e.target.value
        let expression = new RegExp('^' + start_letter, "i")
        let results = this.state.products.filter((product) => {
            return expression.test(product.name)
        })
        this.setState({
            searchResult: results
        })
    }

    add_to_server_cart = (cart_item) => {
        axios.post(
            'http://localhost:3007/shopping_cart/', {
            cart_item
        }
        ).then(response => {
            console.log('send to server')
        })
    }

    add_to_card = (product, required_quantity) => {
        let shopping_cart = this.state.shopping_cart
        shopping_cart.push({
            product, required_quantity
        })
        let cart_data = {
            product: product,
            buy_quantity: required_quantity
        }
        this.add_to_server_cart(cart_data)
        this.setState({
            shopping_cart: shopping_cart
        })

    }

    search_list = () => {
        // let product_html = ""
        // if (!this.state.searchResult) {
        //     this.state.searchResult.map((element, key) => {
        //         console.log("o")
        //         let column_size = this.state.isGallery ? 4 : 12
        //         let margin_bottom = this.state.isGallery ? 4 : 2
        //         product_html.push(
        //             <div key={key} className={`col-${column_size} mb-${margin_bottom}`} >
        //                 <Product data={element} viewStyle={this.state.isGallery} />
        //             </div>
        //         )
        //     })
        // }
        // console.log(product_html)
        // return product_html
    }

    render() {
        return (
            <div>
                <div className="row mb-4 no-gutters">
                    <div className="col-9">
                        <input type="text" className="form-control"
                            onChange={this.handle_search}
                        />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-block btn-success" onClick={this.change_view}> List</button>
                    </div>

                    <div className="col-2">
                            <Link to='/cart'>
                                <button className="btn btn-block btn-warning">Cart
                            <span> {this.state.shopping_cart.length}</span>
                                </button>
                            </Link>

                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        {this.search_list()}
                    </div>
                </div>
                <div className="row">
                    {this.show_product()}
                </div>
            </div>

        )
    }
}