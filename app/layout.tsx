import './globals.css'

export const metadata = {
  title: 'API LYNKOOS',
  description: 'Endpoint principal del api de lynkoos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
