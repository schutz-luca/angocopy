import { ICardProps } from "./card.d";
import { $Card } from "./styles";

export const Card = (props: ICardProps) => (
    <$Card>
        {props.children}
    </$Card>
)