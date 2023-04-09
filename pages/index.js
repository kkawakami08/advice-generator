import Image from 'next/image'
import {Manrope} from 'next/font/google'
import dividerImage from '../public/images/pattern-divider-mobile.svg'
import diceImage from '../public/images/icon-dice.svg'

const manrope = Manrope({weight: '800', subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${manrope.className} bg-darkBlue h-screen flex items-center justify-center`}>
      <div className="bg-darkGrayishBlue w-11/12 rounded-xl flex items-center flex-col py-10 px-7 relative gap-7 pb-16 md:w-[30rem]">
        <p className="text-neonGreen text-xs tracking-[.3rem]">ADVICE #1</p>
        <p className="text-lightCyan text-2xl text-center leading-8">"a"</p>
        <div className="">
        <Image
      src={dividerImage}
      alt="Divider"
      width={500}
      height={500}
    />
        </div>
        <div className="bg-neonGreen rounded-full w-14 h-14 flex items-center justify-center absolute -bottom-7">
          <div className="w-6">
          <Image
        src={diceImage}
        alt="Dice Image"
        width={500}
        height={500}
      />
          </div>
        </div>
      </div>
    </main>
  )
}