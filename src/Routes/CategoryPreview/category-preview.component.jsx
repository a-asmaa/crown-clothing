import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product/product.component'
import {useSelector} from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';
import './category-preview.styles.jsx'
import { CategoryContainer, CategoryTitle } from './category-preview.styles.jsx';

function CategoryPreview() {

   const {category} = useParams();
   const categories = useSelector(state => state.categories)

   const [products, setProducts] = useState([])


   useEffect(()=> {

    setProducts(categories[category])

   }, [categories, category])


  return (
    <>
        <CategoryTitle> {category.toUpperCase()} </CategoryTitle>
        <CategoryContainer>
                { products && products.map(product =>  <ProductCard key={product.id} product={product} />
                )}
        </CategoryContainer>
    </>
  )
}

export default CategoryPreview