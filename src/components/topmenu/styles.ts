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
    background-color: ${props => props.theme.colors.darkBlue};
    top: 0;
    z-index: 3;
    padding: 0;
    box-shadow: 0px 8px 30px rgba(0, 5, 58, 0.05);
`

export const $TopMenuContent = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 7px 200px;
`

export const $TopMenuOptions = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const $Logo = styled.img`
    height: 60px;
    margin: 5px 0;
`

export const $MenuButton = styled.div`
    background: transparent;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 8px;



    svg{
        height: 100%;
        width: 100%;
    }
`

export const $MenuOption = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 0 14px;
    height: 18px;
    width: auto;

    cursor: pointer;

    &:hover{
        p,svg{
            color: ${props => props.theme.secondary};
        }
    }

    p,svg{
        color: ${props => props.theme.colors.white3};
        transition: all ease-in-out 0.2s;
    }
    svg{
        padding: 5px 0;
        width: 30px;
        height: 30px;
    }
    p{
        font-size: .9rem;
        text-transform: uppercase;
        display: flex;
        align-items: center;

        svg{
            width: 16px;
            margin-left: 3px;
            margin-top: -2px;
        }
    }

    &.disabled{
        background: transparent;

        p,svg{
            opacity: 0.7;
        }
        
        &:hover{
            background: transparent;
        }
    }

    &.userOption{
        height: 15px;
        p{
            text-transform: none;
        }
    }

    &.highlight{
        border: 2px solid ${props => props.theme.secondary};
        margin: 0 10px;
        padding: 15px;
    }

`