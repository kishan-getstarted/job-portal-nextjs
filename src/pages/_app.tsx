import "@/styles/globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <ThemeProvider theme={theme}>
        <main className={roboto.variable}>
          <ClerkProvider>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
              
            </SignedIn>
            <Component {...pageProps} />
          </ClerkProvider>
        </main>
      </ThemeProvider>



    </AppCacheProvider >

  )
}
