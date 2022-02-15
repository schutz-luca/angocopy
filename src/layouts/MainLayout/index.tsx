/**
 * IMPORTS
 */
import { TopMenu } from "components/topmenu";
import { menuOptions } from "constants/menuOptions";
import { IMainLayoutProps } from "./index.d";
import { $MainContent, $MainLayout } from "./styles";

/**
 * I am the main layout
 */
export const MainLayout = (props: IMainLayoutProps) => (
    <$MainLayout>
        <TopMenu options={menuOptions} />
        <$MainContent>
            {props.children}
        </$MainContent>
    </$MainLayout>
)