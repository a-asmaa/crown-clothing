import React from 'react'
import ProductCard from '../product/product.component';
import {useSelector} from 'react-redux'
import './category-preview.styles.jsx'
import { CategoryPreviewContainer, Preview, TitleLink } from './category-preview.styles.jsx';
import { categoriesIsLoading, selectCategoryMap } from '../../store/selector/categorySelector';
import Spinner from '../spinner/spinner.component';

function CategoryList() {

    const categories = useSelector(selectCategoryMap) 
    const isLoading = useSelector(categoriesIsLoading) 


    
    if(isLoading) return <Spinner />
    
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