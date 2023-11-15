import { ListItem, ListProps } from '@/interfaces'
import Link from 'next/link'
import * as React from 'react'
import { Button, ListGroup } from 'react-bootstrap'

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ListGroup>
      {items.length !== 0 ? (
        items.map((item) => (
          <Link href={`/item/${item.id}`} style={{ textDecoration: 'none' }} key={item.id}>
            <ListGroup.Item>{item.name}</ListGroup.Item>
          </Link>
        ))
      ) : (
        <div
          style={{
            height: '100svh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <p>Данный список не существует или не доступен</p>
          <Link href={`/`}>
            <Button>Назад</Button>
          </Link>
        </div>
      )}
    </ListGroup>
  )
}

export default List
