import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { SSRProvider } from "@react-aria/ssr";

import { darktheme } from "../themes/dark";

import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <NextUIProvider theme={darktheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </SSRProvider>
  );
}
