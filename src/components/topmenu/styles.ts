/**
 * IMPORTS
 */
import { Button } from "components/button";
import styled from "styled-components";

export const $TopMenuContainer = styled.header`
    position: sticky;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 70px;
    background-color: ${props => props.theme.background};
    top: 0;
    z-index: 3;
    padding: 0;
    box-shadow: 0px 8px 30px rgba(0, 5, 58, 0.05);
`

export const $TopMenuContent = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 0 200px;
`

export const $TopMenuOptions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const $Logo = styled.img`
    height: 55px;
`

export const $MenuButton = styled(Button)`
    background: transparent;
    border-radius: 50%;
    color: ${props => props.theme.neutral7};
    width: 30px;
    height: 30px;
    padding: 8px;

    &:hover{
        background: ${props => props.theme.neutral4}50;
    }

    svg{
        height: 100%;
        width: 100%;
    }
`

export const $MenuOption = styled($MenuButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 0 8px;
    height: auto;
    width: auto;
    svg{
        padding: 5px 0;
        width: 30px;
        height: 30px;
    }
    p{
        color: ${props => props.theme.neutral10};
        font-size: 14px;
    }
`