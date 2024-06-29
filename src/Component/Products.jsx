import React, { useState } from "react";
import Data from '../Database/db.json';
import Product from '../Pages/Product'; 

const Products = () => {
    const [products, setProducts] = useState(Data.products);
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {products.map((pro) => (
                    <Product key={pro.id} product={pro} /> 
                ))}
            </div>
        </div>
    );
}

export default Products;
