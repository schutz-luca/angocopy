/**
 * IMPORTS
 */
import { Button } from "components/button";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { variants } from "styles/theme";
import { IModalProps } from "./index.d";
import { $CloseContainer, $Modal, $ModalBackground, $ModalContainer } from "./styles";

export const Modal = (props: IModalProps) => {

    const closeModal = () => {
        props.setOpen(false);
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                key={props.open as unknown as string}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {props.open &&
                    <$ModalContainer variants={variants} >
                        <$Modal>
                            <$CloseContainer>
                                <Button onClick={closeModal}>
                                    <MdClose />
                                </Button>
                            </$CloseContainer>
                            {props.children}
                        </$Modal>
                        <$ModalBackground onClick={closeModal}/>
                    </$ModalContainer>
                }

            </motion.div>
        </AnimatePresence>
    )
}