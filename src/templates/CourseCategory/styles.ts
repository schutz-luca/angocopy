import { $Card } from "components/card/styles";
import styled from "styled-components";

export const $CategorySection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const $EmptyCard = styled($Card)`
    padding-bottom: 0;
    padding: 20px 40px;
    width: 100%;
`