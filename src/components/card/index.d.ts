export interface ICardProps {
    thumbnail?: string
    title: string
    description?: string
    actionText?: string
    link?: string
    action?: () => void
}