/**
 * IMPORTS
 */
import { MdCollectionsBookmark, MdHome } from "react-icons/md"
import { ImBook, ImBooks } from "react-icons/im"
import { IMenuOption } from "components/topmenu/index.d";

export const menuOptions: IMenuOption[] = [
    {
        icon: <MdHome />,
        label: 'Home',
        link: '/'
    },
    {
        icon: <MdCollectionsBookmark />,
        label: 'Categorias',
        link: '/categorias'
    },
    {
        icon: <ImBooks />,
        label: 'Planos',
        link: '/planos'
    }
]