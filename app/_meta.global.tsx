import type {MetaRecord} from 'nextra'
import {LinkArrowIcon} from 'nextra/icons'
import type {FC, ReactNode} from 'react'
import {useMDXComponents} from '../mdx-components'

// eslint-disable-next-line react-hooks/rules-of-hooks -- isn't react hook
const {code: Code} = useMDXComponents()

const ExternalLink: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <>
            {children}&thinsp;
            <LinkArrowIcon
                // based on font-size
                height="1em"
                className="x:inline x:align-baseline x:shrink-0"
            />
        </>
    )
}

export default {
    index: {
        type: 'page',
        display: 'hidden'
    },
    lending: {
        type: 'page',
        title: <span className="badge-success after:content-['New']">Lending</span>,
        items: {
            index: '',
            'concepts': '',
            'supply': '',
            'utilisation': '',
            'collateralisation': '',
            'fees': '',
            'markets': '',
            'oracles': '',
            'pricing': '',
            'economic': '',
            'FAQ': '',
            __: {
                type: 'separator',
                title: 'Guides'
            },
            'how-to-supply': '',
            'how-to-borrow': '',
            ___: {
                type: 'separator',
                title: 'Technical Reference'
            },
            'supported-chains-assets': ''
        },
    },
    protocol: {
        type: 'page',
        title: 'The Protocol',
        items: {
            index: '',
            'protocol-overview': '',
            'just-in-time-amm-protocol': '',
            'ingress-witnessing-deposits': '',
            'egress-broadcasting-funds': '',
            'governance-and-security': '',
            'mev-potential-on-chainflip': '',
            'usdusdc-denominated-pools': '',
            'swapping-basics': '',
            'boost': '',
            'delegation': {
                href: '/delegation',
                title: <span className="badge-success after:content-['New']">Delegation</span>
            },
            __: {
                type: 'separator',
                title: 'Guides'
            },
            'how-swapping-works': '',
            'funding-state-chain-account': '',
            'failed-transfer-recovery': '',
            'running-light-rpc-node': {
                href: '/protocol/running-light-rpc-node',
                title: <span className="badge-success after:content-['New']">Running light-rpc node</span>
            },
            'running-an-rpc-node': 'Running Full or Archive Node',
            ___: {
                type: 'separator',
                title: 'Technical Reference'
            },
            'frost-signature-scheme': '',
            'vaults': {
                title: 'Vaults',
                items: {
                    'bitcoin-vault-design': '',
                    'evm-ethereum-vault-design': '',
                    'substrate-dot-vault-design': '',
                    'solana-vault-design': '',
                }
            },
            'supported-chains-assets': {
                title: 'Supported Chains/Assets',
                items: {
                    'chains-assets': '',
                    'testnet-addresses': '',
                    'mainnet-addresses': '',
                }
            },
            'chainflip-cli': '',
            'cross-chain-messaging': {
                title: 'Cross-Chain Messaging',
                items: {
                    'overview': '',
                    'evm-ccm': '',
                    'sol-ccm': '',
                    'hub-xcm': '',
                }
            },
            'token-economics': {
                title: 'Token Economics',
                items: {
                    'current-token-economics-2025-and-beyond': '',
                    'incentive-design-emission-and-burning': '',
                    'genesis-token-economics-pre-2023': '',
                }
            },
        }
    },
    lp: {
        type: 'page',
        title: 'Liquidity Providers',
        items: {
            index: '',
            'active-liquidity': '',
            'passive-liquidity': '',
            'internal-swaps': {
                href: '/internal-swaps',
                title: <span className="badge-success after:content-['New']">Internal Swaps</span>
            },
            'lp-account': '',
            __: {
                type: 'separator',
                title: 'Guides'
            },
            'how-to-provide-liquidity': '',
            'how-to-register-as-lp': '',
            'lp-light-rpc-node': {
                href: '/lp-light-rpc-node',
                title: <span className="badge-success after:content-['New']">LP Light-RPC node</span>
            },
            'running-lp-api' : {
                href: '/lp/running-lp-api',
                title: <span className="badge-danger after:content-['Deprecated']">LP-API binary</span>
            },
            'how-boost-works': '',
            ___: {
                type: 'separator',
                title: 'Technical Reference'
            },
            'lp-api': {
                title: 'LP API',
                items: {
                    index: 'Index',
                    types: 'Types',
                    requests: 'Requests',
                    subscriptions: 'Subscriptions',
                }
            },
            'lp-node-rpcs': {
                title: 'Node RPCs useful for LPs',
                items: {
                    index: 'Index',
                    requests: 'Requests',
                    subscriptions: 'Subscriptions',
                }
            },
            'boost-rpcs': {
                title: 'Boost RPCs',
                items: {
                    index: 'Index',
                    requests: 'Requests',
                }
            }
        },
    },
    brokers: {
        type: 'page',
        title: 'Brokers',
        items: {
            index: '',
            'broker-deposit-channels-swaps': '',
            'broker-vault-swaps': '',
            'broker-account': '',
            'broker-affiliates': '',
            __: {
                type: 'separator',
                title: 'Guides'
            },
            'how-to-register-as-broker': '',
            'broker-light-rpc-node': {
                href: '/broker-light-rpc-node',
                title: <span className="badge-success after:content-['New']">Broker Light-RPC node</span>
            },
            'running-broker-api' : {
                href: '/running-broker-api',
                title: <span className="badge-danger after:content-['Deprecated']">Broker-API binary</span>
            },
            'how-to-use-chainflip-sdk': '',
            ___: {
                type: 'separator',
                title: 'Technical Reference'
            },
            'broker-api': {
                title: 'Broker API',
                items: {
                    index: 'Index',
                    types: 'Types',
                    requests: 'Requests',
                    subscriptions: 'Subscriptions',
                }
            },
            'javascript-sdk': {
                title: 'Javascript SDK',
                items: {
                    index: '',
                    'params': '',
                    'functions': '',
                }
            },
            'vault-swaps-api': {
                title: 'Vault Swaps API',
                items: {
                    'bitcoin': 'Bitcoin',
                    'evm': 'EVM',
                    'solana': 'Solana',
                    'encoding-reference': '',
                }
            },
        }
    },
    validators: {
        type: 'page',
        title: 'Validators',
        items: {
            index: '',
            'validators-role': '',
            'validator-auctions-bonds-and-rewards': '',
            'validator-types-and-states': '',
            'reputation-and-slashing': '',
            'delegation': {
                href: '/delegation',
                title: <span className="badge-success after:content-['New']">Delegation</span>
            },
            _: {
                type: 'separator',
                title: 'Guides'
            },
            'mainnet': {
                title: 'Mainnet',
                items: {
                    'validator-setup': 'Validator Setup',
                    'important-notes': 'Important Notes',
                    'funding': 'Funding',
                    'common-problems': 'Common Problems',
                    'submitting-an-issue': 'Submitting an Issue'
                }
            },
            'testnet': {
                title: 'Testnet',
                items: {
                    'validator-setup': 'Validator Setup',
                    'funding': 'Funding',
                    'common-problems': 'Common Problems',
                    'submitting-an-issue': 'Submitting an Issue'
                }
            },
            ___: {
                type: 'separator',
                title: 'Technical Reference'
            },
            'maintenance': '',
            'default-filepaths-and-ports': ''
        }
    },
}
