import styled from 'styled-components';


export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const SpanText = styled.span`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
`

export const Quantity = styled.span`
display: flex;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`



  
  // .name,
  // .quantity,
  // .price {
  //   width: 23%;
  // }

  // .quantity {
   

  //   .arrow {
  //     cursor: pointer;
  //   }

  //   .value {
  //     margin: 0 10px;
  //   }
  // }
