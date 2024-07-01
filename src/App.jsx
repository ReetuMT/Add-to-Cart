import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Component/Navbar';
import Products from './Component/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/" element={<Products />} />
                </Routes>
            </div>
            {/* <ToastContainer /> */}
        </BrowserRouter>
    );
}

export default App;
