import React from 'react'
import './css/categoryItem.css'


const CategoryItem = ({item}) => {
  return (
    <div className='categoryItem'>
        <img className='categoryItem__image' src={item.img} alt={item.img} />
        <div className='categoryItem__info'>
            <h2 className='categoryItem__info__title'>{item.title}</h2>
            <button className='categoryItem__info__button'>Ver</button>
        </div>
    </div>
  )
}

export default CategoryItem
