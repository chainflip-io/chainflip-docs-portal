import { getEnhancedPageMap } from '@components/get-page-map'
import cn from 'clsx'
import type { Metadata } from 'next'
import NextImage from 'next/image'
import { Footer, Layout, Link, Navbar } from 'nextra-theme-docs'
import { Anchor, Banner, Head } from 'nextra/components'
import type { FC, ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  description: 'Learn about the Chainflip protocol.',
  metadataBase: new URL('https://docs.chainflip.io'),
  keywords: [
    'Chainflip',
    'Flip Token',
    'Decentralized Exchange',
    'Permissionless',
    'Native Swapping',
    'Cross-chain',
    'Developer docs'
  ],
  generator: 'Next.js',
  applicationName: 'Chainflip Docs',
  appleWebApp: {
    title: 'Chainflip Docs'
  },
  title: {
    default: 'Chainflip Docs – Chainflip documentation',
    template: '%s | Chainflip'
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: 'Chainflip Docs',
    locale: 'en_US',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://docs.chainflip.io'
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './'
  }
}

const banner = (
  <Banner dismissible={false}>
    🎉 Chainflip 1.11 is released. {' '}
    <Link href="https://github.com/chainflip-io/chainflip-backend/releases" className="text-current!">
      Check the release notes here.
    </Link>
    .
  </Banner>
)
const navbar = (
  <Navbar
    logo={
        <div className="flex font-medium text-lg">
            <img height="25" width="25" src="/chainfliplogo.svg"  alt="logo"/>
            <span className="custom-header hidden lg:flex text-xl font-semibold" style={{ marginLeft: "8px" }}>Chainflip Docs</span>
        </div>
    }
    projectLink="https://github.com/chainflip-io"
  />
)
const footer = (
  <Footer className="flex-col items-center md:items-start">
    <p className="mt-2 text-xs">
      © {new Date().getFullYear()} Chainflip Docs.
    </p>
  </Footer>
)

const RootLayout: FC<{
  children: ReactNode
}> = async ({ children }) => {
  const pageMap = await getEnhancedPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head color={{
          hue: {
              light: 324,
              dark: 151
          },
          saturation: {
              light: 85,
              dark: 67
          },
          lightness: {
              light: 45,
              dark: 50
          }
      }}>
          {/* Basic Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Chainflip Docs" />
          <meta property="og:description" content="Whether you're looking to integrate cross-chain swapping functionality, enable liquidity provisioning, or simply explore the potential of the Chainflip Protocol, these docs will serve as a valuable resource." />
          <meta property="og:url" content="https://docs.chainflip.io" />
          <meta property="og:image" content="https://docs.chainflip.io/chainflip-og-image.png" />
          <meta property="og:image:alt" content="Preview of Chainflip Docs Website" />

          {/* Twitter card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Chainflip Docs" />
          <meta name="twitter:description" content="Whether you're looking to integrate cross-chain swapping functionality, enable liquidity provisioning, or simply explore the potential of the Chainflip Protocol, these docs will serve as a valuable resource." />
          <meta name="twitter:image" content="https://docs.chainflip.io/chainflip-og-image.png" />
      </Head>
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/chainflip-io/chainflip-docs-portal/tree/main"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
