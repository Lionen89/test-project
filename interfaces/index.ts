export type ListItem = {
  id: number
  name: string
}

export type ListItems = {
  items: ListItem[]
}

export interface ListProps {
  items: ListItem[]
}
export interface Pages {
  id: number
  name: string
}
export interface Results {
  name: string
  text: string
}
