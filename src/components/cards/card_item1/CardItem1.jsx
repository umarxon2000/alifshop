import React, { useEffect, useState, useMemo, memo } from 'react';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { AiFillHeart, AiOutlineHeart, AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import AOS from 'aos';
import { Add_To_Heart } from '../../../redux/addToHeart';
import 'aos/dist/aos.css';
import './CardItem1.css';

function CardItem1({ data, componentName }) {
  const dispatch = useDispatch();
  const heartData = useSelector((s) => s.addToHeart).map((i) => i.id);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('carts')) || [];
    setProducts(storedProducts);
  }, []);

 

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
    } 
        

      );

      localStorage.setItem("carts", JSON.stringify(updatedCart));
      setProducts(updatedCart);
    }
  };

  useEffect(() => {
    AOS.init({ delay: 4 });
  }, []);

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

    toast('Product added to your bag!');
  };

  const memoizedCardItems = useMemo(() => {
    return data?.slice(0, 10)?.map((item, index) => (
      <div data-aos="zoom-in" key={index} className="cardItem">
        {
          heartData.some(i => i === item.id) ?
            <AiFillHeart className='heart full' onClick={() => dispatch(Add_To_Heart({ pro: item }))} />
            :
            <AiOutlineHeart className='heart' onClick={() => dispatch(Add_To_Heart({ pro: item }))} />
        }
        <Link className='imagessss' to={`/single-page/${item.id}`}>
          <div className="imageeee">
            <img src={item.images[0]} alt="" />
          </div>
        </Link>
        <p>{item.title.length > 50 ? item.title.slice(0, 50) + "..." : item.title}</p>
        <h4 className='product_name'>{item.description}</h4>
        <p className='sariq'>{Math.ceil(item.price / 12)} so'm oyiga</p>
        <div className="productPrice">
          <div className='price'>
            <s>{item.price + Math.ceil((item.price % 10))} so'm </s>
            <b>{item.price} so'm</b>
          </div>
          {products.find(c => c.id === item.id) ? (
            <div className="shopcartbtndiv">
              <button className="shopcartbtn" onClick={() => handleDecrement(item.id)}>-</button>
              <p>{quantity.id === item.id && quantity.quantity}</p>
              <button className="shopcartbtn" onClick={() => handleClick(item)}>+</button>
            </div>
          ) : (
            <button className="shopcartbtn" onClick={() => handleClick(item)}>
              <TbShoppingBagPlus className="shopicon" />
              savatga
            </button>
          )}
        </div>
      </div>
    ));
  }, [data, heartData, dispatch, products, quantity]);

  return (
    <div className='CardItem1'>
      <div className="cardtitle">
        <h1>{componentName} <AiOutlineRight /> </h1>
      </div>
      <div className="cards">
        {memoizedCardItems}
      </div>
    </div>
  );
}

export default memo(CardItem1);
