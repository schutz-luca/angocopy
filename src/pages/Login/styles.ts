/**
 * IMPORTS
 */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const $JoinContainer = styled.div`
    display: flex;
    margin-top: 1rem;
`

export const $Join = styled(NavLink)`
    text-align: center;
    margin-bottom: 1.8rem;
    margin-left: 6px;
    color: ${props => props.theme.secondary};
`