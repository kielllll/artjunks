import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { RedirectButton } from '../components'

const navLinks = ['Home', 'About', 'Artists', 'Careers', 'News', 'Company']

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>ArtJunks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='bg-[url("../public/background.png")] bg-no-repeat bg-center bg-cover h-[64rem] px-4 text-white'>
        <nav className="flex items-center">
          <h1 className="text-3xl font-bold my-4">ARTJUNKS</h1>
          <ul className="flex ml-auto items-center">
            {navLinks.map((navLink: string) => (
              <li className="m-4">
                <a href="#">{navLink}</a>
              </li>
            ))}
            <li className="my-4">
              <RedirectButton label='Get Started' />
            </li>
          </ul>
        </nav>
        <div className="mt-[16rem] w-2/4">
          <div className="w-24 h-4 bg-white"></div>
          <h2 className="my-4 text-7xl">
            Art pieces made easy accessible for everyone
          </h2>
          <p className="my-6 text-md w-2/4">
            Learn, buy, and trade art pieces of your favorite artist around the
            world by using crypto currencies.
          </p>
          <RedirectButton label='Learn more' />
        </div>
      </header>

      <main className='p-4'>
        <h2 className='text-2xl font-semibold'>Newest reads</h2>
      </main>

      <footer className="flex h-8 w-full items-center justify-center border-t mt-auto">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ArtJunks
        </a>
      </footer>
    </div>
  )
}

export default Home
