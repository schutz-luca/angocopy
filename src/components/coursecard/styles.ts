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
`