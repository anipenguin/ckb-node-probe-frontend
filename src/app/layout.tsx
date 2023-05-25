import Script from 'next/script'
import './globals.scss'

export const metadata = {
  title: 'CKB Full Nodes',
  description: 'CKB Full Nodes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet.fullscreen@2.4.0/Control.FullScreen.css" />
        <Script strategy='beforeInteractive' src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.js" />
        <Script strategy='beforeInteractive' src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.heat/0.2.0/leaflet-heat.js" />
        <Script strategy='beforeInteractive' src="https://unpkg.com/leaflet.fullscreen@2.4.0/Control.FullScreen.js" />
      </head>
      <body>{children}</body>
    </html>
  )
}
