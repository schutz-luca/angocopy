import styled from "styled-components";

export const $Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top: solid 1px ${props => props.theme.neutral10};
    background: ${props => props.theme.background};
    padding: 30px;
    margin-top: 30px;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    button{
        margin: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        &.phone{
            background: none;
            color: ${props => props.theme.neutral6};
            border: 1px solid ${props => props.theme.neutral6};
        }

        &.whats{
            background: ${props => props.theme.colors.green};
        }

        svg{
            margin-right: 5px;
        }
    }
`