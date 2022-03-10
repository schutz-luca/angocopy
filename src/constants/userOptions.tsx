/**
 * IMPORTS
 */
 import { MdCollectionsBookmark, MdHome } from "react-icons/md"
 import { ImBook, ImBooks } from "react-icons/im"
 import { IMenuOption } from "components/topmenu/index.d";
import { IOption } from "components/userbutton/userbutton.d";
 
 export const userOptions: IOption[] = [
     {
         icon: <MdCollectionsBookmark />,
         label: 'Meus Cursos',
         link: '/meuscursos'
     },
 ]