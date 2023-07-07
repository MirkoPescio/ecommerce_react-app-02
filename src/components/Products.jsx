import React from 'react'
import './css/products.css'

import { popularProducts } from '../data.js'
import Product from './Product'

const Products = () => {
  return (
    <div className='products'>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Products
