import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { Button } from "components/button";
import { $Footer } from "./styles";

export const Footer = () => (
    <$Footer>
        <div>
            <Button className="phone">
                <BsTelephone />
                +244 000 000 000
            </Button>
            <Button className="whats">
                <BsWhatsapp />
                Chamar no Whats
            </Button>
        </div>
        <p>
            Copyright © {new Date().getFullYear()} AngoCursos - Todos Direitos Reservados
        </p>
    </$Footer>
)