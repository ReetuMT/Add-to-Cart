import React, { useContext } from 'react';
import { CartContext } from '../Features/CotnextProvide';


const CartProduct = ({ product }) => {
    const { cart, dispatch } = useContext(CartContext);

    const increase = (id) => {
        const index = cart.findIndex(p => p.id === id);
        if (cart[index].qty < 10) {
            dispatch({ type: "Increase", id });
        }
    };

    const decrease = (id) => {
        const index = cart.findIndex(p => p.id === id);
        if (cart[index].qty > 1) {
            dispatch({ type: "Decrease", id });
        }
    };

    const remove = (id) => {
        dispatch({ type: "Remove", id });
    };

     return (
        <div className="d-flex mb-3 border mt-3 p-3" style={{borderRadius:20}}>
            <img src={product.image} alt="" className="img-thumbnail" style={{ width: '150px', height: '200px'  }} />
            <div className="detail ms-3" style={{color:"white",fontWeight:900}}>
                <h4>{product.title}</h4>
                <h4>${product.price}</h4>
                <div className="buttons my-2">
                    <button className="btn btn-outline-secondary rounded-circle px-2" onClick={() => increase(product.id)}><b>+</b></button>
                    <button className="btn btn-outline-secondary mx-2">{product.qty}</button>
                    <button className="btn btn-outline-secondary rounded-circle px-2" onClick={() => decrease(product.id)}><b>-</b></button>
                </div>
                <button className="btn btn-danger" onClick={() => remove(product.id)}>Remove</button>
            </div>
            
        </div>
    );
};

export default CartProduct;
