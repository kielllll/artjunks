import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { navLinks, news } from '../constants'
import { RedirectButton, News } from '../components'

const Home: NextPage = () => {
  const [toggled, setToggled] = useState(false)

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Head>
        <title>ArtJunks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='bg-[url("../public/background.png")] bg-no-repeat bg-center bg-cover lg:h-[64rem] h-[80rem] px-4 text-white'>
        <nav className="flex items-center">
          <h1 className="text-3xl font-bold my-4">ARTJUNKS</h1>
          <ul className="hidden md:flex ml-auto items-center">
            {navLinks.map((navLink: string, index) => (
              <li className="m-4" key={index}>
                <a href="#">{navLink}</a>
              </li>
            ))}
            <li className="my-4">
              <RedirectButton label="Get Started" />
            </li>
          </ul>

          <button
            className="ml-auto sm:hidden"
            onClick={() => setToggled(!toggled)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
        {toggled && (
          <nav className="flex items-center">
            <ul className="flex flex-col justify-center items-center sm:hidden">
              {navLinks.map((navLink: string, index) => (
                <li className="m-4" key={index}>
                  <a href="#">{navLink}</a>
                </li>
              ))}
              <li className="my-4">
                <RedirectButton label="Get Started" />
              </li>
            </ul>
          </nav>
        )}

        <div className="mt-[16rem] lg:w-2/4">
          <div className="w-24 h-4 bg-white"></div>
          <h2 className="my-4 text-7xl">
            Art pieces made easy accessible for everyone
          </h2>
          <p className="my-6 text-md w-2/4">
            Learn, buy, and trade art pieces of your favorite artist around the
            world by using crypto currencies.
          </p>
          <RedirectButton label="Learn more" />
        </div>
      </header>

      <main className="p-4">
        <h2 className="text-2xl font-semibold">Newest reads</h2>

        <div className="flex flex-wrap gap-4">
          {news.map(({ imageUrl, headline }, index) => (
            <div className="lg:basis-[32.76%] basis-auto" key={index}>
              <News imageUrl={imageUrl} headline={headline} />
            </div>
          ))}
        </div>
      </main>

      <footer className="flex h-8 w-full items-center justify-center border-t mt-auto">
        ArtJunks
      </footer>
    </div>
  )
}

export default Home
