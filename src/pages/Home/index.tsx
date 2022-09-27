/**
 * IMPORTS
 */
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Banner from "assets/banner.png";
import { Button } from "components/button";
import { CourseCard } from "components/coursecard";
import { $CardContainer } from "components/coursecard/styles";
import { Divisor } from "components/divisor";
import { $Form } from "components/form/styles";
import { Field } from "components/form/field";
import { Input } from "components/form/input";
import { Title } from "components/title";
import { Loading } from "components/loading";
import { selectIsLoading } from "features/notify/selectors";
import { notify } from "infra/notify";
import http from "infra/http";
import { MotionDiv } from "styles/motiondiv";
import { ICourseFull } from "types/course";
import { $Banner, $TextContainer } from "./styles";
import { schema } from "./schema";

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

    const [courses, setCourses] = useState<ICourseFull[]>([]);

    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        (async () => {
            try {
                const response = await http.get('cursos', { dispatch });

                if (!response?.length)
                    throw Error

                setCourses(response);
            }
            catch (error) {
                console.error(error);
            }
        })()
    }, [])

    return (
        <MotionDiv>
            <Title
                title="AngoCursos"
            />
            <$TextContainer>
                <h2>Escola online <b>à custo Justo</b></h2>
                <div>
                    <NavLink to={"/planos"}>
                        <Button >
                            Assine um Plano
                        </Button>
                    </NavLink>
                    ou
                    <NavLink to={"/categorias"}>
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
            <Divisor>
                Cursos em Destaque
            </Divisor>
            <$CardContainer style={{ marginTop: 20 }}>
                {isLoading ?
                    <Loading />
                    :
                    <>
                        {
                            courses.map(course => (
                                <CourseCard
                                    course={course}
                                    link={`/cursos/${course.curso.id}`}
                                    actionText="Leia Mais"
                                />
                            ))
                        }
                    </>
                }
            </$CardContainer>

            <Divisor>
                Contato
            </Divisor>
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