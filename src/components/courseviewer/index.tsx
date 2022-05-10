import { $Preview, $InfoRow } from "./styles";
import { ICourseViewerProps } from "./index.d";
import { Rating } from "components/rating";
import { Button } from "components/button";

export const CourseViewer = ({ course, ...props }: ICourseViewerProps) => (
    <>
        <$Preview>
            <img src={course.thumbnail} alt={course.title} />
        </$Preview>
        <h1>
            {course.title}
        </h1>
        <$InfoRow>
            <div className="infoItem">
                <p>Ranking:</p>
                <b><Rating rate={course.rate} /></b>
            </div>
            <div className="infoItem">
                <p>Formador:</p>
                <b>{course.teacher.name}</b>
            </div>
            <div className="infoItem">
                <p>Categoria:</p>
                <b>{course.category.name}</b>
            </div>
        </$InfoRow>
        <p>
            {course.description}
        </p>
        <br />
        <Button disabled={true}>
            {props.actionText}
        </Button>
    </>
)