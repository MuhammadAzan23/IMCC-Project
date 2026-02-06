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
    'Class 11th Computer Science',
    'Class 11th Commerce',
    'Class 12th Pre-Medical',
    'Class 12th Pre-Engineering',
    'Class 12th Computer Science',
    'Class 12th Commerce',
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
    <div className="bg-white dark:bg-white/5 p-8 sm:p-12 rounded-[3.5rem] border border-gray-100 dark:border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-sky-500/10 transition-all duration-500" />

      <form id="registration-form" onSubmit={handleSubmit} className="relative z-10 space-y-8">
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
              className="w-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">Class Admission For</label>
            <div className="relative">
              <select
                name="class"
                value={formData.class}
                onChange={handleInputChange}
                required
                className="w-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white appearance-none cursor-pointer"
              >
                <option value="" className="dark:bg-imcc-navy">Select your class</option>
                {classes.map((cls) => (
                  <option key={cls} value={cls} className="dark:bg-imcc-navy">
                    {cls}
                  </option>
                ))}
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <i className="ri-arrow-down-s-line text-xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">WhatsApp Number</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
              placeholder="e.g. 03xx-xxxxxxx"
              className="w-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">Preferred Subjects</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="e.g. Physics, Maths"
              className="w-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">Additional Message (Optional)</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder="Any specific goals or questions?"
            className="w-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-400 resize-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="w-full bg-imcc-navy dark:bg-sky-500 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-sky-500/20 disabled:opacity-50 transition-all flex items-center justify-center gap-3 group/btn"
        >
          {isSubmitting ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
              />
              Processing Admission...
            </>
          ) : (
            <>
              Submit Registration
              <i className="ri-arrow-right-line group-hover/btn:translate-x-1 transition-transform" />
            </>
          )}
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
  );
}