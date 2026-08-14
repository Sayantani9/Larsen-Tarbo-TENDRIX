'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800'
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link href='/' className='flex items-center gap-3'>
          <div className='h-10 w-10 rounded-xl bg-engineering-blue flex items-center justify-center font-bold text-white'>
            T
          </div>
          <div>
            <div className='font-bold tracking-wide text-white'>TENDRIX</div>
            <div className='text-xs text-slate-400'>
              Bio-Inspired Robotics
            </div>
          </div>
        </Link>

        <nav className='hidden md:flex items-center gap-8 text-sm text-slate-300'>
          <a href='#about' className='hover:text-white transition'>
            About
          </a>
          <a href='#technology' className='hover:text-white transition'>
            Technology
          </a>
          <a href='#architecture' className='hover:text-white transition'>
            Architecture
          </a>
          <a href='#team' className='hover:text-white transition'>
            Team
          </a>
          <a href='#contact' className='hover:text-white transition'>
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
