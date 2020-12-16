import { AppProps } from 'next/app'
import 'styles/index.css'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
