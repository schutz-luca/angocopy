import { ICategory } from "./category";
import { ITeacher } from "./teacher";

export interface ICourseFull {
    curso: ICourse
    formador: ITeacher
    category: ICategory
    status: string
}

export interface ICourse {
    id: string
    curso: string
    capa: string
    descricao: string
    preco: string
    tempo_total: string
    tipo_de_acesso: string
}