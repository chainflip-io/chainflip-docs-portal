import type { MetaRecord } from 'nextra'
import { LinkArrowIcon } from 'nextra/icons'
import type { FC, ReactNode } from 'react'
import { useMDXComponents } from '../mdx-components'

// eslint-disable-next-line react-hooks/rules-of-hooks -- isn't react hook
const { code: Code } = useMDXComponents()

const ExternalLink: FC<{ children: ReactNode }> = ({ children }) => {
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
  protocol: {
    type: 'page',
    title: 'The Protocol',
    items: {
      'introduction-thesis': '',
      'protocol-overview': '',
      'just-in-time-amm-protocol': '',
      'ingress-witnessing-deposits': '',
      'egress-broadcasting-funds': '',
      'governance-and-security': '',
      'mev-potential-on-chainflip': '',
      'usdusdc-denominated-pools': '',
      __: {
        type: 'separator',
        title: 'Guides'
      },
      'how-swapping-works': '',
      'funding-state-chain-account': '',
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
      'lp-account': '',
      'trading-strategies': '',
      __: {
        type: 'separator',
        title: 'Guides'
      },
      'how-to-provide-liquidity': '',
      'how-to-register-as-lp': '',
      'running-lp-api': '',
      'how-boost-works': '',
      ___: {
        type: 'separator',
        title: 'Technical Reference'
      },
      'lp-api': {
        title: 'LP API',
        items: {
          index: '',
          types: '',
          requests: '',
          subscriptions: '',
        }
      },
      'lp-node-rpcs': {
        title: 'Node RPCs useful for LPs',
        items: {
          index: '',
          requests: '',
          subscriptions: '',
        }
      },
      'boost-rpcs': '',
    },
  },
  brokers: {
    type: 'page',
    title: 'Brokers',
    items: {
      index: '',
      'broker-account': '',
      'broker-affiliates': '',
      __: {
        type: 'separator',
        title: 'Guides'
      },
      'running-broker-api': '',
      'how-to-use-chainflip-sdk': '',
      ___: {
        type: 'separator',
        title: 'Technical Reference'
      },
      'broker-api': {
        title: 'Broker API',
        items: {
          index: '',
          types: '',
          requests: '',
          subscriptions: '',
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
      _: {
        type: 'separator',
        title: 'Guides'
      },
      'mainnet': {
        title: 'Mainnet Validator Setup',
        items: {
          'validator-setup': '',
          'important-notes': '',
        }
      },
      'testnet': {
        title: 'Testnet Validator Setup',
        items: {
          'validator-setup': '',
          'important-notes': '',
        }
      }
    }
  },
}
