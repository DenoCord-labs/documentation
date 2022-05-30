import { useState } from "react";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme
} from "@mantine/core";
import { Header } from "../components";
import { useEffect } from "react";
import styles from "../styles/app.module.css";
import "../styles/globals.css";
import { DrawerProvider } from "../context/Drawer";
import "nprogress/nprogress.css";
import Router, { useRouter } from "next/router";
import Nprogress from "nprogress";
import { allDocs } from "contentlayer/generated";
import { SpotlightProvider } from "@mantine/spotlight";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done());
Router.events.on("routeChangeError", () => Nprogress.done());

const Sidebar = dynamic(
  // @ts-ignore
  () => import("../components/Sidebar/Sidebar").then((mod) => mod.Sidebar),
  { ssr: false }
);
export default function App({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setColorScheme(localStorage.getItem("theme") as ColorScheme);
    }
  }, []);
  const toggleColorScheme = (value: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const SpotlightActions = allDocs.map((doc) => ({
    title: doc.title,
    description: doc.description,
    onTrigger: () => router.push(`${doc.url}`)
  }));
  return (
    <DrawerProvider>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Header />
          <SpotlightProvider
            actions={SpotlightActions}
            searchPlaceholder="Search..."
            nothingFoundMessage="No Result Found"
            shortcut={["/"]}
          >
            <div className={styles["contentContainer"]}>
              <Sidebar />
              <Component {...pageProps} />
            </div>
          </SpotlightProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </DrawerProvider>
  );
}
