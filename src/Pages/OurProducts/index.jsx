import React from "react";
import Product from "../../Components/Product";
import "./OurProducts.scss"

const OurProducts = () => {

    return(

        <div className="container__ourProducts" id="products">
            <div className="container__ourProducts-title">
                <span className="section-title">Products & Services</span>
                <h2>WEBSITE IN PROGRESS</h2>
            </div>
            <Product />
        </div>
    )
}

export default OurProducts;