/**
 * IMPORTS
 */
import { darken } from 'polished';
import styled from 'styled-components';


/**
 * I am a styled button.
 */
const $Button = styled.button`
  background: ${props => props.theme.primary};
  border-radius: 15px;
  font-size: 16px;
  text-transform: uppercase;
  padding: 0.8rem 2rem;
  color: ${props => props.theme.colors.white3};
  font-weight: ${props => props.theme.fonts.weight.bold};

  &[disabled] {
    cursor: default;
    background: ${props => props.theme.colors.gray3};
  }
`;


/**
 * EXPORTS
 */
export { $Button };
