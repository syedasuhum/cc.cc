import React, { useEffect, useState } from "react"
import './cart.css'
import { addItem, deleteItem } from "../../Redux/Actions/cartActions"   //../Redux/Actions/cartActions
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import axios from "axios"
import useRazorpay from 'react-razorpay';


const Cart = ({ data }) => {
    const [productData, setProductdata] = useState([])
    const { cartData, cartTotal } = useSelector((state) => state.cart) || {}
    const dispatch = useDispatch()
    const [Razorpay] = useRazorpay();
    const base_url='http://localhost:3001/users'     
    
    
    useEffect(() => {
        const cart = localStorage.getItem('productDetails')
        console.log('cart',cart)
        let filterId
        if (cart !== null) {
            const cartItemIds = cart.split(",");
            if (cartItemIds.length > 0) {
                filterId = data?.filter((items) => cartItemIds?.some((id) => items.id === id))
                dispatch(addItem(filterId))
                
            }
        }
        setProductdata([...filterId])
    }, [data])
console.log(productData)
    const get = localStorage.getItem('productDetails')
    console.log('productData',productData)
    const handleProductremoval = (id) => {
        let cartItemIds = localStorage.getItem('productDetails').split(",");
        cartItemIds = cartItemIds.filter(element => element !== id);
        dispatch(deleteItem(id))
        localStorage.setItem('productDetails', cartItemIds);
    }

    const priceDetails = [
        {
            item: ''
        },
        {
            item: ''
        },
        {
            item: 'Product'
        },
        {
            item: 'Price'
        },
        {
            item: 'Quantity'
        },
        {
            item: 'Subtotal'
        }
    ]


    const handlePaymentStatus = async () => {
        try {
            // Dispatch action to store payment status
            const payload = {
                status: "PAYMENT PENDING",
            };
            // Store payment status data
            const response1 = await axios.post(`${'http://localhost:3001/users'} `, payload, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            console.log(response1.data);

            const options = {
                key: "rzp_test_LODgn3AQbr3k0A",
                amount: 50000,
                currency: "INR",
                name: "Bio Visuals",
                description: "some description",
                image: "/img/logo/logo.png",
                handler: async function (response) {
                    try {
                        console.log(response, "response");
                        const validatedata = {
                            paymentId: response.razorpay_payment_id,
                        };
                        // Dispatch action to validate payment data
                        const payload = {
                            status: "INSTALLATION PENDING",
                        };
                        // Store payment status data
                        const response2 = await axios.post(`${ 'http://localhost:3001/users' }`, {
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                            },
                        });
                        console.log(response2.data);
                    } catch (error) {
                        console.log(error);
                    }
                },
                prefill: {
                    name: "rajiv pathak",
                    email: "rajivpathak199@gmail.com",
                },
                notify: {
                    sms: true,
                    email: true,
                },
            };
            const rzp1 = new Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Error handling payment:", error);
        }
    };
console.log(get)
    if (get === 0) {
        return (
            <div className=" container">
                cart is empty please add products
            </div>
        )

    } else {
        return cartData && (
            <div className=" container">

                <div className="cart-price-details">
                    <h2>Shopping cart</h2>
                    <div>
                        <table >
                            <tr >
                                {
                                    priceDetails.map((value) => {
                                        return (
                                            <th key={Math.random()} className="cart-imag-title">{value.item}</th>
                                        )
                                    })
                                }
                            </tr>

                            {
                                cartData.map((value) => {
                                    return (

                                        <tr key={Math.random()} className="cart-imag-details">
                                            <td>
                                                <i className="fa-solid fa-xmark cursor" onClick={() => handleProductremoval(value.id)}></i>
                                            </td>
                                            <td>
                                                <Link to={`/${value.linkUrl}`}> <img src={value.img} alt="" /></Link>
                                            </td>
                                            <td>
                                                {value.details?.title}
                                            </td>
                                            <td>
                                                ₹{value.details?.paymentDetails[0]?.price}
                                            </td>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                ₹{value.details?.paymentDetails[0]?.price}

                                            </td>

                                        </tr>
                                    )
                                })
                            }

                        </table>

                    </div>
                    <div className="cart-total">
                        <h2>Cart total</h2>
                        <div>
                            <table>
                                <tr className="cart-total-price-border">
                                    <th className="table-heading">Subtotal</th>
                                    <td>{cartTotal}</td>
                                </tr>
                                <tr className="cart-total-price-border">
                                    <th className="table-heading">Shipping</th>
                                    <td>
                                        <p>Free Shipping</p>
                                        <p>Flat rate:10:00</p>
                                        <p>Pickup:15.00</p>
                                    </td>
                                </tr >
                                <tr >
                                    <th className="table-heading">Total</th>
                                    <td>{cartTotal}</td>
                                </tr>
                            </table>
                            <button onClick={() => handlePaymentStatus(cartData.id, cartData.price)}>Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cart;