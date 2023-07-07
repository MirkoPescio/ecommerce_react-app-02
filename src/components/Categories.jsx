import React from 'react'
import './css/categories.css'

import { categories } from '../data.js'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className='categories'>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </div>
  )
}

export default Categories
