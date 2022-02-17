/**
 * IMPORTS
 */
import styled from "styled-components";

const $RatingContainer = styled.div`
svg{
    color: ${props => props.theme.colors.yellow};
    height: 23px;
    width: 23px;
}
`

/**
 * EXPORTS
 */
export { $RatingContainer }