import { pages } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'
import { ListGroup } from 'react-bootstrap'

function PageList() {
  return (
    <nav className="d-flex justify-content-center align-items-center" style={{ height: '100svh' }}>
      <ListGroup as="ol" variant="primary">
        {pages.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-center align-items-center">
            <Link href={`/list/${item.id}`} style={{ textDecoration: 'none' }}>
              {item.name}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </nav>
  )
}

export default PageList
