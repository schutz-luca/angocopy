/**
 * IMPORTS
 */
import { CourseCard } from "components/coursecard";
import { $CardContainer } from "components/coursecard/styles";
import { Title } from "components/title";
import { coursesMock } from "constants/coursesMock";
import http from "infra/http";
import { notify } from "infra/notify";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MotionDiv } from "styles/motiondiv";
import { CourseCategory } from "templates/CourseCategory";
import { ICategory } from "types/category";

/**
 * I am the courses page
 */
export const Courses = () => {

    const [categories, setCategories] = useState<ICategory[]>([]);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const response = await http.get('categoria/cursos', { dispatch });

                if (response?.status !== 200)
                    throw Error

                setCategories(response.data);
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
                title="Categorias de Curso"
            />
            {categories.map((category => <CourseCategory category={category} />))}
        </MotionDiv>
    )
}