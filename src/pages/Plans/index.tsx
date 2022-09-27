import { Loading } from "components/loading";
import { PlanCard } from "components/plancard";
import { Title } from "components/title";
import { selectIsLoading } from "features/notify/selectors";
import http from "infra/http";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MotionDiv } from "styles/motiondiv";
import { IPlan } from "types/plan.d";

export const Plans = () => {

    const dispatch = useDispatch();

    const [plans, setPlans] = useState<IPlan[]>();

    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        (async () => {
            try {
                const response = await http.get(`planos`, { dispatch });

                if (!response?.length)
                    throw Error

                setPlans(response);
            }
            catch (error) {
            }
        })()
    }, [])

    return (
        <MotionDiv>
            <Title
                title="Planos"
            />
            {isLoading ?
                <Loading />
                :
                plans?.map(plan => <PlanCard plan={plan} />)
            }
        </MotionDiv>
    )
}