/**
 * IMPORTS
 */
import { Button } from "components/button";
import { Card } from "components/card";
import { Rating } from "components/rating";
import { ICourseCardProps } from "./index.d";
import { $ButtonContainer, $TextContainer } from "./styles";

/**
 * I am a styled card
 */
export const CourseCard = (props: ICourseCardProps) => (
    <Card>
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
    </Card>
)