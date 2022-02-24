/**
 * IMPORTS
 */
import { MdLogin, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import LogoWhite from "assets/logo-white.svg";
import Logo from "assets/logo.svg";
import useLogout from "hooks/useLogout";
import { ThemeButton } from "templates/ThemeButton";
import { ITopMenuProps } from "./index.d";
import { Option } from "./option";
import { $Logo, $MenuOption, $TopMenuContainer, $TopMenuContent, $TopMenuOptions } from "./styles";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "features/interfaceState/selectors";

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
                        <$MenuOption onClick={logout}>
                            <MdLogout />
                            <p>Logout</p>
                        </$MenuOption>
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