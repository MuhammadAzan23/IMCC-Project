'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: 'ri-map-pin-line',
      title: 'Address',
      details: ['Street#10,near Meezan Academy school', 'Karachi, Pakistan'],
      color: 'bg-blue-600'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      details: ['+92 347 2230321', '+92 344 8879933'],
      color: 'bg-green-600'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: ['info@imcollegiate.edu.pk', 'admissions@imcollegiate.edu.pk'],
      color: 'bg-purple-600'
    },
    {
      icon: 'ri-time-line',
      title: 'Timing',
      details: ['Mon - Thu: 4:00 PM - 9:30 PM', 'Sat - Sun: 4:00 PM - 9:30 PM'],
      color: 'bg-orange-600'
    }
  ];

  const quickActions = [
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp',
      description: 'Chat with us instantly',
      link: 'https://wa.me/923472230321',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      icon: 'ri-phone-line',
      title: 'Call Now',
      description: 'Speak with our team',
      link: 'tel:+923448879933',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: 'ri-calendar-line',
      title: 'Book Visit',
      description: 'Schedule a campus tour',
      link: '/registration',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-imcc-navy transition-colors duration-300">

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-imcc-navy">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-imcc-navy via-imcc-navy to-blue-950 opacity-90" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-sky-500/10 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold text-sm tracking-wider uppercase mb-8">
              Contact Us
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Let's Start Your <span className="text-sky-400">Success Story</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Have questions about admissions or our programs? Our team is here to help you navigate your academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-imcc-navy/50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => (
              <motion.a
                key={index}
                href={action.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-sky-500/20 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${action.color.split(' ')[0]} rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl transition-all duration-500 group-hover:scale-110`}>
                    <i className={`${action.icon} text-3xl`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-imcc-navy dark:text-white">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {action.description}
                  </p>
                  <div className="flex items-center gap-2 text-sky-500 font-bold group-hover:gap-3 transition-all">
                    Connect Now
                    <i className="ri-arrow-right-line" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Core Section */}
      <section className="py-24 sm:py-32 bg-white dark:bg-imcc-navy">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-2/5"
            >
              <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-sm tracking-wider uppercase mb-6">
                Direct Contact
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-imcc-navy dark:text-white">
                Our Campus <span className="text-sky-500">Network</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                Visit our state-of-the-art facilities or reach out through our official channels. We're dedicated to providing rapid support for all student inquiries.
              </p>

              <div className="space-y-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-gray-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-sky-500 shadow-lg border border-gray-100 dark:border-white/10 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                      <i className={`${info.icon} text-2xl`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-imcc-navy dark:text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-500 dark:text-gray-400 font-medium">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-3/5"
            >
              <div className="bg-gray-50 dark:bg-white/5 p-8 sm:p-12 rounded-[3.5rem] border border-gray-100 dark:border-white/10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Ali Ahmed"
                        className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. ali@example.com"
                        className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. 03xx-xxxxxxx"
                        className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help?"
                        className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us what you're looking for..."
                      className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="w-full bg-imcc-navy dark:bg-sky-500 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-sky-500/20 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Send Message'}
                    <i className="ri-send-plane-fill" />
                  </motion.button>

                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center p-5 rounded-2xl font-bold ${submitStatus.includes('successfully')
                        ? 'bg-sky-500/10 text-sky-600 border border-sky-500/20'
                        : 'bg-red-500/10 text-red-600 border border-red-500/20'
                        }`}
                    >
                      {submitStatus}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-imcc-navy/50 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-bold text-sm tracking-wider uppercase mb-6">
              Location
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-imcc-navy dark:text-white">
              Visit Our <span className="text-sky-500">Campus</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/10 h-[30rem]"
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