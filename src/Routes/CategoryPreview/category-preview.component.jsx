import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product/product.component'
import {useSelector} from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';


function CategoryPreview() {

   const {category} = useParams();
   const categories = useSelector(state => state.categories)

   const [products, setProducts] = useState([])


   useEffect(()=> {

    setProducts(categories[category])

   }, [categories, category])


  return (
    <div className='category-container'>
        {/* <h2 className='title'> {category} </h2> */}

        <div className='products-container'>
              { products && products.map(product =>  <ProductCard key={product.id} product={product} />
              )}
            </div>
        
    </div>
  )
}

export default CategoryPreview