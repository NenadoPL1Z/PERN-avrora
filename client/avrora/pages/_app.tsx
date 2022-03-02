import type { AppProps } from 'next/app'
import MainLayout from "../src/layout/MainLayout/MainLayout";
import '../src/css/style.css'
import UserProvider from "../src/context/UserContext/UserContext";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    </UserProvider>
  )
}

export default MyApp
