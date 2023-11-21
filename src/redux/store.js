import { configureStore } from '@reduxjs/toolkit'
import katalog from './katalog'
import addToHeart from './addToHeart'

export const store = configureStore({
    reducer: {
       
        katalog,
        addToHeart
    }
})




// import { configureStore } from "@reduxjs/toolkit";
// import addToCart from "./addToCart";

// const store = configureStore({
//     reducer: {
//         addToCart,
//     }
// })

// export default store