import '@/styles/globals.css'
import Navbar from './Navbar/Navbar'
export default function App({ Component, pageProps }) {
  return (
  <div>
    <Navbar/>
  <Component {...pageProps} />
  </div>
  )
}
