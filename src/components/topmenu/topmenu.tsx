/**
 * IMPORTS
 */
import { MdLogin, MdLogout, MdPerson } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoWhite from "assets/logo-white.svg";
import Logo from "assets/logo.svg";
import { IOption } from "components/dropdown/dropdown.d";
import useLogout from "hooks/useLogout";
import { selectIsDarkTheme } from "features/interfaceState/selectors";
import { ThemeButton } from "templates/ThemeButton";
import { ITopMenuProps } from "./index.d";
import { $Logo, $MenuOption, $TopMenuContainer, $TopMenuContent, $TopMenuOptions } from "./styles";
import { Option } from "./option";
import { userOptions } from "constants/userOptions";
import { useState } from "react";
import { DropDown } from "components/dropdown";
import { $DropItem } from "components/userbutton/styles";

/**
 * I am the top menu
 */
export const TopMenu = (props: ITopMenuProps) => {

    const logout = useLogout();

    const isDarkTheme = useSelector(selectIsDarkTheme);

    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);

    const UserButton = () => (
        <$MenuOption onClick={handleClick} className="userOption">
            <MdPerson />
            <p>{props.username ? props.username : 'Meu Perfil'}</p>
        </$MenuOption>
    )


    const logoutOption: IOption = {
        label: "Logout",
        icon: <MdLogout />,
        action: logout
    };

    const signedOptions = userOptions.concat(logoutOption);

    return (
        <$TopMenuContainer>
            <$TopMenuContent>

                <NavLink to="/"><$Logo src={LogoWhite} alt="logo" /></NavLink>

                <$TopMenuOptions >
                    {props.options.map(Option)}

                    {props.signed ?
                        <$MenuOption className="hightlight">
                            <DropDown component={<UserButton />} options={signedOptions} open={open} />
                        </$MenuOption>
                        :
                        <>
                            <NavLink to='login'>
                                <$MenuOption>
                                    <MdLogin />
                                    <p>Login</p>
                                </$MenuOption>
                            </NavLink>
                            <NavLink to='cadastro'>
                                <$MenuOption className="highlight">
                                    <BiUserPlus />
                                    <p>Cadastre-se</p>
                                </$MenuOption>
                            </NavLink>
                        </>
                    }
                    <ThemeButton />
                </$TopMenuOptions>

            </$TopMenuContent>
        </$TopMenuContainer>
    )
}