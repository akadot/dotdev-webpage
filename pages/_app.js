import GlobalStyle from '../components/GlobalStyle'
import Menu from '../components/Menu'
import { PageContainer, HeaderContainer, ContentContainer } from "../components/Layout"
import Social from '../components/Social'
import Email from '../components/Email'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <HeaderContainer>
        <p>Logo</p>
        <Menu />
      </HeaderContainer>

      <Social />
      <ContentContainer>
        <Component {...pageProps} />
      </ContentContainer>
      <Email />

    </>
  )
}
