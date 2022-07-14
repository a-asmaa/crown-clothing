import React from 'react'
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import CategoryPreview from '../CategoryPreview/category-preview.component';
import CategoryList from '../../components/categoriesPreview/categories-preview.component';
import { fetchCategoriesAsync} from '../../store/Actions/categoriesAction';


function Shop() {

  const dispatch = useDispatch(); 

  useEffect(()=> { // get categories 
      dispatch(fetchCategoriesAsync())
  }, [])
  
  return (
    <Routes>
        <Route index element={<CategoryList />}/>
        <Route path=":category" element={<CategoryPreview />}/>
    </Routes>
   
  )
}

export default Shop