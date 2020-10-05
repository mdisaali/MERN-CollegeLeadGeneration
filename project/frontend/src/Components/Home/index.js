import React, { Component } from 'react'
import axios from 'axios'
import Product from '../Product'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: []
        };
    }


    componentDidMount() {
        alert("ftyfib");
        axios({
            "method": "GET",
            "url": "http://localhost:1337/products",
            "headers": {
                "content-type": "application/json"
            }
        }).then((products) => {
            alert("gufigfgy")
            this.setState(
                { product: [...products.data] }
            )
            alert(this.state.product)
        })
    }

    render() {
        const products = this.state.product;
        return (
            products.map((product) => <Product name={product.Name} imgUrl={product.Image != null ? product.Image.url : ''} description={product.Summary} />)
        )
    }
}
