import React from 'react'
import DirectoryItem from '../category-item/directory-item.component'
import './categories.styles.jsx'
import { CategoriesContainer } from './categories.styles.jsx'

const categories =[
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
     "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
]

function CategoriesMenu() {
  return (
    <CategoriesContainer>
      {categories.map(cat => <DirectoryItem key={cat.id} category={cat}/>
      )}
    </CategoriesContainer>
  )
}

export default CategoriesMenu