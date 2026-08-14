'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='relative min-h-screen flex items-center pt-24'>
      <div className='absolute inset-0 bg-grid opacity-10' />

      <div className='max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className='inline-flex items-center gap-2 rounded-full border border-engineering-blue/30 bg-engineering-blue/10 px-4 py-2 text-sm text-blue-300'>
            <ShieldCheck className='h-4 w-4' />
            L&T Techgium Hackathon Finalist Project
          </div>

          <h1 className='mt-6 text-5xl lg:text-7xl font-black text-white leading-tight'>
            TENDRIX
          </h1>

          <p className='mt-6 text-xl text-slate-300 leading-relaxed'>
            Bio-inspired tentacle gripper robotic arm with
            machine-learning-assisted adaptive grasping and emergency safe
            homing.
          </p>

          <div className='mt-8 flex gap-4 flex-wrap'>
            <a
              href='#technology'
              className='inline-flex items-center gap-2 rounded-xl bg-engineering-blue hover:bg-blue-600 px-6 py-3 font-semibold transition'
            >
              Explore technology
              <ArrowRight className='h-4 w-4' />
            </a>

            <a
              href='#architecture'
              className='inline-flex items-center gap-2 rounded-xl border border-slate-700 hover:border-engineering-blue px-6 py-3 font-semibold transition'
            >
              View architecture
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className='relative'
        >
          <div className='absolute -inset-6 rounded-3xl bg-engineering-blue/20 blur-3xl' />

          <div className='relative rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-glow'>
            <Image
              src='/images/robotic-arm-hero.jpg'
              alt='TENDRIX robotic arm'
              width={900}
              height={700}
              className='rounded-2xl object-cover'
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
