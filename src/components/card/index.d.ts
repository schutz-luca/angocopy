export interface ICardProps {
    thumbnail?: string
    title: string
    rate?: number
    description?: string
    actionText?: string
    link?: string
    action?: () => void
}