import { $MenuOption } from "components/topmenu/styles";
import useLogout from "hooks/useLogout";
import { useState } from "react";
import { MdLogout, MdPerson } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { $DropDown, $DropItem, $UserButtonContainer } from "./styles";
import { IUserButtonProps } from "./userbutton.d";

export const UserButton = (props: IUserButtonProps) => {

    const logout = useLogout();

    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);

    return (
        <$UserButtonContainer>
            <$MenuOption onClick={handleClick} className="userOption">
                <MdPerson />
                <p>{props.username ? props.username : 'Meu Perfil'}</p>
            </$MenuOption>
            {open &&
                <$DropDown>
                    {props.options.map(option =>
                        <>
                            {option.action &&
                                <$DropItem onClick={option.action} key={option.label}>
                                    <MdLogout />
                                    <p>{option.label}</p>
                                </$DropItem>
                            }
                            {option.link &&
                                <NavLink to={option.link} key={option.link}>
                                    <$DropItem onClick={option.action}>
                                        {option.icon}
                                        <p>{option.label}</p>
                                    </$DropItem>
                                </NavLink>
                            }

                        </>
                    )}
                    <$DropItem onClick={logout}>
                        <MdLogout />
                        <p>Logout</p>
                    </$DropItem>
                </$DropDown>
            }
        </$UserButtonContainer>
    )
}