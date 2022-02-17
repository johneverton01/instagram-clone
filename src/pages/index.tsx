import Head from 'next/head'
import { Header, Feed, AsideProfile } from '../components'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
				<link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        <Feed />
        <AsideProfile />
      </main>
    </div>
  )
}
