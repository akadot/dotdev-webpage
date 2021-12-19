import GlobalStyle from '../components/GlobalStyle'
import Image from 'next/image'
import { PageContainer, HeaderContainer } from "../components/Layout"
import Menu from '../components/Menu'
import Social from '../components/Social'
import Email from '../components/Email'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Image
        alt="Background Pattern"
        src="/bg.png"
        layout='fill'
        objectFit='cover'
        quality={75}
        className='background'
      />

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
    </>
  )
}
