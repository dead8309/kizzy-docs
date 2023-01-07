import type { ReactElement } from "react";
import type { AppProps } from "next/app";

import 'nextra-theme-docs/style.css'
import "../styles/globals.css";

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
