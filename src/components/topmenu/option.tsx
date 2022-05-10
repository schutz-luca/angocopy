import { useHistory } from "react-router-dom";
import { IMenuOption } from "./index.d";
import { $MenuOption } from "./styles";

export const Option = (props: IMenuOption) => {
    const { push } = useHistory();

    const goToOption = () => {
        if (!props.disabled)
            push(props.link)
    }
    return (
        <$MenuOption disabled={props.disabled} onClick={goToOption}>
            {props.icon}
            <p>{props.label}</p>
        </$MenuOption>
    )
}