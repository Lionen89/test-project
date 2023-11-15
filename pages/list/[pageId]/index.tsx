import List from '@/components/List'
import { ListItems } from '@/interfaces'
import { getList } from '@/utils/requests'

export async function getServerSideProps({ params }) {
  const { pageId } = params

  try {
    const results = await getList(pageId)
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
interface ListPageProps {
  results: ListItems
}

const ListPage: React.FC<ListPageProps> = ({ results }) => {
  return <List items={results ? results.items : []} />
}

export default ListPage
