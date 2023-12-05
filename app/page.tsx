//@ts-nocheck
"use client"
import Image from 'next/image'
import Tria from './components/Tria'
import dynamic from 'next/dynamic'
const TriaConnectProvider = dynamic(
  () => import("authenticate-test-2"),
  { ssr: false }
)
import { signMessage } from "@tria-sdk/connect"
import { getDefaultWallets } from "authenticate-test-2"
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  goerli,
} from "wagmi/chains";

import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

export default function Home() {

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [
      mainnet,
      polygon,
      optimism,
      arbitrum,
      base,
      zora,
      ...(process.env.REACT_APP_ENABLE_TESTNETS === "true" ? [goerli] : []),
    ],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "Customer App powered by Tria",
    projectId: "bd38d3892c8fd8bc9dabf6fced0bd3c6",
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
  });


  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Tria />
        <button className='absolute top-2 left-2 px-2 py-2 bg-green-500 text-white rounded-md'>Sign Message</button>
      </WagmiConfig>
    </>
  )
}
