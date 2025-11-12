import { motion } from "framer-motion";
import bgimage from "../../assets/bgimage.webp";
import sideimage from "../../assets/sideimage.webp";

export default function HeroSection() {
  const heroBG = bgimage;
  const sideImage = sideimage;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
    },
  };

  const services = [
    "Chiropractic",
    "Physiotherapy",
    "Nutrition",
    "Massage & Myotherapy",
    "Psychology",
    "Kinesiology",
    "Clinical Pilates",
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-30">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Floating Background Blobs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-[#0099cc]/15 rounded-3xl z-5"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute -bottom-32 left-0 w-80 h-80 bg-[#00b8e6]/10 rounded-3xl z-5"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-72 h-72 bg-[#0099cc]/5 rounded-3xl z-5"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#00b8e6]/40 rounded-full z-5"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 gap-12">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-[#0099cc]/20 text-[#00b8e6] font-semibold text-sm backdrop-blur-sm border border-[#0099cc]/30">
              Premium Healthcare Services
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Your Health,{" "}
            <span className="bg-gradient-to-r from-[#0099cc] via-[#00b8e6] to-[#00ccff] bg-clip-text text-transparent animate-pulse">
              Our Priority
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-white/85 text-lg lg:text-xl mb-8 leading-relaxed font-light max-w-2xl"
          >
            Experience holistic wellness at Docklands Health. Our multidisciplinary team of certified professionals delivers comprehensive care tailored to your unique needs. From injury recovery to preventive wellness, we're committed to your long-term health and vitality.
          </motion.p>

          {/* Services Grid */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-white/70 text-sm font-semibold mb-4 uppercase tracking-widest">
              Our Specialties
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium text-center hover:bg-white/20 hover:border-[#00b8e6]/50 transition-all duration-350"
                  whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.35, ease: "easeOut" } }}
                  whileTap={{ scale: 0.98, transition: { duration: 0.2, ease: "easeOut" } }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.05, ease: "easeOut" }}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <motion.a
              href="#book"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0099cc] to-[#00b8e6] text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 text-center group overflow-hidden relative"
              whileHover={{ scale: 1.05, transition: { duration: 0.35, ease: "easeOut" } }}
              whileTap={{ scale: 0.98, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <span className="relative z-10">Book Appointment</span>
              {/* Hover Neon Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#007fa3] to-[#0099cc]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.a>
            <motion.a
              href="#services"
              className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/20 transition-all duration-300 text-center backdrop-blur-sm group"
              whileHover={{ scale: 1.05, transition: { duration: 0.35, ease: "easeOut" } }}
              whileTap={{ scale: 0.98, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <span>Explore Services</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Side Image with Neon/Glow Shapes */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative w-full max-w-lg group"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="relative">
              {/* Neon Glow Behind Image */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-[#0099cc]/50 to-[#00b8e6]/50 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-0"
              />
              {/* Side Image */}
              <motion.img
                src={sideImage}
                alt="Docklands Health Services"
                className="relative z-10 w-full rounded-[2.5rem] shadow-2xl object-cover aspect-square"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 95% 100%, 5% 100%, 0 85%)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
              {/* Accent Shapes */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#00b8e6]/50 rounded-full z-5"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#0099cc]/40 rounded-full z-5"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00b8e6]/50 to-transparent z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </section>
  );
}
