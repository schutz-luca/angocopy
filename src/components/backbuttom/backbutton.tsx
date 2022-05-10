import { useHistory } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { $Button, $Container } from "./styles";

const BackButton = () => {

    // use router
    const { goBack } = useHistory();

    const back = () => goBack()

    return (
        <$Container>
            <$Button onClick={back}><IoArrowBack /></$Button>
        </$Container>
    )
}

export { BackButton };