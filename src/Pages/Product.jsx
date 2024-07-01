import React, { useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from "../Features/CotnextProvide";


const Product = ({ product }) => {
    const { dispatch } = useContext(CartContext);

    const handleAddToCart = ({children}) => {
        dispatch({ type: "Add", product: product });
        alert("Successfully added")
        // toast("Successfully added")
    };
   
    return (
        <div className="col">
            <div className="card h-100">
                <img src={product.image} className="card-img-top h-80" alt="..." style={{height:"20rem",padding:"10px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    {/* <button className="btn btn-primary">Add to Cart</button> */}
                    <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Product;
