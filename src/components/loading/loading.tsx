import Lottie from "lottie-react";
import LoadingLottie from "assets/loading-lottie.json";
import { $LoadingContainer } from "./styles";

export const Loading = () => (
    <$LoadingContainer>
        <Lottie animationData={LoadingLottie} />
    </$LoadingContainer>
)