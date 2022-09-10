/**
 * IMPORTS
 */
import { CourseCard } from "components/coursecard";
import { $CardContainer } from "components/coursecard/styles";
import { Loading } from "components/loading";
import { Title } from "components/title";
import { selectIsLoading } from "features/notify/selectors";
import http from "infra/http";
import { notify } from "infra/notify";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MotionDiv } from "styles/motiondiv";
import { ICourseFull } from "types/course";

/**
 * I am the purchased courses page
 */
export const PurchasedCourses = () => {
    const [courses, setCourses] = useState<ICourseFull[]>([]);

    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        (async () => {
            try {
                const response = await http.get('cursos', { dispatch });

                if (response?.status !== 200)
                    throw Error

                setCourses(response.data);
            }
            catch (error) {
                notify({
                    title: "Não foi possível resgatar as categorias de curso",
                    message: import.meta.env.VITE_GENERIC_ERROR,
                    type: "danger"
                });
            }
        })()
    }, [])

    return (
        <MotionDiv>
            <Title
                title="Cursos Comprados"
            />
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
        </MotionDiv>
    )
}