import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { $DropDown, $DropItem, $DropDownContainer } from "./styles";
import { IDropDownProps } from "./dropdown.d";

export const DropDown = (props: IDropDownProps) => (
    <$DropDownContainer>
        {props.component}
        {props.open &&
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
            </$DropDown>
        }
    </$DropDownContainer>
)