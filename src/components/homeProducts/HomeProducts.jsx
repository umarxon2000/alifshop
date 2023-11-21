import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeProducts.css";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { AiFillHeart } from "react-icons/ai";
import { TbShoppingBagPlus } from "react-icons/tb";
import Header from "../header/Header";
import { useParams } from "react-router-dom";
import data from "../../static/bannerDataElektronik";
import { useDispatch, useSelector } from "react-redux";
import { Add_To_Heart } from "../../redux/addToHeart";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

function HomeProducts() {
  let { id } = useParams();
  const [imgIndex, setImgIndex] = useState(0);
  const [credit, setCredit] = useState(false);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("carts")) || [];
    setProducts(storedProducts);
    console.log(storedProducts);
  }, []);

  // add to heart button
  const dispatch = useDispatch();
  const heartData = useSelector((s) => s.addToHeart).map((i) => i.id);

  //  hamma datalarni ichidan single dataga mosini olyapmiz
  let singleData = data?.find((i) => i.id.toString() === id);
  console.log(singleData);

  let prices = singleData?.price;
  let link = " < bosh sahifa";

  const [count, setcount] = useState(1);
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
      setQuantity({ id, quantity: existProduct.quantity - 1 });
    }
  };

  const handleClick = (item) => {
    setQuantity(item);

    const storedProducts = JSON.parse(localStorage.getItem("carts")) || [];
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

      localStorage.setItem("carts", JSON.stringify(updatedData));
      setQuantity({ id: item.id, quantity: isExistProduct.quantity + 1 });
    } else {
      const updatedData = [...storedProducts, { ...item, quantity: 1 }];
      localStorage.setItem("carts", JSON.stringify(updatedData));
      setQuantity({ id: item.id, quantity: 1 });
    }

    toast("Product added to your bag!");
  };
  let price = prices * count;

  return (
    <div className="single_pages_parts container">
      <Header />
      <div className="homeproducts">
        <Link to={"/"}>
          <h3>{link} </h3>
        </Link>
        <div className="homeproducts_boxs">
          <div className="homeproducts_boxs_left">
            <div className="homeproducts_boxs_left_carousel">
              <div className="homeproducts_boxs_left_carousel_left">
                {singleData?.images?.map((img, index) => (
                  <div
                    onClick={() => setImgIndex(index)}
                    key={index}
                    className="homeproducts_boxs_left_carousel_left_img"
                  >
                    <img
                      src={img}
                      alt={singleData?.title}
                      title={singleData?.title}
                    />
                  </div>
                ))}
              </div>
              <div className="homeproducts_boxs_left_carousel_right">
                <div className="homeproducts_boxs_left_carousel_right_imgs">
                  <img src={singleData?.images[imgIndex]} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="homeproducts_boxs_right">
            <div className="homeproducts_boxs_right_header">
              <div className="homeproducts_boxs_right_header_text">
                <p>
                  <AiFillStar /> 4.9( 38 baho ){" "}
                </p>
                <p>600 ta buyurtma</p>
              </div>
            </div>
            <h2>{singleData?.description}</h2>
            <h3>
              <span>{price} / birlik </span> <s>{price * 1.5}</s>
            </h3>
            <div className="single-prices__product">
              <div className="muddatlitolov">
                <p>Muddatli to'lovga sotib olish </p>
                <h2>{credit ? credit : prices}</h2>
              </div>
              <div className="toliqnarxi">
                <p>Narx</p>
                <h2>{price}</h2>
                <s>{prices + Math.ceil(prices % 10)}</s>
              </div>
            </div>
            <div className="btn">
              <button onClick={() => setCredit(Math.ceil(prices / 3 + 30000))}>
                3<span className="oyiga">oyiga</span>
              </button>
              <button onClick={() => setCredit(Math.ceil(prices / 6 + 60000))}>
                6<span className="oyiga">oyiga</span>
              </button>
              <button onClick={() => setCredit(Math.ceil(prices / 9 + 90000))}>
                9<span className="oyiga">oyiga</span>
              </button>
              <button
                onClick={() => setCredit(Math.ceil(prices / 12 + 120000))}
              >
                12
                <span className="oyiga">oyiga</span>
              </button>
              <button
                onClick={() => setCredit(Math.ceil(prices / 24 + 240000))}
              >
                24
                <span className="oyiga">oyiga</span>
              </button>
            </div>

            <div className="addcart__vs__heart">
              {products.some((c) => c.id === singleData.id) ? (
                <div className="shopcartbtndiv">
                  <button
                    className="shopcartbtn"
                    onClick={() => handleDecrement(singleData.id)}
                  >
                    -
                  </button>
                  <p>{quantity.id === singleData.id && quantity.quantity}</p>
                  <button
                    className="shopcartbtn"
                    onClick={() => handleClick(singleData)}
                  >
                    +
                  </button>
                  <Link to={"/cart"}>
                    <button className="shopcartbtn">
                      <TbShoppingBagPlus className="shopicon" />
                      savatga
                    </button>
                  </Link>
                </div>
              ) : (
                <button
                  className="shopcartbtn"
                  onClick={() => handleClick(singleData)}
                >
                  <TbShoppingBagPlus className="shopicon" />
                  savatga
                </button>
              )}

              <button
                className="single__heart"
                onClick={() => dispatch(Add_To_Heart({ pro: singleData }))}
              >
                {heartData.some((i) => i.d === singleData.id) ? (
                  <AiFillHeart className="heart full" />
                ) : (
                  <AiOutlineHeart className="heart" />
                )}
              </button>
            </div>

            <div className="homeproducts_boxs_right_header_text_products_user_indx">
              <p>
                <SlBasket /> Bu haftada <span>134</span> kishi sotib oldi
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sharx_page">
        <div className="sharx_page_header1">
          <div className="sharx_page_header1_items">
            <a href="/">Mahsulot tavsifi</a>
          </div>
        </div>
        <div className="sharx_page_banner_pagess">
          <p>{singleData?.fullinfo}</p>
        </div>
      </div>
      <div className="header_bottom_pages">
        <div className="header_bottom_pages_price">
          <p>Narx umumiy:</p>
          <p>{price} so'm</p>
        </div>

        <button className="header_bottom_page_bottoms">Savatga </button>
      </div>
    </div>
  );
}

export default HomeProducts;
