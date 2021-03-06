import styled from "styled-components";
import Button from "../Button/button.component";



export const PaymentFormContainer = styled.div`

    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`

    height: 100px;
    min-width: 500px;

    @media screen and (max-width: 800px) {
        min-width: 360px;
    }
`


export const PaymentButton = styled(Button)`
    margin-top: 30px;
    margin-left: auto;
`