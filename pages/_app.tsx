import Layout from '@/components/Layout'
import '../styles/globals.css'
import { AppProps } from 'next/app'

const IndexPage = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout title="Home">
      <Component {...pageProps} />
    </Layout>
  )
}

export default IndexPage
