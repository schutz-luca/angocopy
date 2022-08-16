/**
 * IMPORTS
 */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const $Form = styled.form`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    width: 80%;
    margin-top: 2rem;
`

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