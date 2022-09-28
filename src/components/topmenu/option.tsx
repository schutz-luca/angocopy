import { DropDown } from "components/dropdown";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { IMenuOption } from "./index.d";
import { $MenuOption } from "./styles";

export const Option = (props: IMenuOption) => {
    const { push } = useHistory();

    const goToOption = () => {
        if (!props.disabled)
            push(props.link)
    }

    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);

    const OptionComponent = () => (
        <$MenuOption className={props.disabled ? 'disabled' : ''} onClick={props?.submenu ? handleClick : goToOption}>
            <p>{props.label}{!!props?.submenu && <HiOutlineChevronDown />}</p>
        </$MenuOption>
    )

    return (
        <>
            {props?.submenu ?
                <$MenuOption>
                    <DropDown component={<OptionComponent />} options={props.submenu} open={open} key={props.label} />
                </$MenuOption>
                :
                <OptionComponent key={props.label} />
            }
        </>
    )
}