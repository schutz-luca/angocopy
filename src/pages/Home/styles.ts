/**
 * IMPORTS
 */
import styled from "styled-components";

export const $HomeContainer = styled.div`

`

export const $TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;
    border-radius: 15px;
    width: 100%;
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
    text-align: left;
    width: 100%;
    border-left: 8px solid ${props=>props.theme.secondary};
    padding: 20px;
    font-size: 26px;
    font-weight: bold;
`