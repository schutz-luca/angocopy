import { useDispatch, useSelector } from "react-redux";
import { CourseCard } from "components/coursecard";
import { $CardContainer } from "components/coursecard/styles";
import { Divisor } from "components/divisor";
import { Loading } from "components/loading";
import { selectIsLoading } from "features/notify/selectors";
import http from "infra/http";
import { notify } from "infra/notify";
import { useEffect, useState } from "react";
import { ICourse } from "types/course";
import { ICourseCategoryProps } from "./coursecategory.d";
import { $CategorySection, $EmptyCard } from "./styles";


export const CourseCategory = ({ category }: ICourseCategoryProps) => {

    const [courses, setCourses] = useState<ICourse[]>([]);

    const dispatch = useDispatch();

    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        (async () => {
            try {
                const response = await http.post(`categoria/cursos`, { dispatch, body: { categoria_id: category.id } });

                if (response?.status !== 200)
                    throw Error

                setCourses(response.data.cursos);
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
        <$CategorySection>
            <Divisor>
                {category.categoria}
            </Divisor>
            <$CardContainer>
                {isLoading ?
                    <Loading />
                    :
                    <>
                        {courses.length > 0 ?
                            <>
                                {courses.map(course => (
                                    <CourseCard
                                        course={{ curso: course, category: null, formador: null, status: null }}
                                        link={`/cursos/${course.id}`}
                                        actionText="Leia Mais"
                                    />
                                ))}
                            </>
                            :
                            <$EmptyCard>
                                Ainda não há cursos disponíveis nesta categoria
                            </$EmptyCard>
                        }
                    </>
                }


            </$CardContainer>
        </$CategorySection>
    )
}