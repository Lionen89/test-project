import { getItemInfo } from '@/utils/requests'
import ItemModal from '../../../components/ItemModal'

export async function getServerSideProps({ params }) {
  const { id } = params

  try {
    const results = await getItemInfo(id)
    return {
      props: {
        results,
      },
    }
  } catch (error) {
    return {
      props: {
        error: 'Failed to fetch data',
      },
    }
  }
}

const ItemPage = ({ results }) => <ItemModal results={results} />
export default ItemPage
