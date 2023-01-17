import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import React from "react";
import { Logo } from "@components/logo"

const description =
  "Welcome to the Kizzy documentation site! Here you'll find comprehensive guides and documentation to help you get started with the Kizzy app, as well as troubleshooting resources and reference materials. Explore the various sections of the site to learn more about the features and functionality of the Kizzy app.";

const ogImageApi = (title: string) =>
  `https://kizzydocs.vercel.app/api/og?title=${title}`;

export default {
  useNextSeoProps() {
    const { route } = useRouter();
    if (route !== "/") {
      return {
        titleTemplate: "%s – Docs",
      };
    }
  },
  head: () => {
    const { asPath } = useRouter();
    const { title } = useConfig();
    console.log(useRouter())

    return (
      <>
        <link rel="shortcut icon" href="/icon.png" />
        <meta property="og:description" content={description} />
        <meta
          property="og:url"
          content={`https://docs-dead8309.vercel.app${asPath}`}
        />
        <meta property="og:image" content={ogImageApi(title)} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="og:site_name" content="Kizzy Docs"/>
        <meta property="og:type" content="website" />

        <meta name="twitter:site" content="Kizzy Docs" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content={ogImageApi(title)} />
      </>
    );
  },
  project: {
    link: "https://github.com/dead8309/Kizzy",
  },
  chat: {
    link: "https://discord.gg/vUPc7zzpV5",
  },
  docsRepositoryBase: "https://github.com/dead8309/kizzy-docs",
  logo: (
    <>
     <Logo/>
      <span style={{ marginLeft: ".4em", fontWeight: 600, fontSize: "150%" }}>
        Kizzy
      </span>
    </>
  ),
  footer: {
    text: `${new Date().getFullYear()} © Kizzy`,
  },
  darkMode: true,
  primaryHue: 178,
  nextThemes: {
    defaultTheme: "dark",
  },
};
