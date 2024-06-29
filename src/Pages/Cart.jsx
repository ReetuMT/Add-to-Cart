import React, { useContext } from "react";
import CartProduct from "../Component/CartProduct";
import { CartContext } from "../Features/CotnextProvide";
CartContext

const Cart = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-8">
                    {cart.map((prod) => (
                        <CartProduct key={prod.id} product={prod} />
                    ))}
                </div>
               
            </div>
        </div>
    );
};

export default Cart;
