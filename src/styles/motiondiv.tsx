/**
 * IMPORTS
 */
import { motion } from "framer-motion";
import styled from "styled-components";
import { variants } from "./theme";

interface IMotionDivProps {
    children: React.ReactNode
    key?: string
}

const $MotionDiv = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

/**
 * I am a generic motion div
 */
export const MotionDiv = (props: IMotionDivProps) => (
    <$MotionDiv variants={variants} key={props.key}>
        {props.children}
    </$MotionDiv>
)