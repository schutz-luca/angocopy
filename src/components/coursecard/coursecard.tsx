/**
 * IMPORTS
 */
import { Button } from "components/button";
import { Card } from "components/card";
import { Rating } from "components/rating";
import { useHistory } from "react-router-dom";
import { ICourseCardProps } from "./index.d";
import { $ButtonContainer, $TextContainer } from "./styles";

/**
 * I am a styled card
 */
export const CourseCard = (props: ICourseCardProps) => {

    const { push } = useHistory();

    const goToCourse = () => push(props.link)

    return (
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
                    <Button onClick={goToCourse}>
                        {props.actionText}
                    </Button>
                </$ButtonContainer>
            }
        </Card >
    )
}