import GlobalStyle from '../components/GlobalStyle'
import Menu from '../components/Menu'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Component {...pageProps} />
    </>
  )
}
