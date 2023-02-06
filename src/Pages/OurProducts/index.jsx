import React from "react";
import Product from "../../Components/Product";
import "./OurProducts.scss"

const OurProducts = () => {

    return(

        <div className="container__ourProducts" id="products">
            <div className="container__ourProducts-title">
                <span>Products & Services</span>
                <h2>Our Products</h2>
            </div>
            <Product />
        </div>
    )
}

export default OurProducts;