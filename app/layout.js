import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Invitation',
  description: 'This is an event invitation',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <div className="overlay"></div>
      {/* <div className="video-background">
        <iframe
        // height="1904"
        // width="712"
          src="https://www.youtube.com/embed/921VbEMAwwY?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
          title="Starship Mission to Mars"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          // allowfullscreen
        ></iframe>
      </div> */}
        {children}</body>
    </html>
  )
}
