/**
 * IMPORTS
 */
import { ReactNode } from "react";

export interface IModalProps {
    children: ReactNode
    open: boolean
    setOpen: (boolean) => void
}