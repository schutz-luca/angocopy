import styled from "styled-components";
import { devices } from "styles/devices";

export const $Form = styled.form`
    display: flex;
    align-items: stretch;
    flex-direction: column;
    width: 30%;
    margin-top: 2rem;

    @media ${devices.laptopL}{
        width: 60%;
    }

    @media ${devices.tablet}{
        width: 80%;
    }
`