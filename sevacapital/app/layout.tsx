import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Seva Capital - Strategic Impact Investment',
  description: 'Maximizing Global Impact through Strategic Investment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
