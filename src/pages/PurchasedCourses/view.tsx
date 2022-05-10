import { BackButton } from "components/backbuttom";
import { CourseViewer } from "components/courseviewer";
import { coursesMock } from "constants/coursesMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICourse } from "types/course";
import { IParams } from "types/params.d";

export const ViewPurchasedCourse = () => {

    const { id } = useParams<IParams>();
    const [course, setCourse] = useState<ICourse>();

    useEffect(() => {
        const selectedCourse = coursesMock.filter((course) => course.id === id)[0];
        setCourse(selectedCourse);
    }, [id])

    return (
        <>
            <BackButton />
            {course &&
                <CourseViewer course={course} actionText='Visualizar'/>
            }
        </>
    )
}