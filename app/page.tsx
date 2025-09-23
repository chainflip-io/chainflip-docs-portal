import type {Metadata} from 'next'
import {Link} from 'nextra-theme-docs'
import {GlobeIcon} from 'nextra/icons'
import {Feature, Features} from './_components/features'
import styles from './page.module.css'
import './page.css'
import type {FC} from 'react'
import {BoxesIcon, SquareChevronRightIcon} from "lucide-react";
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
                    Welcome to Chainflip's Docs
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
                                    Get the technical reference guide
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
                                Provide liquidity, earn fees, and native Bitcoin yield. All through our full-suite
                                Liquidity Provision system, built for both {' '}
                                <Link href="/lp/active-liquidity">
                                    programmatic strategies
                                </Link>{' '} and {' '} <Link href="/lp/passive-liquidity">passive liquidity</Link>{' '}
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
                                Become a Validator operator and deploy nodes <br className="show-on-mobile"/>
                                in <span className="font-light">minutes</span>
                            </h3>
                            <p>
                                The Chainflip Network is distributed, permissionless, proof-of-stake system run
                                by {' '}
                                <Link href="/validators">
                                    150 Validators wokring together to
                                </Link>{' '} secure a the protocol without intermediaries centralised control.
                            </p>
                        </Feature>

                        <Feature index={4} href="/protocol">
                            <h3>
                                Explore Chainflip's, <br/>
                                concepts and ecosystem
                            </h3>
                            <p className="mr-6">
                                Kickstart your journey by
                                learning {' '}
                                <Link href="/protocol/how-swapping-works">
                                    how swapping works
                                </Link>
                                , discover {' '}
                                <Link href="/protocol/just-in-time-amm-protocol">
                                    the Just In Time AMM Protocol
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
                                Your complete guide to building within Chainflip's ecosystem.
                                Chainflip's developer docs provide all the guidance and resources you need to
                                launch and scale your projects leveraging and being a part of the Chainflip ecosystem.

                            </p>
                            <p className="subtitle">
                                <Link className="no-underline" href="/protocol">
                                    Start learning about Chainflip →
                                </Link>
                            </p>
                        </Feature>
                    </Features>
                </div>
            </div>

            <div className="content-container">
                <div className="flex justify-center items-center mt-20">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center">
                        Connect with the Chainflip COmmunity
                    </h1>
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
