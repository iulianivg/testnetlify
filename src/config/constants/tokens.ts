import { ChainId, Token } from '@pancakeswap/sdk'
import { serializeToken } from 'state/user/hooks/helpers'
import { SerializedToken } from './types'

const { MAINNET, TESTNET } = ChainId

interface TokenList {
  [symbol: string]: Token
}

interface SerializedTokenList {
  [symbol: string]: SerializedToken
}

export const mainnetTokens = {
  wbnb: new Token(
    MAINNET,
    '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04',
    18,
    'WBCH',
    'Wrapped BCH',
    'https://www.binance.com/',
  ),
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(MAINNET, '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04', 18, 'BCH', 'BCH', 'https://www.binance.com/'),
  bpad: new Token(
    MAINNET,
    '0x9192940099fDB2338B928DE2cad9Cd1525fEa881',
    18,
    'BPAD',
    'BPAD',
    'https://bchpad.io/',
  ),
  busd: new Token(
    MAINNET,
    '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04',
    18,
    'WBCH',
    'Wrapped BCH',
    'https://www.binance.com/',
  ),
  cake: new Token(
    MAINNET,
    '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04',
    18,
    'WBCH',
    'Wrapped BCH',
    'https://www.binance.com/',
  ),
  usdt: new Token(
    MAINNET,
    '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04',
    18,
    'WBCH',
    'Wrapped BCH',
    'https://www.binance.com/',
  ),
  btcb: new Token(
    MAINNET,
    '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04',
    18,
    'WBCH',
    'Wrapped BCH',
    'https://www.binance.com/',
  ),
  ust: new Token(
    MAINNET,
    '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04',
    18,
    'WBCH',
    'Wrapped BCH',
    'https://www.binance.com/',
  ),
  eth: new Token(
    MAINNET,
    '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04',
    18,
    'WBCH',
    'Wrapped BCH',
    'https://www.binance.com/',
  ),
  usdc: new Token(
    MAINNET,
    '0x3743ec0673453e5009310c727ba4eaf7b3a1cc04',
    18,
    'WBCH',
    'Wrapped BCH',
    'https://www.binance.com/',
  ),
}

export const testnetTokens = {}

const tokens = (): TokenList => {
  const chainId = process.env.REACT_APP_CHAIN_ID

  // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
  if (parseInt(chainId, 10) === ChainId.TESTNET) {
    return Object.keys(mainnetTokens).reduce((accum, key) => {
      return { ...accum, [key]: testnetTokens[key] || mainnetTokens[key] }
    }, {})
  }

  return mainnetTokens
}

export const serializeTokens = (): SerializedTokenList => {
  const unserializedTokens = tokens()
  const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
    return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
  }, {})

  return serializedTokens
}

export default tokens()
