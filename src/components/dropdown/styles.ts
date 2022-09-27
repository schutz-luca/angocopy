import styled from "styled-components";

export const $DropDownContainer = styled.div`
    position: relative;
`

export const $DropDown = styled.ul`
    position: absolute;
    background: ${props => props.theme.neutral};
    border-radius: 0 0 15px 15px;
    box-shadow:0 2px 3px ${props => props.theme.colors.black}40;
    overflow: hidden;
    width: 100%;
    min-width: 200px;
    top: 48px;
`

export const $DropItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    cursor: pointer;
    padding: 10px;

    p,svg{
        color: ${props => props.theme.neutral10};
    }

    &:hover{
        background: ${props => props.theme.primary};

        p,svg{
            color: ${props => props.theme.colors.white3};
        }
    }

    svg{
        margin-right: 10px;
        width: 20px;
    }
`