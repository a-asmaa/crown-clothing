import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.style';


export default function DirectoryItem({category}) {

  const {imageUrl, title} = category;
  const navigate = useNavigate();

  const onNavigate = ()=> {
    navigate(`shop/${title}`)
  }

  return (
    <DirectoryItemContainer onClick={onNavigate} >
          <BackgroundImage imageUrl={imageUrl}  />
          <Body >
              <h2> {title}</h2>
              <p> shop now </p>
          </Body>
    </DirectoryItemContainer>
  )
}