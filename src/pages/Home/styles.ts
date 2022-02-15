/**
 * IMPORTS
 */
import styled from "styled-components";

export const $HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

export const $TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;
    border: 1px solid ${props => props.theme.neutral10};
    padding: 20px;
    border-radius: 15px;
    h2{
        font-size: 35px;
        margin-bottom: 10px;
    }
    b{
        color: ${props => props.theme.primary};
    }
    p{
        font-size: 16px;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        button{
            margin: 0 5px;
            background: ${props => props.theme.secondary};
        }
    }
`

export const $Banner = styled.img`
    height: 400px;
`

export const $Divisor = styled.div`
    text-align: center;
    width: 100%;
    border-top: 1px solid ${props=>props.theme.neutral10};
    padding: 20px 0;
    font-size: 26px;
    font-weight: bold;
`