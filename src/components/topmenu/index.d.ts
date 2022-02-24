export interface ITopMenuProps {
    options: IMenuOptions[]
    signed?: boolean
}

export interface IMenuOption{
    label: string
    link: string
    icon: JSX.Element
}