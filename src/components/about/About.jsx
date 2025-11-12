import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Award, Heart, Users, TrendingUp } from "lucide-react";

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const team = [
    {
      name: "Dr. Michael Smith",
      role: "Lead Chiropractor",
      specialization: "Sports Injury & Rehabilitation",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800",
      experience: "15+ years",
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Senior Physiotherapist",
      specialization: "Musculoskeletal Therapy",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
      experience: "12+ years",
    },
    {
      name: "Lucas Brown",
      role: "Clinical Nutritionist",
      specialization: "Holistic Wellness & Diet Planning",
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=800",
      experience: "10+ years",
    },
    {
      name: "Dr. Emily Chen",
      role: "Osteopath",
      specialization: "Chronic Pain Management",
      image: "https://images.pexels.com/photos/5452277/pexels-photo-5452277.jpeg?auto=compress&cs=tinysrgb&w=800",
      experience: "14+ years",
    },
    {
      name: "James Wilson",
      role: "Exercise Physiologist",
      specialization: "Movement Optimization",
      image: "https://images.pexels.com/photos/5452299/pexels-photo-5452299.jpeg?auto=compress&cs=tinysrgb&w=800",
      experience: "8+ years",
    },
  ];

  const milestones = [
    {
      icon: TrendingUp,
      value: "15+",
      label: "Years of Excellence",
      color: "#00b8e6",
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Lives Transformed",
      color: "#00b8e6",
    },
    {
      icon: Award,
      value: "98%",
      label: "Patient Satisfaction",
      color: "#00b8e6",
    },
    {
      icon: Heart,
      value: "25+",
      label: "Healthcare Specialists",
      color: "#00b8e6",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 text-gray-800 min-h-screen">
      <div className="relative py-24 lg:py-32 bg-gradient-to-br from-[#00b8e6]/5 via-white to-[#00b8e6]/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,184,230,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,184,230,0.08),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="px-6 py-2 bg-[#00b8e6]/10 text-[#00b8e6] rounded-full text-sm font-semibold tracking-wide uppercase">
                Our Story
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Redefining Healthcare
              <br />
              <span className="text-[#00b8e6]">One Patient at a Time</span>
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              At Docklands Health, we believe in a holistic approach to wellness. Our world-class multidisciplinary team
              combines cutting-edge treatment methods with personalized care, creating tailored health journeys that
              empower you to live your best life.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-[#00b8e6]/10 rounded-full blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00b8e6] to-[#0097c4] rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To deliver exceptional, evidence-based healthcare that addresses the root cause, not just symptoms.
                We're committed to fostering long-term wellness through comprehensive treatment, preventive care,
                and patient education—helping you achieve sustainable health outcomes.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#00b8e6]/10 rounded-full blur-2xl"></div>
            <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00b8e6] to-[#0097c4] rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be Australia's most trusted integrated healthcare provider, renowned for clinical excellence,
                innovative treatment approaches, and compassionate patient care. We envision a future where every
                individual has access to personalized, holistic healthcare that transforms lives.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-16"
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
              <span className="px-6 py-2 bg-[#00b8e6]/20 text-[#00b8e6] rounded-full text-sm font-semibold tracking-wide uppercase">
                Expert Care Team
              </span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Meet Our Specialists
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A dedicated team of certified healthcare professionals committed to your well-being.
              Each specialist brings years of expertise and a passion for transformative care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="team-slider-container"
          >
            <Swiper
              modules={[Navigation, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              className="team-swiper"
            >
              {team.map((member, index) => (
                <SwiperSlide key={index} className="team-slide">
                  <motion.div
                    className="relative group"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
                      <div className="relative h-80 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10"></div>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-6 right-6 z-20">
                          <div className="bg-[#00b8e6] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {member.experience}
                          </div>
                        </div>
                      </div>

                      <div className="relative z-20 -mt-16 px-8 pb-8">
                        <div className="bg-white rounded-2xl p-6 shadow-xl">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {member.name}
                          </h3>
                          <p className="text-[#00b8e6] font-semibold mb-3">
                            {member.role}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {member.specialization}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center gap-4 mt-12">
              <button className="swiper-button-prev !relative !left-0 !right-0 !top-0 !mt-0 !w-14 !h-14 bg-white hover:bg-[#00b8e6] !text-gray-800 hover:!text-white rounded-full shadow-xl transition-all duration-300 after:!text-xl after:!font-bold flex items-center justify-center group">
                <span className="group-hover:scale-110 transition-transform">‹</span>
              </button>
              <button className="swiper-button-next !relative !left-0 !right-0 !top-0 !mt-0 !w-14 !h-14 bg-white hover:bg-[#00b8e6] !text-gray-800 hover:!text-white rounded-full shadow-xl transition-all duration-300 after:!text-xl after:!font-bold flex items-center justify-center group">
                <span className="group-hover:scale-110 transition-transform">›</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Measurable results that reflect our commitment to excellence and patient-centered care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00b8e6] to-[#0097c4] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00b8e6] to-[#0097c4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-5xl font-bold bg-gradient-to-br from-[#00b8e6] to-[#0097c4] bg-clip-text text-transparent mb-3">
                      {milestone.value}
                    </h3>
                    <p className="text-gray-600 font-medium text-lg">
                      {milestone.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#00b8e6] to-[#0097c4] py-20">
        <motion.div
          className="max-w-5xl mx-auto px-6 lg:px-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-white/90 text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the Docklands Health difference. Book your consultation today and take the first step
            towards optimal health and vitality.
          </p>
          <motion.button
            className="px-10 py-4 bg-white text-[#00b8e6] rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Your Appointment
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .team-swiper {
          padding: 40px 20px 60px;
          overflow: visible;
        }

        .team-slide {
          width: 380px;
          height: auto;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          display: none;
        }

        @media (max-width: 768px) {
          .team-slide {
            width: 300px;
          }
        }
      `}</style>
    </section>
  );
}
