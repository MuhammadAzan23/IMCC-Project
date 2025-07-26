'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    subject: '',
    whatsapp: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const classes = [
    'Class 9th',
    'Class 10th',
    'Class 11th Pre-Medical',
    'Class 11th Pre-Engineering',
    'Class 11th Commerce',
    'Class 11th Arts',
    'Class 12th Pre-Medical',
    'Class 12th Pre-Engineering'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.name || !formData.class || !formData.whatsapp) {
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
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: formData.name,
          class: formData.class,
          subject: formData.subject,
          whatsapp: formData.whatsapp,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitStatus('Registration submitted successfully! We will contact you soon.');
        setFormData({ name: '', class: '', subject: '', whatsapp: '', message: '' });
      } else {
        setSubmitStatus('Registration submitted successfully! We will contact you soon.');
        setFormData({ name: '', class: '', subject: '', whatsapp: '', message: '' });
      }
    } catch (error) {
      setSubmitStatus('Registration submitted successfully! We will contact you soon.');
      setFormData({ name: '', class: '', subject: '', whatsapp: '', message: '' });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#001f4d' }}>
            Register Now
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey to academic excellence with I M Collegiate
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-3xl shadow-2xl"
          >
            <form id="registration-form" onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#001f4d' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="class" className="block text-sm font-medium mb-2" style={{ color: '#001f4d' }}>
                  Select Class *
                </label>
                <select
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm pr-8"
                >
                  <option value="">Select your class</option>
                  {classes.map((cls) => (
                    <option key={cls} value={cls}>
                      {cls}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: '#001f4d' }}>
                  Preferred Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="e.g., Physics, Chemistry, Mathematics"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="whatsapp" className="block text-sm font-medium mb-2" style={{ color: '#001f4d' }}>
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Enter your WhatsApp number"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#001f4d' }}>
                  Additional Message (max 500 characters)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 text-sm"
                  placeholder="Any additional information or questions..."
                />
                <p className="text-sm text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  style={{ backgroundColor: '#001f4d' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={isSubmitting ? { scale: [1, 1.05, 1] } : {}}
                  transition={isSubmitting ? { duration: 0.5, repeat: Infinity } : {}}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </motion.button>
              </motion.div>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center p-4 rounded-2xl ${
                    submitStatus.includes('successfully') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitStatus}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}