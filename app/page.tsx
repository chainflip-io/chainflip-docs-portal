import { ArrowRightIcon } from '@components/icons'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import { MdxIcon, GlobeIcon, GoIcon } from 'nextra/icons'
import docsCardDark from 'public/assets/card-1.dark.png'
import docsCard from 'public/assets/card-1.png'
import { Feature, Features } from './_components/features'
import { MotionDiv, MotionH3 } from './_components/framer-motion'
import { I18n } from './_components/i18n-demo'
import styles from './page.module.css'
import './page.css'
import type { FC } from 'react'

export const metadata: Metadata = {
  description:
    'Explore the official Chainflip Documentation, your comprehensive resource for building with the Chainflip protocol. Learn about cross-chain swapping, liquidity provisioning, becoming a validator or broker, and access essential developer guides and SDK references for seamless integration.'
}

const IndexPage: FC = () => {
  return (
    <div className="home-content">
      <div className="content-container">
        <h1 className="headline">
          Chainflip Docs, educate <br className="max-sm:hidden" />
           enable and support developers
        </h1>
        <p className="subtitle">
          Whether you're looking to integrate cross-chain swapping functionality, enable liquidity provisioning, <br className="max-md:hidden" />
          or simply explore the potential of the Chainflip Protocol, these docs will serve as a valuable resource. <br className="max-md:hidden" />
        </p>
        <p className="subtitle">
          <Link className={styles.cta} href="/protocol">
            Get started <span>→</span>
          </Link>
        </p>
      </div>
      <div className="features-container x:border-b nextra-border">
        <div className="content-container">
          <Features>
            <Feature
                index={0}
                large
                id="fs-card"
                style={{
                  color: 'white',
                  backgroundImage:
                      'url(/assets/lp.png), url(/assets/gradient-bg.jpeg)',
                  backgroundSize: '140%, 180%',
                  backgroundPosition: '50px -50px, top',
                  backgroundRepeat: 'no-repeat',
                  textShadow: '0 1px 6px rgb(38 59 82 / 18%)',
                  aspectRatio: '1.5'
                }}
                href="/lp"
            >
              <h3>
                Learn about providing liquidity, <br />
                with full control over your portfolio.
              </h3>
            </Feature>
            <Feature index={1} centered href="/validators">
              <h3>
                Become a validator and deploy a node <br className="show-on-mobile" />
                in <span className="font-light">minutes</span>
              </h3>
              <p className="mb-8 text-start">
                The Chainflip Network is distributed, permissionless, Proof-of-Stake system running on {' '}
                <Link href="https://scan.chainflip.io/authorities">
                  150 Validators network
                </Link>{' '}
                securing a crosschain trading protocol without intermediaries or centralized control.
              </p>
              <div>
                <div className={styles.optimization}>
                  <div style={{ fontSize: '.9rem' }} className="leading-8">
                    <code>[Learn more](/more)</code>
                    <br />
                    <code>![Hero](/hero.png)</code>
                  </div>
                </div>
                <ArrowRightIcon
                    width="1.2em"
                    className="mx-auto my-6 rotate-90 text-neutral-600 dark:text-neutral-400"
                />
                <div className={styles.optimization}>
                  <div style={{ fontSize: '.9rem' }} className="leading-8">
                    <code>{'<Link .../>'}</code>
                    <br />
                    <code>{'<Image alt="" .../>'}</code>
                  </div>
                </div>
              </div>
            </Feature>

            <Feature
                index={2}
                centered
                className="flex flex-col items-center justify-center bg-[url(/assets/gradient-bg.jpeg)] bg-cover bg-center text-white"
                href="/docs/guide/markdown"
            >
              <GlobeIcon className="w-2/6 [filter:drop-shadow(0_2px_10px_rgba(0,0,0,.1))]" />
              <p style={{ textShadow: '0 2px 4px rgb(0 0 0 / 20%)' }}>
                Become a {' '}
                <Link
                    href="https://scan.chainflip.io/swaps"
                    className="!text-current"
                >
                   broker
                </Link>{' '}
                and ,{' '}
                <br className="hide-medium" />
                start providing crosschain trading to your end users.
              </p>
            </Feature>
            <Feature
                index={3}
                id="highlighting-card"
                href="/brokers"
            >
              <h3>
                Start initiating swaps <br className="show-on-mobile" />
                behalf of <span className="font-light">end users</span>
              </h3>
              <p>
                Whether you want to integrate your wallet or system through <Link href="https://shiki.style">deposit channels</Link> {''}
                or <Link href="https://shiki.style">vault swaps</Link> {''}, this guide is for you.
              </p>
            </Feature>
            <Feature index={4} href="/brokers">
              <h3>
                Learn more <br className="show-on-mobile" />
                about the broker <span className="font-light">RPC API </span>
              </h3>
              <p className="mb-4">
                Get deep technical reference guide on the different RPC API endpoints you need to manage your integration.
              </p>
              <I18n />
            </Feature>



            <Feature index={5} href="/protocol">
              <h3>
                Explore Chainflip, <br />
                concepts and ecosystem
              </h3>
              <p className="mr-6">
                Kickstart your journey by
                learning how to get started on becoming {' '}
                <Link href="/brokers">
                  Broker
                </Link>
                ,{' '}
                <Link href="/validators">
                  Validator
                </Link>
                , or{' '}
                <Link href="/lp">
                  Liquidity provider
                </Link>
                .
              </p>
            </Feature>
            <Feature index={6} large>
              <h3>And more...</h3>
              <p>
                Your complete guide to building on Chainflip ecosystem.
                Chainflip's enhanced developer docs provide all the guidance and resources you need to launch and scale your projects within the Chainflip ecosystem.

              </p>
              <p className="subtitle">
                <Link className="no-underline" href="/protocol">
                  Start learning about Chainflip →
                </Link>
              </p>
            </Feature>


            {/*<Feature*/}
            {/*    index={7}*/}
            {/*    centered*/}
            {/*    className="feat-darkmode flex items-center justify-center"*/}
            {/*>*/}
            {/*  <MotionDiv*/}
            {/*      animate={{*/}
            {/*        backgroundPosition: [*/}
            {/*          '0% 0%',*/}
            {/*          '50% 40%',*/}
            {/*          '50% 40%',*/}
            {/*          '100% 100%'*/}
            {/*        ],*/}
            {/*        backgroundImage: [*/}
            {/*          'radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)',*/}
            {/*          'radial-gradient(farthest-corner, #06080a, #e2e5ea)',*/}
            {/*          'radial-gradient(farthest-corner, #06080a, #e2e5ea)',*/}
            {/*          'radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)'*/}
            {/*        ]*/}
            {/*      }}*/}
            {/*      transition={{*/}
            {/*        backgroundPosition: {*/}
            {/*          times: [0, 0.5, 0.5, 1],*/}
            {/*          repeat: Infinity,*/}
            {/*          duration: 10,*/}
            {/*          delay: 1*/}
            {/*        },*/}
            {/*        backgroundImage: {*/}
            {/*          times: [0, 0.2, 0.8, 1],*/}
            {/*          repeat: Infinity,*/}
            {/*          duration: 10,*/}
            {/*          delay: 1*/}
            {/*        }*/}
            {/*      }}*/}
            {/*      style={{*/}
            {/*        position: 'absolute',*/}
            {/*        top: 0,*/}
            {/*        left: 0,*/}
            {/*        width: '100%',*/}
            {/*        height: '100%',*/}
            {/*        backgroundImage:*/}
            {/*            'radial-gradient(farthest-corner, #06080a, #e2e5ea)',*/}
            {/*        backgroundSize: '400% 400%',*/}
            {/*        backgroundRepeat: 'no-repeat'*/}
            {/*      }}*/}
            {/*  />*/}
            {/*  <MotionH3*/}
            {/*      animate={{*/}
            {/*        color: ['#dae5ff', '#fff', '#fff', '#dae5ff']*/}
            {/*      }}*/}
            {/*      transition={{*/}
            {/*        color: {*/}
            {/*          times: [0.25, 0.35, 0.7, 0.8],*/}
            {/*          repeat: Infinity,*/}
            {/*          duration: 10,*/}
            {/*          delay: 1*/}
            {/*        }*/}
            {/*      }}*/}
            {/*      style={{*/}
            {/*        position: 'relative',*/}
            {/*        mixBlendMode: 'difference'*/}
            {/*      }}*/}
            {/*  >*/}
            {/*    Dark <br />*/}
            {/*    mode <br />*/}
            {/*    included*/}
            {/*  </MotionH3>*/}
            {/*</Feature>*/}
            {/*<Feature*/}
            {/*    index={8}*/}
            {/*    large*/}
            {/*    id="search-card"*/}
            {/*    href="/docs/docs-theme/theme-configuration#search"*/}
            {/*>*/}
            {/*  <h3>*/}
            {/*    Full-text search,*/}
            {/*    <br />*/}
            {/*    zero-config needed*/}
            {/*  </h3>*/}
            {/*  <p className="z-2">*/}
            {/*    Nextra indexes your content automatically at build-time and*/}
            {/*    performs incredibly fast full-text search via{' '}*/}
            {/*    <Link href="https://github.com/cloudcannon/pagefind">*/}
            {/*      Pagefind*/}
            {/*    </Link>*/}
            {/*    .*/}
            {/*  </p>*/}
            {/*  <div className="z-1 absolute inset-0 size-full bg-[linear-gradient(to_right,white_250px,_transparent)] max-sm:hidden dark:bg-[linear-gradient(to_right,#202020_250px,_transparent)]" />*/}
            {/*  <video*/}
            {/*      autoPlay*/}
            {/*      loop*/}
            {/*      muted*/}
            {/*      playsInline*/}
            {/*      className="x:focus-visible:nextra-focus block dark:hidden"*/}
            {/*  >*/}
            {/*    <source src="/assets/search.mp4" type="video/mp4" />*/}
            {/*  </video>*/}
            {/*  <video*/}
            {/*      autoPlay*/}
            {/*      loop*/}
            {/*      muted*/}
            {/*      playsInline*/}
            {/*      className="x:focus-visible:nextra-focus hidden -translate-x-4 dark:block"*/}
            {/*  >*/}
            {/*    <source src="/assets/search-dark.mp4" type="video/mp4" />*/}
            {/*  </video>*/}
            {/*</Feature>*/}

          </Features>
        </div>
      </div>

      <div className="content-container">
        <div className="flex justify-center items-center">
          <h1 className="headline text-center">
            Learn more about Chainflip
          </h1>
        </div>
        <div className="flex justify-center items-center px-20">
          <p className="subtitle text-center">
            For further information on our Protocol Design and what we are building here at Chainflip Labs, please read our
            {' '}
            <Link href="https://assets.chainflip.io/whitepaper.pdf">
              White paper
            </Link>
            or even our {' '}
            <Link href="https://assets.chainflip.io/lightpaper.pdf">
              Light paper
            </Link>. {' '}
            You can also listen to {' '}
            <Link href="https://members.delphidigital.io/reports/simon-harman-exploring-chainflips-cross-chain-native-amm/">
              Delphi Podcast
            </Link>, {' '}
            <Link href="https://podcasts.apple.com/dk/podcast/zoomerjd-interviews-14-simon-harman/id1517044959?i=1000526213082">
              Zoomer JD Interviews
            </Link>, or {' '}
            <Link href="https://www.cryptounstacked.com/deep-dive-chainflip-how-to-design-for-frictionless-cryptocurrency-swaps/#play">
              Crypto Unstacked
            </Link>, {' '}
          </p>
        </div>
        <div className="flex justify-center items-center mt-4 mb-20">
          <iframe
              className="sm:h-[320px] lg:h-[480px] w-9/12"
              src="https://youtube.com/embed/V1TG08BeYvQ"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
