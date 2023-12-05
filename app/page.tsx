"use client"
import Image from 'next/image'
import Tria from './components/Tria'
import dynamic from 'next/dynamic'
const TriaConnectProvider = dynamic(
  () => import("authenticate-test-2"),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <Tria />
    </>
  )
}
