import React from 'react'
import './AddProducts.css'
import { Link } from 'react-router-dom'

function AddProducts() {
  return (
    <div className='add_products'>
      
      <h1>Savat hozircha boʻsh</h1>
      <p>Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan foydalaning</p>
     
      <Link to={'/'} >
      <button className='katalog_products'  >katalogga otish</button>
     </Link>
     
     <Link to={'/'} >
      <button className='katalog_products_btn'>Bosh sahifa</button>
     </Link>
    </div>
  )
}

export default AddProducts
