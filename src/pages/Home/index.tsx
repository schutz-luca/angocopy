/**
 * IMPORTS
 */
import Banner from "assets/banner.png";
import { Button } from "components/button";
import { CourseCard } from "components/coursecard";
import { $CardContainer } from "components/coursecard/styles";
import { Title } from "components/title";
import { coursesMock } from "constants/coursesMock";
import { MotionDiv } from "styles/motiondiv";
import { $Banner, $Divisor, $HomeContainer, $TextContainer } from "./styles";

/**
 * I am the home page
 */
export const Home = () => {

    return (
        <MotionDiv>
            <Title
                title="AngoCursos"
            />
            <$TextContainer>
                <h2>Escola online <b>à custo Justo</b></h2>
                <div>
                    <Button>
                        Assine um Plano
                    </Button>
                    ou
                    <Button>
                        Compre Cursos
                    </Button>
                </div>
                <p>
                    Nossa plataforma reúne diversos cursos para garantir melhor experiência no seu aprendizado
                </p>
            </$TextContainer>
            <$Banner src={Banner} alt="banner" />
            <$Divisor>
                Cursos em Destaque
            </$Divisor>
            <$CardContainer style={{ marginTop: 20 }}>
                {coursesMock.map(course => (
                    <CourseCard
                        key={course.title}
                        title={course.title}
                        description={course.description}
                        thumbnail={course.thumbnail}
                        actionText="Leia Mais"
                        rate={course.rate}
                    />
                ))}

            </$CardContainer>
        </MotionDiv>
    )
}