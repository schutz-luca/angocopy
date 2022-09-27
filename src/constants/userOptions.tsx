/**
 * IMPORTS
 */
import { MdOutlineFavorite } from "react-icons/md"
import { IOption } from "components/dropdown/dropdown.d";

export const userOptions: IOption[] = [
    {
        icon: <MdOutlineFavorite />,
        label: 'Cursos Comprados',
        link: '/cursos-comprados'
    },
]