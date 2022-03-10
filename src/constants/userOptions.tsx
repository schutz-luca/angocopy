/**
 * IMPORTS
 */
 import { MdCollectionsBookmark, MdHome, MdLinkedCamera, MdOutlineFavorite } from "react-icons/md"
 import { ImBook, ImBooks } from "react-icons/im"
 import { IMenuOption } from "components/topmenu/index.d";
import { IOption } from "components/userbutton/userbutton.d";
 
 export const userOptions: IOption[] = [
     {
         icon: <MdOutlineFavorite />,
         label: 'Cursos Comprados',
         link: '/cursos-comprados'
     },
 ]