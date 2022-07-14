import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product/product.component'
import {useSelector} from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';
import './category-preview.styles.jsx'
import { CategoryContainer, CategoryTitle } from './category-preview.styles.jsx';
import { categoriesIsLoading, selectCategoryMap } from '../../store/categorySelector';
import Spinner from '../../components/spinner/spinner.component'



function CategoryPreview() {

   const {category} = useParams();
   const categories = useSelector(selectCategoryMap)
   const isLoading = useSelector(categoriesIsLoading) 
   const [products, setProducts] = useState([])


   useEffect(()=> {
    setProducts(categories[category])

   }, [categories, category])


  return (
    <>
        <CategoryTitle> {category.toUpperCase()} </CategoryTitle>
        { 
          isLoading ?
            <Spinner /> 
            : 
            <CategoryContainer>
              { products && products.map(product =>  <ProductCard key={product.id} product={product} /> )}
            </CategoryContainer>
        }
    </>
  )
}

export default CategoryPreview