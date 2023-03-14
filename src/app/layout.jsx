import Header from '@/components/header'
import './globals.css'

export const metadata = {
  title: 'IMDB',
  description: 'This is IMDB Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
        {children}
        </body>
    </html>
  )
}
