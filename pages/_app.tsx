import { AppProps } from 'next/app'
import 'styles/index.css'
import Layout from 'components/Layout'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
