import '@/styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
export default function App({Component, pageProps: { session, ...pageProps }}) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps}/>
    </ClerkProvider>
  )
}
