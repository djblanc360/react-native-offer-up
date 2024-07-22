import { User } from './user'

export interface Offer {
  title: string
  data: {
    id: number
    date: string
    title: string
    price: number
    lister: User['id']
  }
}