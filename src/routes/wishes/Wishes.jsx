import React from 'react'
import './Wishes.css'
import PopularProducts, { popularProduct } from '../../components/popularProducts/PopularProducts'
import Sorted from '../../components/sorted/Sorted'
import Header from '../../components/header/Header'

function Wishes() {
  return (
    <div className='wishes container'>
      <Header/>
      {
       !popularProduct.length 
          ?
          <Sorted/> 
          :
          <PopularProducts/>
        
      }
    </div>
  )
}

export default Wishes