/**
 * IMPORTS
 */
import { Footer } from "components/footer";
import { IMenuOption } from "components/topmenu/index.d";
import { TopMenu } from "components/topmenu";
import { selectUser } from "features/user/selectors";
import { ImBooks } from "react-icons/im";
import { MdHome, MdCollectionsBookmark } from "react-icons/md";
import { useSelector } from "react-redux";
import { IMainLayoutProps } from "./index.d";
import { $MainContent, $MainLayout } from "./styles";
import http from "infra/http";
import { notify } from "infra/notify";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ICategory } from "types/category";

/**
 * I am the main layout
 */
export const MainLayout = (props: IMainLayoutProps) => {

    const { signed } = useSelector(selectUser);

    const { username } = useSelector(selectUser);

    const [categorySubmenu, setCategorySubmenu] = useState<IMenuOption[]>([]);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const response = await http.get('categoria/cursos', { dispatch });

                if (!response?.length)
                    throw Error

                const options: IMenuOption[] = response.map(category => (
                    {
                        label: category?.categoria,
                        link: `categorias/${category?.id}`
                    }
                ));
                options.unshift({
                    label: 'Todas Categorias',
                    link: 'categorias'
                })

                setCategorySubmenu(options);
            }
            catch (error) {
                notify({
                    title: "Não foi possível resgatar as categorias de curso",
                    message: import.meta.env.VITE_GENERIC_ERROR,
                    type: "danger"
                });
            }
        })()
    }, [])


    const menuOptions: IMenuOption[] = [
        {
            icon: <MdHome />,
            label: 'Home',
            link: '/'
        },
        {
            icon: <MdCollectionsBookmark />,
            label: 'Categorias',
            submenu: categorySubmenu,
            disabled: !categorySubmenu?.length
        },
        {
            icon: <ImBooks />,
            label: 'Planos',
            link: '/planos'
        }
    ]

    return (
        <$MainLayout>
            <TopMenu options={menuOptions} signed={signed} username={username} />
            <$MainContent>
                {props.children}
            </$MainContent>
            <Footer />
        </$MainLayout>
    )
}