'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Cpu,
  ShieldCheck,
  Bot,
  Brain,
  Zap,
  Camera,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='min-h-screen bg-slate-950 text-white overflow-x-hidden'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,#0b3b6f_0%,#020617_45%,#020617_100%)]' />
        <div className='absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:48px_48px]' />
      </div>

      {/* Navigation */}
      <header className='sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold'>
              T
            </div>
            <div>
              <h1 className='font-bold tracking-wide'>TENDRIX</h1>
              <p className='text-xs text-slate-400'>
                Bio-Inspired Robotics
              </p>
            </div>
          </div>

          <nav className='hidden md:flex items-center gap-8 text-sm text-slate-300'>
            <a href='#about' className='hover:text-white'>
              About
            </a>
            <a href='#technology' className='hover:text-white'>
              Technology
            </a>
            <a href='#architecture' className='hover:text-white'>
              Architecture
            </a>
            <a href='#team' className='hover:text-white'>
              Team
            </a>
            <a href='#contact' className='hover:text-white'>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className='relative'>
        <div className='max-w-7xl mx-auto px-6 py-24 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className='inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300'>
                <ShieldCheck className='h-4 w-4' />
                L&T Techgium Hackathon Finalist Project
              </div>

              <h1 className='mt-6 text-5xl lg:text-7xl font-black leading-tight'>
                TENDRIX
              </h1>

              <p className='mt-6 text-xl text-slate-300 leading-relaxed'>
                Bio-inspired tentacle gripper robotic arm with
                machine-learning-assisted adaptive grasping and emergency
                power-loss safe homing for industrial automation.
              </p>

              <div className='mt-8 flex flex-wrap gap-4'>
                <a
                  href='#technology'
                  className='inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3 font-semibold transition'
                >
                  Explore technology
                  <ArrowRight className='h-4 w-4' />
                </a>

                <a
                  href='#architecture'
                  className='inline-flex items-center gap-2 rounded-xl border border-slate-700 hover:border-blue-400 px-6 py-3 font-semibold transition'
                >
                  View architecture
                </a>
              </div>

              <div className='mt-10 grid grid-cols-3 gap-6'>
                <div>
                  <div className='text-3xl font-black text-blue-400'>6+</div>
                  <div className='text-sm text-slate-400'>
                    Integrated modules
                  </div>
                </div>

                <div>
                  <div className='text-3xl font-black text-amber-400'>AI</div>
                  <div className='text-sm text-slate-400'>
                    Vision-driven control
                  </div>
                </div>

                <div>
                  <div className='text-3xl font-black text-blue-400'>
                    Safe
                  </div>
                  <div className='text-sm text-slate-400'>
                    Emergency homing
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className='relative'>
                <div className='absolute -inset-6 rounded-3xl bg-blue-600/20 blur-3xl' />

                <div className='relative rounded-3xl border border-slate-800 bg-slate-900/70 p-6 backdrop-blur-xl'>
                  <Image
                    src='/images/robotic-arm-hero.jpg'
                    alt='TENDRIX robotic arm'
                    width={800}
                    height={700}
                    className='rounded-2xl object-cover'
                  />

                  <div className='mt-6 grid grid-cols-2 gap-4'>
                    <div className='rounded-xl border border-slate-800 bg-slate-950 p-4'>
                      <div className='text-sm text-slate-400'>
                        Gripper type
                      </div>
                      <div className='font-bold mt-1'>Tentacle adaptive</div>
                    </div>

                    <div className='rounded-xl border border-slate-800 bg-slate-950 p-4'>
                      <div className='text-sm text-slate-400'>
                        Safety mode
                      </div>
                      <div className='font-bold mt-1'>Autonomous homing</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id='about' className='py-24 border-t border-slate-800'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='max-w-3xl'>
            <h2 className='text-4xl font-black'>Project overview</h2>
            <p className='mt-6 text-lg text-slate-300 leading-relaxed'>
              TENDRIX is a cable-tendon robotic manipulation platform inspired
              by octopus biomechanics. The system combines compliant adaptive
              gripping, computer vision, machine learning, and embedded safety
              control to enable reliable manipulation of fragile and irregular
              objects while maintaining controlled behavior during unexpected
              power failures.
            </p>
          </div>

          <div className='mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                icon: Bot,
                title: 'Bio-inspired robotics',
                text: 'Adaptive tentacle-based gripping',
              },
              {
                icon: Brain,
                title: 'Machine learning',
                text: 'Vision-assisted grasp planning',
              },
              {
                icon: ShieldCheck,
                title: 'Industrial safety',
                text: 'Power-loss emergency recovery',
              },
              {
                icon: Zap,
                title: 'Embedded systems',
                text: 'Real-time control architecture',
              },
            ].map((item) => (
              <div
                key={item.title}
                className='rounded-2xl border border-slate-800 bg-slate-900/50 p-6'
              >
                <item.icon className='h-8 w-8 text-blue-400' />
                <h3 className='mt-4 font-bold text-lg'>{item.title}</h3>
                <p className='mt-2 text-slate-400'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section
        id='technology'
        className='py-24 border-t border-slate-800'
      >
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-4xl font-black'>Core technologies</h2>

          <div className='mt-12 grid lg:grid-cols-3 gap-8'>
            {[
              {
                icon: Cpu,
                title: 'Cable-tendon mechanics',
                text: 'Lightweight transmission architecture for compliant motion and reduced end-effector inertia.',
              },
              {
                icon: Camera,
                title: 'Computer vision',
                text: 'Object detection, pose estimation, and grasp point prediction using AI-assisted perception.',
              },
              {
                icon: ShieldCheck,
                title: 'Emergency safe homing',
                text: 'Backup-powered controlled descent, object release, and autonomous return to a safe position.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className='rounded-3xl border border-slate-800 bg-slate-900/60 p-8'
              >
                <card.icon className='h-10 w-10 text-blue-400' />
                <h3 className='mt-6 text-2xl font-bold'>{card.title}</h3>
                <p className='mt-4 text-slate-300 leading-relaxed'>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section
        id='architecture'
        className='py-24 border-t border-slate-800'
      >
        <div className='max-w-6xl mx-auto px-6'>
          <h2 className='text-4xl font-black'>System architecture</h2>

          <div className='mt-12 rounded-3xl border border-slate-800 bg-slate-900/60 p-8'>
            <div className='grid md:grid-cols-5 gap-4 text-center'>
              {[
                'Camera',
                'ML Vision',
                'Grasp Planner',
                'Controller',
                'Tendon Gripper',
              ].map((step, index) => (
                <div key={step} className='flex items-center gap-4'>
                  <div className='flex-1 rounded-xl bg-slate-950 border border-slate-800 p-5'>
                    <div className='text-sm text-blue-400 font-semibold'>
                      Step {index + 1}
                    </div>
                    <div className='mt-2 font-bold'>{step}</div>
                  </div>
                  {index !== 4 && (
                    <ArrowRight className='hidden md:block text-blue-400' />
                  )}
                </div>
              ))}
            </div>

            <div className='mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6'>
              <div className='font-bold text-amber-300'>
                Emergency safety pipeline
              </div>
              <p className='mt-2 text-slate-300'>
                Power monitor → backup activation → controlled deceleration →
                safe object release → autonomous homing sequence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team lead */}
      <section id='team' className='py-24 border-t border-slate-800'>
        <div className='max-w-6xl mx-auto px-6'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='relative'>
              <div className='absolute -inset-6 rounded-3xl bg-blue-600/20 blur-3xl' />
              <div className='relative rounded-3xl border border-slate-800 bg-slate-900/60 p-6'>
                <Image
                  src='/images/sayantani-banerjee.jpg'
                  alt='Sayantani Banerjee'
                  width={700}
                  height={800}
                  className='rounded-2xl object-cover'
                />
              </div>
            </div>

            <div>
              <div className='inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300'>
                Project leadership
              </div>

              <h2 className='mt-6 text-4xl font-black'>
                Sayantani Banerjee
              </h2>

              <p className='mt-3 text-xl text-blue-400 font-semibold'>
                Project Team Lead • Systems Integration Lead • AI &
                Robotics Researcher
              </p>

              <p className='mt-6 text-slate-300 leading-relaxed'>
                Leading the integration of robotics, computer vision,
                embedded systems, and machine learning into a unified
                adaptive manipulation platform with a strong focus on
                industrial safety and intelligent automation.
              </p>

              <div className='mt-8 flex flex-wrap gap-4'>
                <a
                  href='https://github.com/Sayantani9'
                  target='_blank'
                  className='inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 hover:border-blue-400'
                >
                  <Github className='h-5 w-5' />
                  GitHub
                </a>

                <a
                  href='https://www.linkedin.com/in/g-sayantani-mb-65337230b/'
                  target='_blank'
                  className='inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 hover:border-blue-400'
                >
                  <Linkedin className='h-5 w-5' />
                  LinkedIn
                </a>

                <a
                  href='mailto:smb.workspace9@gmail.com'
                  className='inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 hover:border-blue-400'
                >
                  <Mail className='h-5 w-5' />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id='contact' className='py-24 border-t border-slate-800'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <h2 className='text-4xl font-black'>Let's build the future of robotics</h2>
          <p className='mt-6 text-lg text-slate-300'>
            Open to collaborations in robotics, AI, industrial automation,
            research, and high-impact engineering projects.
          </p>

          <div className='mt-10 flex flex-wrap justify-center gap-4'>
            <a
              href='mailto:smb.workspace9@gmail.com'
              className='inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3 font-semibold'
            >
              <Mail className='h-5 w-5' />
              Contact
            </a>

            <a
              href='https://github.com/Sayantani9'
              target='_blank'
              className='inline-flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-blue-400'
            >
              <Github className='h-5 w-5' />
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
