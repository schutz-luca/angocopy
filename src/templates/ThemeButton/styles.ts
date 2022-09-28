/**
 * IMPORTS
 */
import styled from "styled-components";
import { Button } from "components/button";

export const $ThemeButton = styled(Button)`
    border-radius: 50%;
    background: ${props => props.theme.neutral10}90;
    color: ${props => props.theme.neutral};
    position: absolute;
    z-index: 2;
    width: 40px;
    height: 40px;
    padding: 8px;
    right: 15px;
    top: 15px;

    svg{
        height: 100%;
        width: 100%;
    }
`