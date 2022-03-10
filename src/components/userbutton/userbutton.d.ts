
export interface IUserButtonProps {
    username?: string
    options: IOption[]
}

export interface IOption {
    label: string
    action?: () => void
    link?: string
    icon: JSX.Element
}