import React, { useEffect, useState } from "react";
import './productPage.css';
import { useLocation } from "react-router-dom";
import { addItem } from "../Redux/Actions/cartActions";
import { useDispatch } from "react-redux";

const ProductPage = ({ data }) => {
    const [images, setImages] = useState([])
    const [productDiscription, setProductdiscription] = useState([])
    const [title, setTitle] = useState([])
    const [payment, setPayment] = useState([])
    const objectName = useLocation().pathname.split('/')[2]
    
    const [id, setId] = useState([])
    const dispatch = useDispatch()
   
    useEffect(() => {
        const productData = data.filter((value) => {
            return value.id === objectName
        })
        console.log('ddd')
        const productId = productData.map((value) => {
            return setId(value.id)
        })
        const productImag = productData.map((value) => {
            return setImages(value.details.images)
        })
        const productDiscription = productData.map((value) => {
            return setProductdiscription(value.details.discription)
        })
        const productTitle = productData.map((value) => {
            return setTitle(value.details.title)
        })
        const paymentDetails = productData.map((value) => {
            return setPayment(value.details.paymentDetails)
        })

    }, [data])



    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === images.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? images.length - 1 : slide - 1);
    };
    const handleProduct = () => {
        const get = localStorage.getItem('productDetails');
        localStorage.setItem("productDetails", `${id},${get}`);
        setTimeout(() => {
            dispatch(addItem(data, true))
        }, 500)
    }
    return (
        <div>
            <div className="container">

                <div className="details">
                    <h3>{title}</h3>
                    {
                        payment.map((value) => {
                            return (
                                <div key={Math.random()}>
                                    <p><span className="offer">({value.offer}% OFFER)</span> <span className="total-offer-price">₹ {value.price}</span></p>
                                    <p className="total-price"><del>M.R.P.: ₹{value.totalPrice}</del></p>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="contant">
                    <div>

                        {
                            images.map((val, idx) => {
                                return (
                                    <img
                                        src={val.img}
                                        alt=''
                                        key={idx}
                                        className={slide === idx ? "slide" : "slide slide-hidden"}
                                    />
                                )
                            })
                        }

                    </div>
                    <button onClick={prevSlide} className="next-arrow"><i className="fa-solid fa-arrow-left"></i></button >
                    <button onClick={nextSlide} className="priv-arrow"><i className="fa-solid fa-arrow-right"></i></button >
                </div>
                <div className="item-details">
                    <h3>Product Details</h3>
                    <ul>
                        {
                            productDiscription.map((value, idx) => {
                                return (
                                    <li key={idx}>{value.theory}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <div className="mail">Email <a href="#">ecommerce@gmail.com</a></div>
                    <div className="number"><a href="#">phonenumber</a></div>
                    <div>
                        <textarea id="w3review" name="w3review" rows="4" cols="85" placeholder="enter your requirements (size,color,etc..)"></textarea>
                    </div>
                </div>
                <div className="cart-buttons">
                    <button onClick={handleProduct}>ADD TO CART</button>
                </div>
            </div>


        </div>
    )
}

export default ProductPage;