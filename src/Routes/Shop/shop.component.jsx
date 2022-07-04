import React, { Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import ProductCard from '../../components/product/product.component';
import { ProductContext } from '../../contexts/products.context'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.uttils';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CategoryPreview from '../CategoryPreview/category-preview.component';
import CategoryList from '../../components/categoriesPreview/categories-preview.component';


function Shop() {

  return (
    <Routes>
        <Route index element={<CategoryList />}/>
        <Route path=":category" element={<CategoryPreview />}/>
    </Routes>
   
  )
}

export default Shop