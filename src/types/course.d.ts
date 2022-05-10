import { ICategory } from "./category";
import { ITeacher } from "./teacher";

export interface ICourse {
    id: string
    title: string
    description: string
    thumbnail: string
    rate: number
    teacher: ITeacher
    category: ICategory
}