/**
 * IMPORTS
 */
import { MdLogin, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoWhite from "assets/logo-white.svg";
import Logo from "assets/logo.svg";
import { UserButton } from "components/userbutton";
import useLogout from "hooks/useLogout";
import { selectIsDarkTheme } from "features/interfaceState/selectors";
import { ThemeButton } from "templates/ThemeButton";
import { ITopMenuProps } from "./index.d";
import { $Logo, $MenuOption, $TopMenuContainer, $TopMenuContent, $TopMenuOptions } from "./styles";
import { Option } from "./option";
import { userOptions } from "constants/userOptions";

/**
 * I am the top menu
 */
export const TopMenu = (props: ITopMenuProps) => {

    const logout = useLogout();

    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <$TopMenuContainer>
            <$TopMenuContent>

                <NavLink to="/"><$Logo src={isDarkTheme ? LogoWhite : Logo} alt="logo" /></NavLink>

                <$TopMenuOptions >
                    {props.options.map(Option)}

                    {props.signed ?
                        <UserButton username={props.username} options={userOptions}/>
                        :
                        <NavLink to='login'>
                            <$MenuOption onClick={logout}>
                                <MdLogin />
                                <p>Login</p>
                            </$MenuOption>
                        </NavLink>
                    }
                    <ThemeButton />
                </$TopMenuOptions>

            </$TopMenuContent>
        </$TopMenuContainer>
    )
}