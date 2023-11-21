// components/cartProducts/CartProducts.js
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import "./CartProducts.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
 
function calculateTotalPrice(cartProducts) {
  // `cartProducts` massivini qabul qilib, hamma maxsulotlarni hisoblovchi funksiya
  let totalPrice = 0;

  // Har bir maxsulot uchun umumiy narxi hisoblanadi va `totalPrice` ga qo'shiladi
  cartProducts.forEach((product) => {
    totalPrice += product.quantity * product.price;
  });

  // Qo'shilgan umumiy narxni qaytaradi
  return totalPrice;
}


function CartProducts({ data }) {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const heartData = useSelector((s) => s.addToHeart).map((i) => i.id);
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('carts') ) || []);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('carts')) || [];
    setProducts(storedProducts);
  }, []);


  

  const removeProduct = (id) => {
    const updatedCart = products.filter((product) => product.id !== id);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
    window.location.reload();
  };

  const handleDecrement = (id) => {
    const existProduct = products.find((product) => product.id === id);
    setQuantity(existProduct);

    if (existProduct?.quantity > 1) {
      const updatedCart = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

      localStorage.setItem("carts", JSON.stringify(updatedCart));
      setProducts(updatedCart);
    }
  };

  const handleClick = (item) => {
    const storedProducts = JSON.parse(localStorage.getItem('carts')) || [];
    const isExistProduct = storedProducts?.find((c) => c.id === item.id);
    setQuantity(isExistProduct);

    if (isExistProduct) {
      const updatedData = storedProducts.map((c) => {
        if (c.id === item.id) {
          return {
            ...c,
            quantity: c.quantity + 1,
          };
        }
        return c;
      });

      localStorage.setItem('carts', JSON.stringify(updatedData));
    } else {
      const updatedData = [...storedProducts, { ...item, quantity: 1 }];
      localStorage.setItem('carts', JSON.stringify(updatedData));
      setQuantity(updatedData);
    }
  };
  useEffect(() => {
		const total = products.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0);

		setTotal(total);
	}, [products]);

  const memoizedCartItems = useMemo(() => {
    return data?.map((item, index) => (
      <div key={index} className="cart_product_items">
      <div className="cart_product_items_img">
        <img src={item.images[0]} alt="/" />
      </div>
      <div className="cart_products_items_sale">
        <h3>{item.title} </h3>
        <input type="checkbox" />
        <p> Narxi  <h6> {item.quantity * item.price}</h6> so'm</p>
        <p>
          Sotuvchi: <span>alifshop</span>
        </p>
       
      </div>
      <div className="cart_products_cart_products_items_count">
        <div className="cart_products_cart_products_items_count_1">
          <button onClick={() => handleDecrement(item.id)}>
            <AiOutlineMinus className="AiOutlineMinus" />
          </button>
          <p>{quantity.id === item.id && quantity.quantity}</p>
          <button onClick={() => handleClick(item)}>
            <AiOutlinePlus className="AiOutlineMinus" />
          </button>
        </div>
      </div>
      <div className="cart_products_cart_products_items_trash">
        <Link to={"/cart"} onClick={() => removeProduct(item.id)}>
          <FaTrash></FaTrash>
          <span>Yo'q qilish</span>
        </Link>
        
        <s>{item.price + Math.ceil(item.price % 10)}</s>
      </div>
    </div>
    ));
  }, [data, heartData, dispatch, products, quantity]);

  return (
    <div className="home_cart_products container">
      
      <div className="cart_products">
        <div className="savat">
          <h2>
            Savat <span>{data?.length} mahsulot</span>
          </h2>
          <div className="chek">
            <p>Hammasini yechish</p>
            <input type="checkbox" />
          </div>
       
        </div>
        {memoizedCartItems}
      </div>
      <div className="order">
        <div className="place_an_order">
        <div className="order_price">
            <span>Jami:</span>
            <b>{total + 10000} so'm</b>
          </div>
         
        </div>
        <div className="order_product">
        <h4>
            tovarlar soni: <span>{data?.length} dona </span>
          </h4>
          <h4>yetkazib berish  <span>Bepul</span>  </h4>
          <span>eshikkacha O'zbekiston boylab 1 2 kun</span>
          
          
          <button >Muddatli to'lovga olish </button>
          <button>karta orqali sotib olish </button>
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
