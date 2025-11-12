import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Star, Quote } from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Michael Anderson",
      role: "CEO, Tech Solutions",
      text: "Docklands Health transformed my life. After years of back pain, their chiropractic care and personalized approach gave me my quality of life back. The team is absolutely exceptional.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      feedback: "Highly Recommended",
    },
    {
      name: "Sarah Thompson",
      role: "Marketing Director",
      text: "The physiotherapy sessions were truly transformative. Not only did I recover from my injury faster than expected, but I also learned valuable preventive techniques. Outstanding care!",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      feedback: "Excellent Service",
    },
    {
      name: "James Rodriguez",
      role: "Fitness Enthusiast",
      text: "The clinical pilates program at Docklands Health is world-class. My core strength improved dramatically, and my posture has never been better. Highly recommend their services!",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      feedback: "Life Changing",
    },
    {
      name: "Emily Chen",
      role: "Health Coach",
      text: "The nutrition counseling program is evidence-based and practical. Their nutritionist understood my goals and created a sustainable plan. Results came quickly and lasted!",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      feedback: "Professional Team",
    },
    {
      name: "David Martinez",
      role: "Professional Athlete",
      text: "As an athlete, I trusted Docklands Health with my recovery. Their comprehensive approach and attention to detail are unmatched. They got me back in the game stronger than ever!",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      feedback: "Top Tier Care",
    },
    {
      name: "Lisa Watson",
      role: "Wellness Advocate",
      text: "What impressed me most was the holistic approach. They didn't just treat symptoms; they addressed root causes. The whole team is passionate and knowledgeable!",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      feedback: "Highly Professional",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-[#00b8e6]/2 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b8e6]/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00b8e6]/8 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
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
            <span className="px-6 py-2 bg-[#00b8e6]/10 text-[#00b8e6] rounded-full text-sm font-semibold tracking-wide uppercase">
              Success Stories
            </span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Real stories from real patients who have experienced transformative care at Docklands Health.
            Join thousands of satisfied individuals on their wellness journey.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            fadeEffect={{
              crossFade: true,
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="pb-8">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 border border-gray-100 overflow-hidden">
                    {/* Gradient background decoration */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#00b8e6]/10 to-transparent rounded-bl-full"></div>

                    <div className="relative p-12 lg:p-16">
                      {/* Quote Icon */}
                      <div className="absolute top-8 left-8 w-12 h-12 bg-[#00b8e6]/10 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-[#00b8e6]" />
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-700 text-lg lg:text-2xl leading-relaxed mb-10 font-light italic">
                        "{testimonial.text}"
                      </p>

                      {/* Rating and Feedback */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex gap-2">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 * i, duration: 0.4 }}
                            >
                              <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-sm font-bold text-[#00b8e6] bg-[#00b8e6]/10 px-4 py-2 rounded-full">
                          {testimonial.feedback}
                        </span>
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#00b8e6]/30 shadow-lg">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </motion.div>
                        <div className="text-left flex-1">
                          <h3 className="text-gray-900 font-bold text-lg">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 text-sm font-medium">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Carousel Indicators */}
          <motion.div
            className="flex justify-center gap-2 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {testimonials.map((_, index) => (
              <motion.div
                key={index}
                className="h-2 rounded-full bg-gray-300 cursor-pointer transition-all duration-300 hover:bg-[#00b8e6]"
                whileHover={{ scale: 1.2 }}
                initial={{ width: 8 }}
                animate={{ width: 8 }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#00b8e6] to-[#0097c4] rounded-2xl p-8 text-white text-center shadow-xl"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-5xl font-bold mb-2">10,000+</h3>
            <p className="text-white/90 font-medium">Happy Patients</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#00b8e6] to-[#0097c4] rounded-2xl p-8 text-white text-center shadow-xl"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-5xl font-bold mb-2">4.9/5</h3>
            <p className="text-white/90 font-medium">Average Rating</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-[#00b8e6] to-[#0097c4] rounded-2xl p-8 text-white text-center shadow-xl"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-5xl font-bold mb-2">98%</h3>
            <p className="text-white/90 font-medium">Satisfaction Rate</p>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .testimonials-swiper {
          padding: 40px 20px;
          overflow: visible;
        }

        .swiper-slide {
          opacity: 0.3;
          transition: opacity 0.5s ease;
        }

        .swiper-slide-active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
