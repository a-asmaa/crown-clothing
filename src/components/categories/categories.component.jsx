import React from 'react'
import CategoryItem from '../category-item/category-item.component'
import './categories.styles.scss'


function CategoriesMenu({categories}) {
  return (
    <div className="categories-container">
    {categories.map(cat => <CategoryItem category={cat}/>
    )}
  </div>
  )
}

export default CategoriesMenu