    //@ts-nocheck
"use client"
import dynamic from 'next/dynamic'
import "authenticate-test-2/dist/index.css"
const Application = dynamic(
    () => import("authenticate-test-2"),
    { ssr: false }
)

const Tria = () => {
      const dappDomain = typeof window !== 'undefined' ? window?.parent?.origin : null;
    return (
        <Application
            logo="https://www.stackos.io/stackos-logo.svg"
            dappName="Stack OS"
            dappDomain={dappDomain}
            uiType={"yes"}
            primaryColor="#AAFF00"
            defaultChain="FUSE"
            supportedChains={["FUSE", "POLYGON"]}
        />
    )
}

export default Tria
