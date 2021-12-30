import GlobalStyle from '../components/GlobalStyle'
import Layout from "../components/Layout"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  )
}
