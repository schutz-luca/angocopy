
export interface IDropDownProps {
    component: JSX.Element
    options: IOption[]
    open?: boolean
}

export interface IOption {
    label: string
    action?: () => void
    link?: string
    icon?: JSX.Element
}