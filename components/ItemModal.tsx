import { Results } from '@/interfaces'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { Button, Modal } from 'react-bootstrap'

interface ItemModalProps {
  results: Results
}

const ItemModal: React.FC<ItemModalProps> = ({ results }) => {
  const [isClient, setIsClient] = React.useState<boolean>(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const router = useRouter()

  const handleModalClose = () => {
    router.push('/list/1')
  }
  return (
    <Modal show={isClient} onHide={handleModalClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      {results ? (
        <>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">{isClient ? results?.name : ''}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{isClient ? results?.text : ''}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleModalClose}>Close</Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Body>
            <p style={{ textAlign: 'center' }}>'Данный элемент не существует или не доступен'</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleModalClose}>Close</Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  )
}

export default ItemModal
