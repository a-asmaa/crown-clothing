import React, { Fragment, useEffect, useState } from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.uttils';
import ProductCard from '../product/product.component';
import {useDispatch, useSelector} from 'react-redux'
import { setCategories } from '../../store/Actions/categoriesAction';
import './category-preview.styles.jsx'
import { Link } from 'react-router-dom';
import { CategoryPreviewContainer, Preview, TitleLink } from './category-preview.styles.jsx';

function CategoryList() {

    const categories = useSelector(state => state.categories) 

  return (
    <>
        { categories &&
            Object.keys(categories).map( title => 
                <CategoryPreviewContainer key={title}>
                    <h2> 
                        <TitleLink to={title}> {title.toUpperCase()} </TitleLink>
                    </h2>
                    <Preview>
                        {categories[title].slice(0,4).map(product => <ProductCard key={product.id} product={product}/>)}
                    </Preview>
                </CategoryPreviewContainer>
            )
        }
    </>
  )
}

export default CategoryList