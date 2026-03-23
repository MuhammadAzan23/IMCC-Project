'use client';

/**
 * RegistrationForm Component
 * ==========================
 * Modern, responsive student registration form with:
 * - Full Name, Phone, Email (optional), Class dropdown
 * - Client-side validation (required fields, phone format)
 * - Duplicate submission prevention (30s cooldown)
 * - Loading states, success/error messages
 * - Framer Motion animations throughout
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Types ───────────────────────────────────────────────────────
interface FormData {
  name: string;
  phone: string;
  email: string;
  class: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  class?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

// ─── Constants ───────────────────────────────────────────────────
const CLASS_OPTIONS = ['Class 9', 'Class 10', 'Class 11', 'Class 12'];
const PHONE_REGEX = /^(\+92|0)?3\d{2}[-\s]?\d{7}$/;
const SUBMISSION_COOLDOWN = 30000; // 30 seconds

// ─── Animation Variants ─────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function RegistrationForm() {
  // ─── State ───────────────────────────────────────────────────
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    class: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  // ─── Input Handler ───────────────────────────────────────────
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear error for the field being edited
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  // ─── Validation ──────────────────────────────────────────────
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!PHONE_REGEX.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone (e.g. 03xx-xxxxxxx).';
    }

    if (!formData.class) {
      newErrors.class = 'Please select a class.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ─── Submit Handler ──────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent rapid re-submissions
    if (Date.now() - lastSubmitTime < SUBMISSION_COOLDOWN) {
      setSubmitStatus('error');
      setStatusMessage('Please wait before submitting again.');
      return;
    }

    if (!validateForm()) return;

    setSubmitStatus('loading');
    setStatusMessage('');

    try {
      console.log('📤 Submitting registration:', formData);

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim() || undefined,
          class: formData.class,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Registration successful');
        setSubmitStatus('success');
        setStatusMessage('Registration Successful 🎉');
        setLastSubmitTime(Date.now());
        // Reset form after success
        setFormData({ name: '', phone: '', email: '', class: '' });
        setErrors({});

        // Auto-hide success message after 8 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 8000);
      } else {
        console.error('❌ Registration failed:', data.error);
        setSubmitStatus('error');
        setStatusMessage(data.error || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('❌ Network error:', error);
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  const isSubmitting = submitStatus === 'loading';

  // ─── Render ──────────────────────────────────────────────────
  return (
    <div className="bg-white dark:bg-white/5 p-8 sm:p-12 rounded-[3.5rem] border border-gray-100 dark:border-white/10 shadow-2xl relative overflow-hidden group">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-sky-500/10 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -ml-12 -mb-12 group-hover:bg-blue-500/10 transition-all duration-500" />

      <motion.form
        id="registration-form"
        onSubmit={handleSubmit}
        className="relative z-10 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ─── Row 1: Name + Class ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Full Name */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="reg-name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Ali Ahmed"
              className={`w-full bg-white dark:bg-white/10 border ${
                errors.name
                  ? 'border-red-400 dark:border-red-400'
                  : 'border-gray-200 dark:border-white/20'
              } px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-400`}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm ml-2 font-medium"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Class Dropdown */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">
              Class <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <select
                name="class"
                id="reg-class"
                value={formData.class}
                onChange={handleInputChange}
                className={`w-full bg-white dark:bg-white/10 border ${
                  errors.class
                    ? 'border-red-400 dark:border-red-400'
                    : 'border-gray-200 dark:border-white/20'
                } px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white appearance-none cursor-pointer`}
              >
                <option value="" className="dark:bg-imcc-navy">
                  Select your class
                </option>
                {CLASS_OPTIONS.map((cls) => (
                  <option key={cls} value={cls} className="dark:bg-imcc-navy">
                    {cls}
                  </option>
                ))}
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <i className="ri-arrow-down-s-line text-xl" />
              </div>
            </div>
            <AnimatePresence>
              {errors.class && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm ml-2 font-medium"
                >
                  {errors.class}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ─── Row 2: Phone + Email ────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Phone Number */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">
              Phone Number <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              id="reg-phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. 03xx-xxxxxxx"
              className={`w-full bg-white dark:bg-white/10 border ${
                errors.phone
                  ? 'border-red-400 dark:border-red-400'
                  : 'border-gray-200 dark:border-white/20'
              } px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-400`}
            />
            <AnimatePresence>
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm ml-2 font-medium"
                >
                  {errors.phone}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Email (Optional) */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="text-sm font-bold text-imcc-navy dark:text-white uppercase tracking-wider ml-2">
              Email <span className="text-gray-400 text-xs font-normal">(optional)</span>
            </label>
            <input
              type="email"
              name="email"
              id="reg-email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. student@example.com"
              className="w-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none transition-all dark:text-white placeholder:text-gray-400"
            />
          </motion.div>
        </div>

        {/* ─── Submit Button ───────────────────────────────────── */}
        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            disabled={isSubmitting}
            className="w-full bg-imcc-navy dark:bg-sky-500 text-white py-5 rounded-2xl font-bold text-xl shadow-xl hover:shadow-sky-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 group/btn"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                />
                Processing...
              </>
            ) : (
              <>
                Submit Registration
                <i className="ri-arrow-right-line group-hover/btn:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* ─── Status Message ──────────────────────────────────── */}
        <AnimatePresence>
          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`text-center p-5 rounded-2xl font-bold ${
                submitStatus === 'success'
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                  : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'
              }`}
            >
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 400 }}
                  className="inline-block mr-2"
                >
                  <i className="ri-checkbox-circle-fill text-2xl align-middle" />
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <span className="inline-block mr-2">
                  <i className="ri-error-warning-fill text-2xl align-middle" />
                </span>
              )}
              {statusMessage}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
}