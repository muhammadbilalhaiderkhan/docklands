import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import docklandslogo from "../../assets/docklandslogo.jpg"

export default function Footer() {
  const footerLinks = [
    { name: "Chiropractic", href: "#" },
    { name: "Physiotherapy", href: "#" },
    { name: "Nutrition", href: "#" },
    { name: "Massage & Myotherapy", href: "#" },
    { name: "Psychology", href: "#" },
    { name: "Kinesiology", href: "#" },
    { name: "Clinical Pilates", href: "#" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="relative bg-white text-gray-800 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#0099cc]/10 rounded-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#00b8e6]/10 rounded-3xl"
          animate={{ scale: [1, 1.1, 1], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        {/* Top Divider */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200 shadow-inner"></div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo + About */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.a href="#" className="inline-block mb-6 transition-transform duration-300 hover:scale-105">
              <img src={docklandslogo} alt="Docklands Health Logo" className="h-14 w-auto object-contain" />
            </motion.a>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Delivering comprehensive, integrated healthcare solutions across multiple disciplines. Your wellness journey is our commitment.
            </p>
            <motion.div className="flex gap-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="relative p-3 rounded-full bg-gray-100 border border-gray-300 hover:border-[#0099cc]/50 transition-all duration-300 group overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0099cc]/20 to-[#00b8e6]/20 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 text-gray-700 group-hover:text-[#00b8e6] transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-6 text-gray-800 uppercase tracking-wide relative pb-3">
              Our Services
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0099cc] to-[#00b8e6]"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-700 hover:text-[#0099cc] text-sm font-medium transition-colors flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-6 text-gray-800 uppercase tracking-wide relative pb-3">
              Get In Touch
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0099cc] to-[#00b8e6]"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </h3>
            <ul className="space-y-4">
              <motion.li className="flex items-start gap-3 group cursor-pointer" whileHover={{ x: 5 }}>
                <Mail size={18} className="text-[#0099cc] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <a href="mailto:contact@docklandshealth.com" className="text-gray-700 hover:text-[#0099cc] text-sm font-medium transition-colors">
                    contact@docklandshealth.com
                  </a>
                </div>
              </motion.li>
              <motion.li className="flex items-start gap-3 group cursor-pointer" whileHover={{ x: 5 }}>
                <Phone size={18} className="text-[#0099cc] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <a href="tel:+61123456789" className="text-gray-700 hover:text-[#0099cc] text-sm font-medium transition-colors">
                    +61 (0)3 1234 5678
                  </a>
                </div>
              </motion.li>
              <motion.li className="flex items-start gap-3 group cursor-pointer" whileHover={{ x: 5 }}>
                <MapPin size={18} className="text-[#0099cc] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Address</p>
                  <p className="text-gray-700 text-sm font-medium">
                    123 Docklands Street<br />
                    Melbourne, VIC 3008, Australia
                  </p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-bold text-lg mb-6 text-gray-800 uppercase tracking-wide relative pb-3">
              Stay Updated
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0099cc] to-[#00b8e6]"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              />
            </h3>
            <p className="text-gray-600 text-sm mb-4">Subscribe to our wellness tips and health updates.</p>
            <motion.form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#0099cc] focus:ring-2 focus:ring-[#0099cc]/30 transition-all duration-300 text-sm"
              />
              <motion.button
                type="submit"
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-[#0099cc] to-[#00b8e6] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#0099cc]/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} />

        {/* Bottom Bar */}
        <motion.div className="mt-12 flex flex-col lg:flex-row justify-between items-center gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Docklands Health. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <motion.a href="#" className="text-gray-500 hover:text-[#0099cc] transition-colors duration-300" whileHover={{ x: 2 }}>Privacy Policy</motion.a>
            <motion.a href="#" className="text-gray-500 hover:text-[#0099cc] transition-colors duration-300" whileHover={{ x: 2 }}>Terms of Service</motion.a>
            <motion.a href="#" className="text-gray-500 hover:text-[#0099cc] transition-colors duration-300" whileHover={{ x: 2 }}>Contact</motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
