import { DropDown } from "components/dropdown";
import { useState } from "react";
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
        <$MenuOption disabled={props.disabled} onClick={props?.submenu ? handleClick : goToOption}>
            {props.icon}
            <p>{props.label}</p>
        </$MenuOption>
    )

    return (
        <>
            {props?.submenu ?
                <DropDown component={<OptionComponent />} options={props.submenu} open={open} key={props.label} />
                :
                <OptionComponent key={props.label} />
            }
        </>
    )
}