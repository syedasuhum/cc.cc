import React, { useEffect, useState } from "react";
import './home.css'

import Products from "./Products";
import { Link } from "react-router-dom";
const HomePage = ({ data }) => {

    const [cateGory, setCatogory] = useState('')
    
    console.log('data',data)
    const productItems = data?.filter((value) => {
        if (cateGory === '') {
            return data
        } else {
            return value.category === cateGory
        }
    })
    console.log('productDataproductData',productItems)
    const catogoryItems = [
        {
            item: 'ALL',
            category: ''
        },
        {
            item: "MEN'S",
            category: 'men'
        },
        {
            item: "WOMEN'S",
            category: 'women'
        },
        {
            item: "WATCHE'S",
            category: 'watches'
        },
        {
            item: "HEADSETS",
            category: 'headsets'
        }
    ]

    return (
        <div className="container">

            <div className="category-items">
                {
                    catogoryItems.map((value) => {
                        return <div onClick={() => setCatogory(value.category)} key={Math.random()} className="pointer">{value.item}</div>
                    })
                }
            </div>
            <Products pItems={productItems}  />
            <div className="navbar-cart">
                <div>
                    <img src="https://pcp-img3.cc.cc/share/img/cccc-store-id-yellow-logo.png" alt="" />
                </div>
                <div>
                    <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;