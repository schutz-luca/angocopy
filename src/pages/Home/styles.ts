/**
 * IMPORTS
 */
import styled from "styled-components";
import { devices } from "styles/devices";

export const $HomeContainer = styled.div`

`

export const $TextContainer = styled.div`
    position: absolute;
    margin-left: -40%;
    /* margin-top: 4%; */
    /* z-index: 1; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;

    p,h2{
        max-width: 60%;
        text-align: center;
        color: ${props => props.theme.colors.white3};
    }

    h2{
        font-size: 62px;
        margin-bottom: 10px;
        width: 400px;
    }
    p{
        font-size: 18px;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        button{
            margin: 0 20px;
            background: ${props => props.theme.colors.secondary};
        }
    }
`

export const $Banner = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  .banner {
    object-fit: cover;
    object-position: top;
    width: 100%;
    max-height: 90vh;

    @media ${devices.desktop}{
        width: auto;
    }    
  }
`;

export const $Logo = styled.img`
    height: 100px;
    margin-bottom: 70px;
    opacity: 0.7;

    @media ${devices.desktop}{
        height: 60px;
        margin-bottom: 40px;

    }
`