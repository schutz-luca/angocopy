import styled from "styled-components";

export const $Preview = styled.div`
    width: 100%;
    height: 260px;
    overflow: hidden;
    border-radius: 15px;
    margin-bottom: 20px;

    img{
            height: 100%;
            width: 100%;
            object-position: center;
            object-fit: cover;
        }
`

export const $InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-size: 13px;
        margin-right: 8px;
    }

    .infoItem{
        display: flex;
        align-items: center;
        margin: 20px;
    }
`