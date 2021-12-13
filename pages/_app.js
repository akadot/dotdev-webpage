import GlobalStyle from '../components/GlobalStyle'
import Menu from '../components/Menu'
import { PageContainer, HeaderContainer, ContentContainer } from "../components/Layout"
import Social from '../components/Social'
import Email from '../components/Email'

export default function App({ Component, pageProps }) {
  return (
    <PageContainer>
      <GlobalStyle />

      <HeaderContainer className="header">
        <p className="logo">Logo</p>
        <Menu className="menu" />
      </HeaderContainer>

      <Social className="social" />
      <Component {...pageProps} className="content" />
      <Email className="email" />

    </PageContainer>
  )
}
