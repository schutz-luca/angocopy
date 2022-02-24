/**
 * IMPORTS
 */
import { TopMenu } from "components/topmenu";
import { menuOptions } from "constants/menuOptions";
import { selectUser } from "features/user/selectors";
import { useSelector } from "react-redux";
import { IMainLayoutProps } from "./index.d";
import { $MainContent, $MainLayout } from "./styles";

/**
 * I am the main layout
 */
export const MainLayout = (props: IMainLayoutProps) => {

    const { signed } = useSelector(selectUser);

    return (
        <$MainLayout>
            <TopMenu options={menuOptions} signed={signed} />
            <$MainContent>
                {props.children}
            </$MainContent>
        </$MainLayout>
    )
}