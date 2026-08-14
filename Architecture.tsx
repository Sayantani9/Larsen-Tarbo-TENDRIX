'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const modules = [
  'Camera',
  'Computer Vision',
  'ML Classification',
  'Grasp Planner',
  'ESP32 Controller',
  'Cable-Tendon Gripper',
]

export default function Architecture() {
  return (
    <section id='architecture' className='py-24 border-t border-slate-800'>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-4xl font-black text-white'
        >
          System architecture
        </motion.h2>

        <div className='mt-12 rounded-3xl border border-slate-800 bg-slate-900/60 p-8'>
          <div className='grid md:grid-cols-6 gap-4 items-center'>
            {modules.map((module, index) => (
              <div key={module} className='flex items-center gap-3'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='flex-1 rounded-xl border border-slate-700 bg-slate-950 p-5 text-center'
                >
                  <div className='text-sm text-engineering-blue font-semibold'>
                    Stage {index + 1}
                  </div>
                  <div className='mt-2 font-bold text-white'>{module}</div>
                </motion.div>

                {index !== modules.length - 1 && (
                  <ArrowRight className='hidden md:block text-engineering-blue' />
                )}
              </div>
            ))}
          </div>

          <div className='mt-10 rounded-2xl border border-engineering-gold/30 bg-engineering-gold/10 p-6'>
            <div className='font-bold text-engineering-gold'>
              Emergency safety pipeline
            </div>
            <p className='mt-2 text-slate-300'>
              Power monitor → backup activation → controlled deceleration →
              safe release → autonomous homing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
