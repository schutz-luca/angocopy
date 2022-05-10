export interface ITopMenuProps {
    options: IMenuOptions[]
    signed?: boolean
    username?: string
}

export interface IMenuOption {
    label: string
    link: string
    icon: JSX.Element
    disabled?: boolean
}