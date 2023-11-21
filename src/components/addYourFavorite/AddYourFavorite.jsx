import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import "./AddYourFavorite.css";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cards from "../cards/card_item1/CardItem1";

const textAnimate = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function AddYourFavorite() {
  let heartData = useSelector((s) => s.addToHeart);

  document.title =
    "Uzum - mahsulotlari kunning ertasiga yetkazib beriladigan ilk Oʻzbekiston savdo maydoni";
  const [addYourFovarite, setAddYourFovarite] = useState(false);

  return heartData.length ? (
    <Cards data={heartData} />
  ) : (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="add_your_favorite"
    >
      
      <motion.h1 custom={2} variants={textAnimate}>
      Saralangan mahsulotlar <br />
       ro'yxati xozircha bo'sh
      </motion.h1>
      <motion.span custom={3} variants={textAnimate}>
      uzoq vaqt qidirmaslik uchun o'zingizga yoqqan <br />
       tovarlarni saqlang
      </motion.span>
      <motion.button 
      className=" favourite_btn"
        custom={4}
        variants={textAnimate}
        onClick={() =>
          setAddYourFovarite(
            !addYourFovarite,
            (document.body.style.overflow = "hidden")
          )
        }
      >
        katalogga otish
      </motion.button>

      {addYourFovarite && (
        <div className="add_acount">
          <div className="acoun_cart">
            <button
              onClick={() =>
                setAddYourFovarite(
                  !addYourFovarite,
                  (document.body.style.overflowY = "auto")
                )
              }
              className="add_acount_none"
            >
              <FiX className="add_acount_none_x" />
            </button>
            <h2>Telefon raqamini kiriting</h2>
            <p>Tasdiqlash kodini SMS orqali yuboramiz</p>
            <input type="text" placeholder="+998 00 000 00 00" />
            <input type="button" value="Kodni olish" className="btn" />
            <span>
              Avtotizatsiyadan o'tish orqali siz{" "}
              <Link target="blank" to={"/privacy-policy-uz.html"}>
                shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik
                bildirasiz
              </Link>
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default memo(AddYourFavorite);
