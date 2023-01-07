import React from 'react'

export default { 
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


