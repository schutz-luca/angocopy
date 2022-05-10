import { Button } from "components/button";
import styled from "styled-components";
import { devices } from "styles/devices";
import { defaultProps } from "./index.d";

const $Button = styled(Button)`
    padding: 0;
    border-radius: 50%;
    background: ${props=>props.theme.primary};
    height: ${defaultProps.size}px;
    color: ${props=> props.theme.colors.white3};
    transition: background ease 0.4s;

    svg{
        height: ${defaultProps.size}px;
        width: ${defaultProps.size}px;
        padding: 6px;
    }
    &:hover{
        /* color: ${props=>props.theme.primary}; */
        background: ${props=> props.theme.secondary};
    }

    @media ${devices.mobileL}{
        height: ${defaultProps.mobileSize}px;
        svg{
            height: ${defaultProps.mobileSize}px;
            width: ${defaultProps.mobileSize}px;
        }
    }
`
const $Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
`

export { $Button, $Container }