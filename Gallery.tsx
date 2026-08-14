import Image from 'next/image'

const images = [
  {
    src: '/images/robotic-arm-hero.jpg',
    title: 'TENDRIX prototype',
    description: 'Primary robotic arm prototype and integrated assembly.',
  },
  {
    src: '/images/robotic-arm-side.jpg',
    title: 'Mechanical side assembly',
    description: 'Cable routing, tendon mechanism, and actuator placement.',
  },
  {
    src: '/images/robotic-arm-closeup.jpg',
    title: 'Tentacle gripper mechanism',
    description: 'Adaptive gripping structure and end-effector configuration.',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-white">
            Prototype gallery
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Images from the TENDRIX bio-inspired robotic arm prototype developed
            for adaptive manipulation and industrial safety research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.src}
              className="group rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/60 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={600}
                  height={450}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {image.title}
                </h3>
                <p className="mt-3 text-slate-400 leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
