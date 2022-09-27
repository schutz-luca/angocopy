import { Title } from "components/title";
import http from "infra/http";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { MotionDiv } from "styles/motiondiv";
import { CourseCategory } from "templates/CourseCategory";
import { ICategory } from "types/category";

export const Category = () => {

    const dispatch = useDispatch();

    const { id } = useParams<{ id: string }>();

    const [category, setCategory] = useState<ICategory>();

    useEffect(() => {
        if (id)
            (async () => {
                try {
                    const response = await http.post(`cursos/curso`, { dispatch, body: { curso_id: Number(id) } });

                    if (!response?.length)
                        throw Error

                    console.log(response)
                    // setCategory(response.cursos);
                }
                catch (error) {
                }
            })()
    }, [])

    return (
        <MotionDiv>
            <Title
                title="Categorias de Curso"
            />
            <CourseCategory category={category} />
        </MotionDiv>
    )
}