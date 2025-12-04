/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import style from './layout.module.css'
import './global.css'
import Image from 'next/image'
import logo from '../../public/img/aws_workshop_logo.png'
import Link from 'next/link'

export const metadata = {
  metadataBase: new URL('https://nextra.site'),
  title: {
    template: '%s - AWS Korea'
  },
  description: 'AWS Workshop built with Nextra',
  applicationName: 'AWS Workshop',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Nextra'
  },
  other: {
    'msapplication-TileImage': '/public/img/aws_icon_144x144.jpg',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://workshops.aws/'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <Image src={logo} height={20} alt="AWS Workshop Studio" />
      }
      logoLink="/docs"
      className={style.navbar}
    />
  )

  const footer = (
    <Footer
      className={style.footer}
    >
      © 2008 - {new Date().getFullYear()}, Amazon Web Services, Inc. or its affiliates. All rights reserved.
      <Link href={"https://aws.amazon.com/ko/privacy/"} >Privacy policy</Link>
      <Link href={"https://aws.amazon.com/ko/terms/"} >Terms of use</Link>
      <Link href={"https://aws.amazon.com/ko/legal/cookies/"} >Cookie Notice</Link>
    </Footer>
  )

  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="☁️" />
      <body>
        <Layout
          // banner={<Banner>AWS Korea</Banner>}
          navbar={navbar}
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
