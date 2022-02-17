/**
 * IMPORTS
 */
import { Card } from "components/card";
import { $CardContainer } from "components/card/styles";
import { Title } from "components/title";
import { coursesMock } from "constants/coursesMock";

/**
 * I am the courses page
 */
export const Courses = () => {

    return (
        <>
            <Title
                title="Cursos"
            />
            <$CardContainer style={{ marginTop: 20 }}>
                {coursesMock.map(course => (
                    <Card
                        key={course.title}
                        title={course.title}
                        description={course.description}
                        thumbnail={course.thumbnail}
                        actionText="Leia Mais"
                        rate={course.rate}
                    />
                ))}

            </$CardContainer>
        </>
    )
}