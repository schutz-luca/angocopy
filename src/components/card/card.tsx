/**
 * IMPORTS
 */
import { Button } from "components/button";
import { ICardProps } from "./index.d";
import { $ButtonContainer, $Card, $TextContainer } from "./styles";

/**
 * I am a styled card
 */
export const Card = (props: ICardProps) => (
    <$Card>
        <img src={props.thumbnail} alt={props.title} />
        <$TextContainer>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </$TextContainer>
        {props.actionText &&
            <$ButtonContainer>
                <Button>
                    {props.actionText}
                </Button>
            </$ButtonContainer>
        }
    </$Card>
)