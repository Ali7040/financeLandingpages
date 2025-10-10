"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function LeadGenForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

interface LeadFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    interest: string;
    message: string;
}

interface Status {
    type: string;
    message: string;
}

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

interface SubmitEvent extends React.MouseEvent<HTMLButtonElement> {
    preventDefault(): void;
}

const handleSubmit = async (e: SubmitEvent): Promise<void> => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus({ type: '', message: '' });

  try {
    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      message: formData.message,
      phone: formData.phone,
      company: formData.company,
      interest: formData.interest
    };
    console.log('Submitting lead form:', payload);
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    console.log('API response:', data);
    if (data.success) {
      setStatus({
        type: 'success',
        message: 'Thank you! We\'ll get back to you within 24 hours.'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        interest: '',
        message: ''
      });
    } else {
      setStatus({
        type: 'error',
        message: data.error || 'Something went wrong. Please try again.'
      });
    }
  } catch (error) {
    console.error('LeadForm error:', error);
    setStatus({
      type: 'error',
      message: 'Something went wrong. Please try again.'
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black rounded-[40px] relative overflow-hidden flex flex-col justify-between px-8 py-10 min-w-[280px] max-w-lg mx-auto my-12 shadow-2xl"
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div className="absolute inset-0 opacity-40 z-0 pointer-events-none" style={{background: 'radial-gradient(circle at 60% 40%, #222 60%, transparent 100%)'}}></div>
      <div className="relative z-10">
  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{fontFamily:'"Geist",sans-serif'}}>Get Started Today</h3>
  <p className="text-white/80 mb-6" style={{fontFamily:'"Geist",sans-serif'}}>Fill out the form below and we'll get back to you shortly.</p>

      <AnimatePresence>
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
              status.type === 'success' 
                ? 'bg-green-500/20 border border-green-500/50' 
                : 'bg-red-500/20 border border-red-500/50'
            }`}
            style={{fontFamily:'"Geist",sans-serif'}}
          >
            {status.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            )}
            <p className={status.type === 'success' ? 'text-green-300' : 'text-red-300'}>
              {status.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

  <div className="space-y-5">
  <div className="grid md:grid-cols-2 gap-5">
          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <label className="block text-sm font-medium text-white/90 mb-2" style={{fontFamily:'"Geist",sans-serif'}}>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              placeholder="John"
              style={{fontFamily:'"Geist",sans-serif'}}
            />
          </motion.div>
          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <label className="block text-sm font-medium text-white/90 mb-2" style={{fontFamily:'"Geist",sans-serif'}}>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              placeholder="Doe"
              style={{fontFamily:'"Geist",sans-serif'}}
            />
          </motion.div>
        </div>

  <div className="grid md:grid-cols-2 gap-5">
          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <label className="block text-sm font-medium text-white/90 mb-2" style={{fontFamily:'"Geist",sans-serif'}}>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              placeholder="john@example.com"
              style={{fontFamily:'"Geist",sans-serif'}}
            />
          </motion.div>
          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <label className="block text-sm font-medium text-white/90 mb-2" style={{fontFamily:'"Geist",sans-serif'}}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              placeholder="+1 (555) 000-0000"
              style={{fontFamily:'"Geist",sans-serif'}}
            />
          </motion.div>
        </div>

  <div className="grid md:grid-cols-2 gap-5">
          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <label className="block text-sm font-medium text-white/90 mb-2" style={{fontFamily:'"Geist",sans-serif'}}>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              placeholder="Your Company"
              style={{fontFamily:'"Geist",sans-serif'}}
            />
          </motion.div>
          <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <label className="block text-sm font-medium text-white/90 mb-2" style={{fontFamily:'"Geist",sans-serif'}}>I'm Interested In *</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              style={{fontFamily:'"Geist",sans-serif'}}
            >
              <option value="" className="bg-gray-800">Select an option</option>
              <option value="evaluations" className="bg-gray-800">Evaluations</option>
              <option value="competitions" className="bg-gray-800">Competitions</option>
              <option value="education" className="bg-gray-800">Education</option>
              <option value="affiliates" className="bg-gray-800">Affiliate Program</option>
              <option value="other" className="bg-gray-800">Other</option>
            </select>
          </motion.div>
        </div>

        <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <label className="block text-sm font-medium text-white/90 mb-2" style={{fontFamily:'"Geist",sans-serif'}}>Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your needs..."
            style={{fontFamily:'"Geist",sans-serif'}}
          />
        </motion.div>

        <motion.button
          onClick={handleSubmit}
          disabled={isSubmitting}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-neutral-800 hover:bg-neutral-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          style={{fontFamily:'"Geist",sans-serif'}}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </motion.button>
      </div>
      </div>
    </motion.div>
  );
}
