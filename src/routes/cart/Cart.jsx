import React from 'react'
import Header from '../../components/header/Header';
import PopularProducts from '../../components/popularProducts/PopularProducts';
import Footer from '../../components/footer/Footer';
import AddProducts from '../../components/addProducts/AddProducts';
import CartProducts from '../../components/cartProducts/CartProducts';

function Cart() {
    let cartData = JSON.parse(localStorage.getItem('carts'));


    document.title = "Savat - alifshop"
    return (
        <div className='cart container'>
            <div className='container'>
                <Header />
                {
                    cartData.length ?
                        <CartProducts data={cartData} />
                        :
                        <AddProducts />
                }
                <Footer />
            </div>
        </div>
    )
}

export default Cart
