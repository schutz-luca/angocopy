/**
 * IMPORTS
 */
import { Button } from "components/button";
import { Card } from "components/card";
import { Rating } from "components/rating";
import { useHistory } from "react-router-dom";
import { ICourseCardProps } from "./index.d";
import { $ButtonContainer, $TextContainer, $Price, $Teacher, $Time } from "./styles";
import ImageIcon from "assets/image-icon.png";
import { AiOutlineClockCircle } from "react-icons/ai";

/**
 * I am a styled card
 */
export const CourseCard = ({ course, ...props }: ICourseCardProps) => {

    const { push } = useHistory();

    const goToCourse = () => push(props.link)

    console.log(course)
    return (
        <Card>
            <img src={course.curso.capa ? course.curso.capa : ImageIcon} alt={course.curso.curso} />
            <$TextContainer>
                <h3>{course.curso.curso}</h3>
                <p>{course.curso.descricao}</p>
            </$TextContainer>


            <$Time>
                {course.curso.tempo_total} <AiOutlineClockCircle />
            </$Time>
            <$Price>
                {course.curso.preco} <small>Kz</small>
            </$Price>

            {props.actionText &&
                <$ButtonContainer>
                    <Button onClick={goToCourse}>
                        {props.actionText}
                    </Button>
                </$ButtonContainer>
            }
            {course?.formador &&
                <$Teacher>
                    <small>Formador:</small> {course?.formador?.nome}
                </$Teacher>
            }
        </Card >
    )
}