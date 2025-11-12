import { motion } from "framer-motion";
import { Zap, Activity, Apple, BarChart3, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Chiropractic Care",
      description:
        "Expert spinal alignment and pain relief through evidence-based chiropractic techniques. Our specialists focus on correcting vertebral subluxations to restore proper function, reduce inflammation, and eliminate pain at its source.",
      features: ["Spinal Manipulation", "Postural Analysis", "Pain Relief", "Injury Recovery"],
      icon: <Zap size={40} />,
      image: "https://images.pexels.com/photos/3962287/pexels-photo-3962287.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "#00b8e6",
      position: "left",
      accentColor: "from-[#00b8e6] to-[#0097c4]",
    },
    {
      title: "Physiotherapy",
      description:
        "Comprehensive rehabilitation programs designed to restore mobility, strength, and function. Our physiotherapists use advanced techniques to accelerate recovery from injuries and surgeries while preventing future complications.",
      features: ["Rehabilitation", "Injury Prevention", "Functional Training", "Sports Recovery"],
      icon: <Activity size={40} />,
      image: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "#00b8e6",
      position: "right",
      accentColor: "from-[#00b8e6] to-[#0097c4]",
    },
    {
      title: "Nutrition Counseling",
      description:
        "Personalized nutritional guidance backed by science. Our clinical nutritionists create customized meal plans that fuel your body, balance your energy, and support your specific health goals and lifestyle.",
      features: ["Diet Planning", "Nutritional Assessment", "Supplement Guidance", "Lifestyle Coaching"],
      icon: <Apple size={40} />,
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "#00b8e6",
      position: "left",
      accentColor: "from-[#00b8e6] to-[#0097c4]",
    },
    {
      title: "Clinical Pilates",
      description:
        "Therapeutic Pilates sessions specifically designed to strengthen your core, improve posture, and enhance functional movement. Our certified instructors tailor each session to your individual needs and goals.",
      features: ["Core Strengthening", "Posture Correction", "Flexibility", "Body Conditioning"],
      icon: <BarChart3 size={40} />,
      image: "https://images.pexels.com/photos/4720316/pexels-photo-4720316.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "#00b8e6",
      position: "right",
      accentColor: "from-[#00b8e6] to-[#0097c4]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="px-6 py-2 bg-[#00b8e6]/10 text-[#00b8e6] rounded-full text-sm font-semibold tracking-wide uppercase">
              Comprehensive Care
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our full spectrum of healthcare services, each designed with expertise and compassion
            to help you achieve optimal health and wellness.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${service.position === 'right' ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image Section */}
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#00b8e6]/20 to-[#0097c4]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-96">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.accentColor} rounded-2xl flex items-center justify-center text-white shadow-xl`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: service.position === 'left' ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>

                  {/* Features List */}
                  <motion.div
                    className="space-y-3 my-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b8e6] to-[#0097c4] flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium text-lg">{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00b8e6] to-[#0097c4] text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 mt-6"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00b8e6]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#00b8e6]/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}
