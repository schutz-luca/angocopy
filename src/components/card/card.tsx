/**
 * IMPORTS
 */
import { Button } from "components/button";
import { Rating } from "components/rating";
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

        {props.rate &&
            <Rating rate={props.rate} />
        }

        {props.actionText &&
            <$ButtonContainer>
                <Button>
                    {props.actionText}
                </Button>
            </$ButtonContainer>
        }
    </$Card>
)