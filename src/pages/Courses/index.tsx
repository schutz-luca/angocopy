/**
 * IMPORTS
 */
import { Title } from "components/title";
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

                if (!response?.length)
                    throw Error

                setCategories(response);
            }
            catch (error) {
                console.error(error)
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