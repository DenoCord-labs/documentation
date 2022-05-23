import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { Header, Sidebar } from '../components'
import { useEffect } from 'react'
import styles from '../styles/app.module.css'
import '../styles/globals.css';
import { DrawerProvider } from '../context/Drawer'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import Nprogress from 'nprogress'


Router.events.on("routeChangeStart", () => Nprogress.start())
Router.events.on("routeChangeComplete", () => Nprogress.done())
Router.events.on("routeChangeError", () => Nprogress.done())

export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setColorScheme(localStorage.getItem('theme'))
    }
  }, [])
  return (
    <DrawerProvider>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <Header />
          <div className={styles['contentContainer']}>
            <Sidebar />
            <Component {...pageProps} />
          </div>
        </MantineProvider>
      </ColorSchemeProvider>
    </DrawerProvider>
  );
}