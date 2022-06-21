import React from 'react'
import './category-item.style.scss'


export default function CategoryItem({category}) {

    const {imageUrl, id, title} = category;

  return (
    <div className="category-container" key={id}>
          <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
          <div className="category-body-container">
              <h2> {title}</h2>
              <p> shop now </p>
          </div>
    </div>
  )
}