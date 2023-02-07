import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Layout} from './../layout/Layout'
const inter = Inter({ subsets: ['latin'] })
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./../themes/theme";

export default function Home() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
       <ThemeProvider theme={theme}>
       <CssBaseline />
    <Layout>
    </Layout>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
