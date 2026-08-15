import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TENDRIX | Bio-Inspired Robotic Arm',
  description:
    'Bio-Inspired Tentacle Gripper Robotic Arm with ML-Based Emergency Safe Homing System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
