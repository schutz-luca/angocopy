/**
 * IMPORTS
 */
import { motion } from "framer-motion";
import styled from "styled-components";

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
    /* justify-content: flex-start; */
    width: 100%;
`

export const $Teacher = styled.div`
    font-weight: bold;

    small{
        font-weight: 400;
    }
`

export const $Price = styled.div`
    font-size: 20px;
    font-weight: bold;
`

export const $Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;

    svg{
        margin-left: 4px;
    }
`