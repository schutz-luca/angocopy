import styled from "styled-components";

export const $DropDownContainer = styled.div`
    position: relative;
`

export const $DropDown = styled.ul`
    position: absolute;
    background: ${props => props.theme.colors.darkBlue};
    border-radius: 0 0 15px 15px;
    box-shadow:0 2px 3px ${props => props.theme.colors.black};
    overflow: hidden;
    width: 100%;
    min-width: 200px;
    top: 50px;
    padding: 8px 0;
`

export const $DropItem = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    cursor: pointer;
    padding: 10px;
    text-transform: uppercase;
    font-size: .8rem;
    

    p,svg{
        color: ${props => props.theme.colors.white3} !important;
    }

    &:hover{
        background: ${props => props.theme.secondary};
    }

    svg{
        margin-right: 10px;
        width: 20px;
    }
`