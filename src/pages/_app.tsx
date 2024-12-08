import "@/styles/globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import type { AppProps } from "next/app";
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { alpha, Box, Stack } from "@mui/material";
import Header from './../components/Header';
import SideMenu from "./../components/SideMenu";
import AppNavbar from "./../components/AppNavbar";
import MainGrid from "./../components/MainGrid";
import AuthGuard from "@/comman/AuthGuard";
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
    <ClerkProvider>

      <AuthGuard>

        <AppCacheProvider>
          <ThemeProvider theme={theme}>
            <main className={roboto.variable}>
              <Component {...pageProps} />
            </main>
          </ThemeProvider>
        </AppCacheProvider >
      </AuthGuard>
    </ClerkProvider>

  )
}
