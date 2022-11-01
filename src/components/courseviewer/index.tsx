import { $Preview, $InfoRow } from "./styles";
import { ICourseViewerProps } from "./index.d";
import { Rating } from "components/rating";
import { Button } from "components/button";

export const CourseViewer = ({ course, ...props }: ICourseViewerProps) => (
    <>
        <$Preview>
            <img src={course.capa} alt={course.curso} />
        </$Preview>
        <h1>
            {course.descricao}
        </h1>
        <$InfoRow>
            {/* <div className="infoItem">
                <p>Ranking:</p>
                <b><Rating rate={course.rate} /></b>
            </div> */}
            {/* <div className="infoItem">
                <p>Formador:</p>
                <b>{course.teacher.name}</b>
            </div> */}
            {/* <div className="infoItem">
                <p>Categoria:</p>
                <b>{course.category.name}</b>
            </div> */}
        </$InfoRow>
        <p>
            {course.descricao}
        </p>
        <br />
        <Button disabled={true}>
            {props.actionText}
        </Button>
    </>
)