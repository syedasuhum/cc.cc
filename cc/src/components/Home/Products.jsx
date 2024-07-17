import React from "react"
import './home.css'
import { Link } from "react-router-dom"
const Products = ({ pItems }) => {
 
 console.log('hhhhh',pItems)
    return (
        <div className="product-items">
            {
                pItems?.map((value, index) => {
                    return (
                        <Link to={`/${value.linkUrl}`} key={Math.random()} >
                            <div className="products pointer"  >
                                <img src={value.img} alt={`img-${index}`} />
                                <p className="price">7$</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )   
}

export default Products