import React from 'react';

import Header from '../../common/Header/header'
import Footer from '../../common/Footer/footer'

import Products from '../../catalog/Products'
import ShoppingCart from '../../catalog/ShoppingCart'
import Login from '../Login'

import {
    BrowserRouter as Router, Route, Link
} from 'react-router-dom'


const title = "Commercedotcom - Online Shopping"
const styles = {
    headerStyle: {
        textAlign: 'center',
        color: 'green',
        marginTop: 10
    }
}

const Menu = () => {
    return (
        <div className="">
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">E Bazaar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Product <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <Header style={styles.headerStyle}>{title}</Header>
                    <Route path='/' exact component={Products} />
                    <Route path='/cart' exact component={ShoppingCart} />
                    <Route path='/login' exact component={Login} />
                    <Footer>Copyright &copy; Commercedotcom</Footer>

                </div>
            </Router>
        </div>
    );
}

export default Menu;