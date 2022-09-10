import { IDivisorProps } from "./divisor.d";
import { $Divisor } from "./styles";

export const Divisor = (props: IDivisorProps) => (
    <$Divisor>
        {props.children}
    </$Divisor>
)