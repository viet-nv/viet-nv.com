import Head from 'next/head'

const Fallback: React.FC = () => (
  <>
    <Head>
      <title>viet-nv | Bug is like the wind, always by my side</title>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any route will fallback to this page</h2>
  </>
)

export default Fallback
