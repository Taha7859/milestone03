import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Project() {
  return (
    <main>
      <section>
        <div className="space-y-20 px-4 mt-20">
          <h1 className="text-center text-5xl font-serif font-bold">Project</h1>
          <div className="grid gap-6 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href={'https://tahaportfolio.vercel.app/'}
              className="border-2 border-black flex flex-col justify-center rounded-md max-w-sm w-full mx-auto"
            >
              <Image
                src={'/my-portfolio.png'}
                alt={''}
                height={350}
                width={350}
              ></Image>
              <h3 className="text-xl ml-1 font-semibold font-serif">
                Portfolio
              </h3>
              <p className="mt-1 text-sm font-medium">Visit Portfolio...</p>
            </Link>

            <Link
              href={'https://hakheno.vercel.app/'}
              className="border-2 flex flex-col justify-center border-black rounded-md max-w-sm w-full mx-auto"
            >
              <Image
                src={'/eccomerce.png'}
                alt={''}
                height={350}
                width={350}
              ></Image>
              <h3 className="text-xl ml-1 font-semibold font-serif">
                Ecommerce Website
              </h3>
              <p className="mt-1 text-sm font-medium">Visit Website...</p>
            </Link>

            <Link
              href={'https://resume-builder--chi.vercel.app/'}
              className="border-2 border-black rounded-md max-w-sm w-full mx-auto"
            >
              <Image
                src={'/resume.png'}
                alt={''}
                height={350}
                width={350}
              ></Image>
              <h3 className="text-xl ml-1 font-semibold font-serif">Resume</h3>
              <p className="mt-1 text-sm font-medium">Visit Resume...</p>
            </Link>

            <Link
              href={'https://github.com/Taha7859/CLI-GUESSING-NUMBER-GAME'}
              className="border-2 mt-10 border-black rounded-md max-w-sm w-full mx-auto"
            >
              <Image
                src={'/game.png'}
                alt={''}
                height={550}
                width={550}
                className="mt-10"
              ></Image>
              <h3 className="text-xl ml-1 font-semibold font-serif">
                CLI Guessing Game
              </h3>
              <p className="mt-1 text-sm font-medium">
                Visit Guessing Game...
              </p>
            </Link>

            <Link
              href={'https://github.com/Taha7859/Simple-Calculator'}
              className="border-2 flex flex-col justify-center border-black rounded-md max-w-sm w-full mx-auto"
            >
              <Image
                src={'/calculator.webp'}
                alt={''}
                height={350}
                width={350}
              ></Image>
              <h3 className="text-xl ml-1 font-semibold font-serif">
                Calculator
              </h3>
              <p className="mt-1 text-sm font-medium">Visit Calculator...</p>
            </Link>
            
            <Link
              href={'https://taha-counter.vercel.app/'}
              className="border-2 flex flex-col justify-center border-black rounded-md max-w-sm w-full mx-auto"
            >
              <Image
                src={'/counter.jpg'}
                alt={''}
                height={220}
                width={220} className='ml-20'
              ></Image>
              <h3 className="text-xl ml-1 font-semibold font-serif">
                Counter App
              </h3>
              <p className="mt-1 text-sm font-medium">Visit Calculator...</p>
            </Link>
            
          </div>
        </div>
      </section>
    </main>
  )
}

export default Project
