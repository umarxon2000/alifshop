import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BiUser } from "react-icons/bi"
import { FiX } from "react-icons/fi";
import { katalogData } from "../../static/headerData";
import { HiBars3 } from "react-icons/hi2";
import { CiHome } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_CATALOG } from "../../redux/katalog";
import RegisterForm from "../Register/Register";
import data from "../../static/bannerDataElektronik";
import { MdOutlineContentPasteSearch } from "react-icons/md";


function Header() {
  const dispatch = useDispatch();
  const heartData = useSelector((s) => s.addToHeart).map((i) => i.id);
  const catalogState = useSelector((s) => s.katalog);
  const [openRegister, setOpenRegister] = useState(false);
  let ism = JSON.parse(localStorage.getItem("user"))?.name;
  let cartData = JSON.parse(localStorage.getItem('carts'));

  const [searchResult, setSearchResult] = useState(null);

  function search(value) {
    if (!value) {
      return setSearchResult(null);
    }
    let result = data.filter((i) =>
      i.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResult(result);
  }
  console.log(searchResult);

  return (
    <header  >
      <div className="header_container">
       
        <div className="header_logodiv">
         
          <Link to={"/"} className="link_log">
            <img className="" src={logo} alt="" />
          </Link>
        </div>

        <button
          onClick={() => dispatch(OPEN_CATALOG())}
          className="header_katalogbtn"
        >
          {catalogState ? <FiX /> : <FaBars />}
          <span className="tovarlar_katalogi_span">

          tovarlar catalogi
          </span>
        </button>
        {/* -------- katalog -------------- */}

        {catalogState && (
          <div className="catalog_wrapper">
            {katalogData.map((katalogItem, index) => (
              <div key={index} className="catalog_wrapper_item">
                <p>{katalogItem.title.titleName}</p>
                <div className="catalog_wrapper_item_section">
                  <div className="catalog_wrapper_item_section_links">
                    {katalogItem.collection.map((item, index) => (
                      <div key={index}>
                        <h4>{item.collectionItemName}</h4>
                        <ul>
                          {item.collectionItemLinks.map((link_item, index) => (
                            <li key={index}>
                              <Link to={"/"}>{link_item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="header_searchbar">
          <input
            type="search"
            placeholder="tovarlarni qidirish "
            onChange={(e) => search(e.target.value)}
          />
          <button className="searchbtn">
            <GoSearch />
          </button>

          <div
            className="searchResult"
            style={{ display: searchResult?.length ? "flex" : "none" }}
          >
            {searchResult?.map((item, index) => (
              <Link to={`/single-page/${item.id}`} key={index}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        {openRegister && <RegisterForm setOpenRegister={setOpenRegister} />}
        
        <Link to={"/cart"} className="header_links ">
          {
            cartData?.length ?  <span className="cart_index">{cartData?.length}</span> : <p></p>
          }
          <span className="cart_index">{cartData?.length}</span>
            <BsCart className="shopiconcart icon" />
            <span >Savat</span>
          </Link>
         

          <Link to={"/heart"} className="header_links heart__link ">
          {heartData?.length ?  <AiFillHeart className="shopiconcart icon"/> : <AiOutlineHeart className="shopiconcart icon" /> }
            <span >Sevimlilar</span>
          </Link>

         

          
          <button
            onClick={() => setOpenRegister(!openRegister)}
            className=" btn_register"
          >
            <span className="header-user-text">{ism ? ism : "Kirish"}</span>
          </button>
        </div>
     
      {/* <Sidebar /> */}
      <div className="footerbar">
        <NavLink to={"/"} className="footerbar_btn">
        <CiHome />
        <span>asosiy</span>
        </NavLink>
        <NavLink to={'/catalog'} className="footerbar_btn" >
        <MdOutlineContentPasteSearch className="shopkatalog_icon"   />
        <span>katalog</span>
        </NavLink>
        <NavLink to={"/cart"} className="footerbar_btn">
          <span className="cart_index">{cartData?.length}</span>
            <BsCart className="shopcart_icon" />
            <span >Savat</span>
          </NavLink>
        <NavLink to={"/heart"} className="footerbar_btn  ">

            <AiOutlineHeart className="shopheart_icon" />
            <span >Sevimlilar</span>
          </NavLink>
          <button
            onClick={() => setOpenRegister(!openRegister)}
            className=" footerbar_btn">
            <span className="header-user-text">{ism ? ism : <BiUser/>}</span>
          </button>
      </div>
    </header>
  );
}

export default Header;
