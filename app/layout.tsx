import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Content Lab — by Akshay Iyer',
  description: 'Real A/B experiments run across a 90K+ creator audience on Instagram and TikTok. Growth data, documented.',
  openGraph: {
    title: 'Content Lab — by Akshay Iyer',
    description: 'Real experiments. Real audience. Real data.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">
        {children}
      </body>
    </html>
  )
}
