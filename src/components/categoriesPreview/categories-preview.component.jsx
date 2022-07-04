import React, { Fragment, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.uttils';
import ProductCard from '../product/product.component';
import {useDispatch, useSelector} from 'react-redux'
import { setCategories } from '../../store/Actions/categoriesAction';
import './category-preview.styles.scss'
import { useNavigate } from 'react-router-dom';

function CategoryList() {

    const categories = useSelector(state => state.categories)
    const navigator = useNavigate()
 

  const NavigateToPreview = () => {

  }

  return (
     <>
        { categories &&
            Object.keys(categories).map( title => 
                <div className='category-preview-container' key={title}>
                <h2> <span className='title' onClick={()=>{navigator(`${title}`)}}> {title.toUpperCase()} </span></h2>
                <div className='preview'>
                    {categories[title].slice(0,4).map(product =>  <ProductCard key={product.id} product={product} />
                    )}
                    </div>
                </div>
            )
        }
    </>
  )
}

export default CategoryList