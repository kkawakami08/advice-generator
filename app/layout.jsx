import {Manrope} from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Advice Generator',
  description: 'Randomly generate advice at the click of a button',
}

const manrope = Manrope({
  weight: '800',
  subsets:['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
