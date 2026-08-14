'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function TeamLead() {
  return (
    <section id='team' className='py-24 border-t border-slate-800'>
      <div className='max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className='relative'
        >
          <div className='absolute -inset-6 rounded-3xl bg-engineering-blue/20 blur-3xl' />
          <div className='relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6'>
            <Image
              src='/images/sayantani-banerjee.jpg'
              alt='Sayantani Banerjee'
              width={700}
              height={800}
              className='rounded-2xl object-cover'
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className='inline-flex rounded-full border border-engineering-blue/30 bg-engineering-blue/10 px-4 py-2 text-sm text-blue-300'>
            Project leadership
          </div>

          <h2 className='mt-6 text-4xl font-black text-white'>
            Sayantani Banerjee
          </h2>

          <p className='mt-3 text-xl text-engineering-blue font-semibold'>
            Project Team Lead • Systems Integration Lead • AI & Robotics
            Researcher
          </p>

          <p className='mt-6 text-slate-300 leading-relaxed'>
            Leading the integration of robotics, computer vision, embedded
            systems, and machine learning into a unified adaptive
            manipulation platform with a strong focus on industrial safety.
          </p>

          <div className='mt-8 flex flex-wrap gap-4'>
            <a
              href='https://github.com/Sayantani9'
              target='_blank'
              className='inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 hover:border-engineering-blue'
            >
              <Github className='h-5 w-5' />
              GitHub
            </a>

            <a
              href='https://www.linkedin.com/in/g-sayantani-mb-65337230b/'
              target='_blank'
              className='inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 hover:border-engineering-blue'
            >
              <Linkedin className='h-5 w-5' />
              LinkedIn
            </a>

            <a
              href='mailto:smb.workspace9@gmail.com'
              className='inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 hover:border-engineering-blue'
            >
              <Mail className='h-5 w-5' />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
