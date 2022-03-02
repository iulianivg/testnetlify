import React from 'react'
import { Button, useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Button onClick={onPresentConnectModal} {...props} style={{boxShadow:'rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px'}}>
      {/* <img src="https://stake.bchpad.cash/static/media/bchpad_logo.c88fe0dd.png" alt="logo" style={{width:'100%', maxWidth:'55px'}} />  */}
      {t('Connect Wallet')}
    </Button>
  )
}

export default ConnectWalletButton
