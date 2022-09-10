import { ICourseFull } from "types/course"

export interface ICourseCardProps {
    course: ICourseFull
    description?: string
    actionText?: string
    link?: string
    action?: () => void
}