import { ModeProvider } from '@/store/mode-context'
import Mode from '@/components/Mode'
import SpinnerBox from '@/components/SpinnerBox'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<ModeProvider>
    <Component {...pageProps} />
    <Mode />
    <SpinnerBox />
  </ ModeProvider>)
}
