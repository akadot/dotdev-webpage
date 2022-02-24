import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core'
import GlobalStyle from '../styles/GlobalStyle'
import Layout from "../styles/Layout/index"
config.autoAddCss = true;

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
