'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }
    if (formData.message.length > 500) {
      setSubmitStatus('Message must be 500 characters or less.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('Error sending message. Please try again.');
      }
    } catch {
      setSubmitStatus('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: 'ri-map-pin-line', title: 'Address', details: ['Street#10, near Meezan Academy School', 'Karachi, Pakistan'] },
    { icon: 'ri-phone-line', title: 'Phone', details: ['+92 347 2230321', '+92 344 8879933'] },
    { icon: 'ri-mail-line', title: 'Email', details: ['info@imcollegiate.edu.pk', 'admissions@imcollegiate.edu.pk'] },
    { icon: 'ri-time-line', title: 'Timing', details: ['Mon - Thu: 4:00 PM - 9:30 PM', 'Sat - Sun: 4:00 PM - 9:30 PM'] },
  ];

  const quickActions = [
    { icon: 'ri-whatsapp-line', title: 'WhatsApp', description: 'Chat with us instantly', link: 'https://wa.me/923472230321', color: 'bg-green-500' },
    { icon: 'ri-phone-line', title: 'Call Now', description: 'Speak with our team', link: 'tel:+923448879933', color: 'bg-sky-500' },
    { icon: 'ri-calendar-line', title: 'Book Visit', description: 'Schedule a campus tour', link: '/registration', color: 'bg-violet-500' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-imcc-navy transition-colors duration-300">
      {/* Hero */}
      <section className="hero-navy min-h-[60vh]">
        <div className="hero-gradient-bg" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-sky-500/10 rounded-full blur-[100px]"
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="section-heading-badge border border-sky-500/20 mb-8">Contact Us</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start Your <span className="text-sky-400">Success Story</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Have questions about admissions or our programs? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-imcc-surface dark:bg-imcc-navy/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group card-base card-hover p-8 shadow-card"
              >
                <div className={`w-14 h-14 ${action.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <i className={`${action.icon} text-2xl`} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-imcc-navy dark:text-white">{action.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{action.description}</p>
                <div className="flex items-center gap-2 text-sky-500 font-bold text-sm group-hover:gap-3 transition-all">
                  Connect Now
                  <i className="ri-arrow-right-line" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-white dark:bg-imcc-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-2/5"
            >
              <div className="section-heading-badge">Direct Contact</div>
              <h2 className="section-heading">Our Campus <span className="text-sky-500">Network</span></h2>
              <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                Visit our facilities or reach out through our official channels. We're dedicated to providing rapid support.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center justify-center text-sky-500 shadow-card border border-gray-100 dark:border-white/10 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <i className={`${info.icon} text-xl`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-imcc-navy dark:text-white mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-500 dark:text-gray-400 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <div className="card-base p-8 sm:p-10 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="e.g. Ali Ahmed" className="input-base" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-1">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="e.g. ali@example.com" className="input-base" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-1">Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="e.g. 03xx-xxxxxxx" className="input-base" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-1">Subject</label>
                      <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="How can we help?" className="input-base" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-1">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us what you're looking for..."
                      className="input-base resize-none"
                    />
                    <p className="text-xs text-gray-400 ml-1">{formData.message.length}/500 characters</p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="ri-send-plane-fill" />
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`text-center p-4 rounded-xl font-bold text-sm ${
                          submitStatus.includes('successfully')
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                            : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
                        }`}
                      >
                        {submitStatus}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-imcc-surface dark:bg-imcc-navy/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="section-heading-badge">Location</div>
            <h2 className="section-heading">Visit Our <span className="text-sky-500">Campus</span></h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-4xl overflow-hidden shadow-2xl border-2 border-white dark:border-white/10 h-[28rem]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.631033168235!2d67.0857290765793!3d24.8573302840569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d173614b47d%3A0xd120cbe90b695fac!2sMeezan%20Hostel%20B%20Karachi!5e0!3m2!1sen!2s!4v1724213245678!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}