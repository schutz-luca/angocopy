/**
 * IMPORTS
 */
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Banner from "assets/banner.png";
import { Button } from "components/button";
import { CourseCard } from "components/coursecard";
import { $CardContainer } from "components/coursecard/styles";
import { $Form } from "components/form/styles";
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { Title } from "components/title";
import { coursesMock } from "constants/coursesMock";
import { MotionDiv } from "styles/motiondiv";
import { schema } from "./schema";
import { $Banner, $Divisor, $TextContainer } from "./styles";

/**
 * I am the home page
 */
export const Home = () => {

    const { errors, handleSubmit, register } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitContact = (data) => {
        window.open(`mailto:test@example.com?subject=Contato de ${data.name}&body=${data.message}`);
    }

    return (
        <MotionDiv>
            <Title
                title="AngoCursos"
            />
            <$TextContainer>
                <h2>Escola online <b>à custo Justo</b></h2>
                <div>
                    {/* <NavLink to={"/planos"}> */}
                    <Button disabled={true}>
                        Assine um Plano
                    </Button>
                    {/* </NavLink> */}
                    ou
                    <NavLink to={"/cursos"}>
                        <Button>
                            Compre Cursos
                        </Button>
                    </NavLink>
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
                        rate={course.rate}
                        link={`/cursos/${course.id}`}
                        actionText="Leia Mais"
                    />
                ))}
            </$CardContainer>

            <$Divisor>
                Contato
            </$Divisor>
            <$Form onSubmit={handleSubmit(onSubmitContact)}>
                <Field error={errors.name?.message} label="Nome Completo">
                    <Input name="name" innerRef={register} />
                </Field>
                <Field error={errors.message?.message} label="Mensagem">
                    <Input name="message" innerRef={register} multiline={true} cols={40} rows={5} />
                </Field>
                <Button>
                    Enviar
                </Button>
            </$Form>
        </MotionDiv>
    )
}