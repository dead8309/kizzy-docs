import { useRouter } from 'next/router'
import React from 'react'

export default {
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Docs'
      }
    }
  },
  head: (<>
    <link rel='shortcut icon' href='/icon.png' />
    <meta
      property='og:description'
      content="Welcome to the Kizzy documentation site! Here you'll find comprehensive guides and documentation to help you get started with the Kizzy app, as well as troubleshooting resources and reference materials. Explore the various sections of the site to learn more about the features and functionality of the Kizzy app."
    />
  </>),
  project: {
    link: 'https://github.com/dead8309/Kizzy',
  },
  chat: {
    link: 'https://discord.gg/vUPc7zzpV5',
  },
  docsRepositoryBase: 'https://github.com/dead8309/kizzy-docs', 
  logo: (
    <>
      <img width="32" height="32" src="./icon.png" style={{borderRadius: '8px'}}/>
      <span style={{ marginLeft: '.4em', fontWeight: 600, fontSize: '150%' }}>
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
}


