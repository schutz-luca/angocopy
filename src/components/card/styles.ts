/**
 * IMPORTS
 */
import { motion } from "framer-motion";
import styled from "styled-components";

export const $Card = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: ${props => props.theme.neutral2}90;
    border-radius: 15px;
    margin: 10px;
    text-align: center;
    width: 300px;
    color: ${props => props.theme.neutral10};
    overflow: hidden;
    box-shadow:0 2px 3px ${props => props.theme.colors.black}40;

    transition: all ease-in-out 0.3s;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }

    img{
        height: 180px;
        width: 100%;
        object-position: center;
        object-fit: cover;
    }
`

export const $TextContainer = styled.div`
    padding: 10px;
    width: 100%;
    height: 100px;
    overflow: hidden;

    p{
        font-size: 13px;
    }
    h3{
        font-size: 22px;
        margin-bottom: 6px;
    }
`

export const $ButtonContainer = styled.div`
    margin: 15px 0;
`

export const $CardContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`