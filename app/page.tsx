import {ArrowRightIcon} from '@components/icons'
import type {Metadata} from 'next'
import Image from 'next/image'
import {Link} from 'nextra-theme-docs'
import {MdxIcon, GlobeIcon, GoIcon, GitHubIcon} from 'nextra/icons'
import docsCardDark from 'public/assets/card-1.dark.png'
import docsCard from 'public/assets/card-1.png'
import {Feature, Features} from './_components/features'
import {MotionDiv, MotionH3} from './_components/framer-motion'
import {I18n} from './_components/i18n-demo'
import styles from './page.module.css'
import './page.css'
import type {FC} from 'react'
import {BoxesIcon, SquareChevronRightIcon} from "lucide-react";
import {Cards} from "nextra/components";
import SocialCards from "private-next-root-dir/app/_components/social-cards";

export const metadata: Metadata = {
    description:
        'Explore the official Chainflip Documentation, your comprehensive resource for building with the Chainflip protocol. Learn about cross-chain swapping, liquidity provisioning, becoming a validator or broker, and access essential developer guides and SDK references for seamless integration.'
}

const IndexPage: FC = () => {
    return (
        <div className="home-content">

            <div className="inline-flex flex-col items-center w-full">
                <img className="h-36 xs:h-48 sm:h-56 lg:h-72 py-8" src="/landing-page/chainflip-waves.png"/>
                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-center">
                    Welcome to Chainflip Docs
                </h1>
                <p className="subtitle px-4 text-center max-w-10/12">
                    Whether you're looking to integrate cross-chain swapping functionality, enable liquidity
                    provisioning,
                    or simply explore the potential of the Chainflip Protocol, these docs will serve as a valuable
                    resource.
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
                            index={1}
                            id="broker-card"
                            href="/brokers"
                            className="bg-gradient-to-r"
                        >
                            <GlobeIcon className="w-7 h-7 my-4 ms-1 text-neutral-700 dark:text-neutral-400"/>
                            <h3 className="text-left">
                                Become a Broker
                            </h3>
                            <p>
                                Start providing crosschain trading to your end users. {' '}
                                <Link href="/brokers/broker-api">
                                    Get deep technical reference guide
                                </Link>{' '}
                                {' '} on the different RPC API endpoints you need to manage your integration.
                            </p>
                        </Feature>
                        <Feature
                            index={2}
                            id="broker-card"
                            href="/lp"
                            className="bg-gradient-to-r"
                        >
                            <SquareChevronRightIcon
                                className="w-7 h-7 my-4 ms-1 text-neutral-800 dark:text-neutral-400"/>
                            <h3 className="text-left">
                                Setup an LP account
                            </h3>
                            <p>
                                Provide liquidity, earn fees and native Bitcoin yield. All through our full-suite
                                Liquidity Provision system, built for both {' '}
                                <Link href="/lp">
                                    automated market-making
                                </Link>{' '} and {' '} <Link href="/lp/trading-strategies">passive liquidity</Link>{' '}
                            </p>
                        </Feature>
                        <Feature
                            index={3}
                            id="broker-card"
                            href="/validators"
                            className="bg-gradient-to-r"
                        >
                            <BoxesIcon className="w-7 h-7 my-4 ms-1 text-neutral-700 dark:text-neutral-400"/>
                            <h3 className="text-left">
                                Become a validator and deploy nodes <br className="show-on-mobile"/>
                                in <span className="font-light">minutes</span>
                            </h3>
                            <p>
                                The Chainflip Network is distributed, permissionless, Proof-of-Stake system running
                                on {' '}
                                <Link href="/validators">
                                    150 Validators network
                                </Link>{' '} securing a crosschain trading protocol without intermediaries or
                                centralized control.
                            </p>
                        </Feature>

                        <Feature index={4} href="/protocol">
                            <h3>
                                Explore Chainflip, <br/>
                                concepts and ecosystem
                            </h3>
                            <p className="mr-6">
                                Kickstart your journey by
                                learning  {' '}
                                <Link href="/protocol/how-swapping-works">
                                    how swapping works
                                </Link>
                                , discover {' '}
                                <Link href="/protocol/just-in-time-amm-protocol">
                                    Just In Time AMM Protocol
                                </Link>
                                {' '}, or understand how {' '}
                                <Link href="/protocol/boost">
                                    Bitcoin swaps are boosted
                                </Link>
                                .
                            </p>
                        </Feature>
                        <Feature index={5} large>
                            <h3>And more...</h3>
                            <p>
                                Your complete guide to building on Chainflip ecosystem.
                                Chainflip's enhanced developer docs provide all the guidance and resources you need to
                                launch and scale your projects within the Chainflip ecosystem.

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
                <div className="flex justify-center items-center mt-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center">
                        Connect with us at Chainflip Labs
                    </h1>
                </div>
                <div className="">
                    <p className="subtitle text-center">
                        For further information on our Protocol Design and what we are building here at Chainflip Labs,
                        please read our
                        {' '}
                        <Link href="https://assets.chainflip.io/whitepaper.pdf">
                            White paper
                        </Link>
                        or our {' '}
                        <Link href="https://assets.chainflip.io/lightpaper.pdf">
                            Light paper
                        </Link>. {' '}
                        You can also listen to {' '}
                        <Link
                            href="https://members.delphidigital.io/reports/simon-harman-exploring-chainflips-cross-chain-native-amm/">
                            Delphi Podcast
                        </Link>, {' '}
                        <Link
                            href="https://podcasts.apple.com/dk/podcast/zoomerjd-interviews-14-simon-harman/id1517044959?i=1000526213082">
                            Zoomer JD Interviews
                        </Link>, or {' '}
                        <Link
                            href="https://www.cryptounstacked.com/deep-dive-chainflip-how-to-design-for-frictionless-cryptocurrency-swaps/#play">
                            Crypto Unstacked
                        </Link>, {' '}
                    </p>
                </div>

                <SocialCards className="mt-10 mb-20"/>

                {/*<div className="flex justify-center items-center mt-10 mb-20">*/}
                {/*    <iframe*/}
                {/*        className="sm:h-[320px] lg:h-[480px] w-9/12"*/}
                {/*        src="https://youtube.com/embed/V1TG08BeYvQ"*/}
                {/*        frameBorder="0"*/}
                {/*        allow="autoplay; encrypted-media"*/}
                {/*        allowFullScreen*/}
                {/*    />*/}
                {/*</div>*/}

            </div>
        </div>
    )
}

export default IndexPage
