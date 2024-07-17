import React, { useState } from "react";

import "../Assets/css/css/Carousel.css"
// import Container from '@mui/material/Container';

const Carosel = ({ images }) => {


    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    const data = [
        {
            "img": "https://fazena.myshopify.com/cdn/shop/files/slider-1.jpg?v=1614330438",
            "active": true,
            "categories": "carosel1"
        },
        {
            "img": "https://fazena.myshopify.com/cdn/shop/files/slider-3.jpg?v=1614330438",
            "active": false,
            "categories": "carosel1"
        },
    ]
    return (
 

        <div className="carousel">


            <img onClick={prevSlide} className=" arrow arrow-left" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5MCA5MCI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIGlkPSJFbGxpcHNlXzQiIHg9IjAiIHk9IjAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGZlT2Zmc2V0IGR5PSI0IiBpbnB1dD0iU291cmNlQWxwaGEiLz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNyIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAuMTYxIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBvcGVyYXRvcj0iaW4iIGluMj0iYmx1ciIvPgogICAgICA8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUdyYXBoaWMiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8ZyBpZD0iR3JvdXBfMjIiIGRhdGEtbmFtZT0iR3JvdXAgMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3MyAtNTMwKSByb3RhdGUoMTgwKSI+CiAgICA8ZyBpZD0iR3JvdXBfMjEiIGRhdGEtbmFtZT0iR3JvdXAgMjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwNCAtNTk1KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KC0xLCAwLCAwLCAtMSwgNjksIDY1KSIgZmlsdGVyPSJ1cmwoI0VsbGlwc2VfNCkiPgogICAgICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNC0yIiBkYXRhLW5hbWU9IkVsbGlwc2UgNCIgY3g9IjI0IiBjeT0iMjQiIHI9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2OSA2NSkgcm90YXRlKDE4MCkiIGZpbGw9IiNmZmYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iUmlnaHRfMjRweCIgZGF0YS1uYW1lPSJSaWdodCAyNHB4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMSAxNykiPgogICAgICAgIDxwYXRoIGlkPSJMaW5lIiBkPSJNMCwwLDcsNywwLDE0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmNDcwMjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
            {data.map((item, idx) => {
                return (
                    <img
                        src={item.img}
                        alt=''
                        key={idx}
                        className={slide === idx ? "slide" : "slide slide-hidden"}
                    />
                );
            })}


            <img className=" arrow arrow-right" onClick={nextSlide} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5MCA5MCI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIGlkPSJFbGxpcHNlXzQiIHg9IjAiIHk9IjAiIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPGZlT2Zmc2V0IGR5PSI0IiBpbnB1dD0iU291cmNlQWxwaGEiLz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNyIgcmVzdWx0PSJibHVyIi8+CiAgICAgIDxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAuMTYxIi8+CiAgICAgIDxmZUNvbXBvc2l0ZSBvcGVyYXRvcj0iaW4iIGluMj0iYmx1ciIvPgogICAgICA8ZmVDb21wb3NpdGUgaW49IlNvdXJjZUdyYXBoaWMiLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8ZyBpZD0iR3JvdXBfMjIiIGRhdGEtbmFtZT0iR3JvdXAgMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODMgNjEyKSI+CiAgICA8ZyBpZD0iR3JvdXBfMjEiIGRhdGEtbmFtZT0iR3JvdXAgMjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwNCAtNTk1KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIC0yMSwgLTE3KSIgZmlsdGVyPSJ1cmwoI0VsbGlwc2VfNCkiPgogICAgICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNC0yIiBkYXRhLW5hbWU9IkVsbGlwc2UgNCIgY3g9IjI0IiBjeT0iMjQiIHI9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMSAxNykiIGZpbGw9IiNmZmYiLz4KICAgICAgPC9nPgogICAgICA8ZyBpZD0iUmlnaHRfMjRweCIgZGF0YS1uYW1lPSJSaWdodCAyNHB4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMSAxNykiPgogICAgICAgIDxwYXRoIGlkPSJMaW5lIiBkPSJNMCwwLDcsNywwLDE0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmNDcwMjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjgiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==" alt="" />
            <span className="indicators">
                {data.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx ? "indicator active-indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })}
            </span>
        </div>
       


    );
}

export default Carosel;