import { Card } from "components/card";
import { IPlanCardProps } from "./index.d";

export const PlanCard = ({ plan }: IPlanCardProps) => {
    return (
        <Card>
            <h1>{plan.plano}</h1>
            <p>{plan.descricao}</p>
        </Card>
    )
}