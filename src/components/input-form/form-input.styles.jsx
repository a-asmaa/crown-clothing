import styled from 'styled-components';


export const GroupContainer = styled.div`
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









// $sub-color: grey;
// $main-color: black;

// @mixin shrinkLabel {
//   top: -14px;
//   font-size: 12px;
//   color: $main-color;
// }

// .group {
//   position: relative;
//   margin: 45px 0;

//   .form-input {
//     background: none;
//     background-color: white;
//     color: $sub-color;
//     font-size: 18px;
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $sub-color;
//     margin: 25px 0;

//     &:focus {
//       outline: none;
//     }

//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }

//   input[type='password'] {
//     letter-spacing: 0.3em;
//   }

//   .form-input-label {
//     color: $sub-color;
//     font-size: 16px;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 10px;
//     transition: 300ms ease all;

//     &.shrink {
//       @include shrinkLabel();
//     }
//   }
// }
