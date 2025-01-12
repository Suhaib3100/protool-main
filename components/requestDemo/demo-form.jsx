'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export function DemoForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    budget: 5000,
    email: '',
    phone: '',
    countryCode: '+1',
    preferredTime: '',
  });

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          phone: `${formData.countryCode}${formData.phone}`,
          budget: formData.budget,
          preferredTime: formData.preferredTime,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(
          'Demo request submitted successfully! Check your email for confirmation.',
        );
        setIsOpen(false);
        setStep(1);
        setFormData({
          firstName: '',
          budget: 5000,
          email: '',
          phone: '',
          countryCode: '+1',
          preferredTime: '',
        });
      } else {
        toast.error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="btn btn-navbar btn-sm">
        Request Demo
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000]"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg mx-auto mt-20 bg-gradient-to-b from-[#1C1C1C] to-[#2A3B14] rounded-xl shadow-[0_0_50px_rgba(159,225,44,0.1)] overflow-hidden border border-zinc-800"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                disabled={isSubmitting}
              >
                <X size={24} />
              </button>

              <div className="p-6">
                <div className="relative overflow-hidden">
                  <motion.div
                    animate={{ x: `${(step - 1) * -100}%` }}
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.8,
                      damping: 20,
                    }}
                    className="flex"
                  >
                    <StepOne onNext={handleNext} className="min-w-full" />
                    <StepTwo
                      formData={formData}
                      updateFormData={updateFormData}
                      onNext={handleNext}
                      onPrevious={handlePrevious}
                      className="min-w-full"
                    />
                    <StepThree
                      formData={formData}
                      updateFormData={updateFormData}
                      onNext={handleNext}
                      onPrevious={handlePrevious}
                      className="min-w-full"
                    />
                    <StepFour
                      formData={formData}
                      updateFormData={updateFormData}
                      onPrevious={handlePrevious}
                      onSubmit={handleSubmit}
                      isSubmitting={isSubmitting}
                      className="min-w-full"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="bg-zinc-950/50 px-6 py-4 border-t border-zinc-800/50">
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#9FE12C] rounded-full"
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ type: 'spring', bounce: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function StepOne({ onNext, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <div className="space-y-8 text-center px-4">
        <div className="space-y-6">
          <div className="w-16 h-16 mx-auto bg-[#9FE12C]/10 rounded-full flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Sparkles className="w-8 h-8 text-[#9FE12C]" />
            </motion.div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            Are you interested in a demo?
          </h2>
          <p className="text-zinc-400 text-lg max-w-sm mx-auto">
            Get a personalized walkthrough of our platform and discover how we
            can help transform your business
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="pt-4"
        >
          <button
            onClick={onNext}
            className="w-full bg-[#9FE12C] text-zinc-900 hover:bg-[#8BC925] transition-all text-lg h-12 rounded-lg shadow-[0_0_20px_rgba(159,225,44,0.3)]"
          >
            Request Demo
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

function StepTwo({
  formData,
  updateFormData,
  onNext,
  onPrevious,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            What&apos;s your name?
          </h2>
          <p className="text-zinc-400">Let us know how to address you</p>
        </div>

        <div className="space-y-3">
          <label htmlFor="firstName" className="text-zinc-300 block">
            First Name
          </label>
          <input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
            placeholder="Enter your first name"
            className="w-full bg-zinc-800/50 border border-zinc-700/50 focus:border-[#9FE12C] text-white placeholder:text-zinc-500 h-12 px-4 rounded-lg outline-none"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <button
              onClick={onPrevious}
              className="w-full border border-zinc-700/50 hover:bg-zinc-800 text-zinc-300 h-12 rounded-lg"
            >
              Back
            </button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <button
              onClick={onNext}
              className="w-full bg-[#9FE12C] text-zinc-900 hover:bg-[#8BC925] h-12 rounded-lg shadow-[0_0_20px_rgba(159,225,44,0.2)]"
              disabled={!formData.firstName}
            >
              Continue
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function StepThree({
  formData,
  updateFormData,
  onNext,
  onPrevious,
  className = '',
}) {
  const countryCodes = [
    { value: '+1', label: 'US (+1)' },
    { value: '+44', label: 'UK (+44)' },
    { value: '+61', label: 'AU (+61)' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            Contact Details
          </h2>
          <p className="text-zinc-400">Tell us how to reach you</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-zinc-300 block">Budget Range</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                value={formData.budget}
                onChange={(e) =>
                  updateFormData({ budget: parseInt(e.target.value) })
                }
                min="5000"
                max="50000"
                step="1000"
                className="w-full"
              />
              <span className="min-w-[100px] text-right text-zinc-400">
                ${formData.budget.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="email" className="text-zinc-300 block">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              placeholder="Enter your email"
              className="w-full bg-zinc-800/50 border border-zinc-700/50 focus:border-[#9FE12C] text-white placeholder:text-zinc-500 h-12 px-4 rounded-lg outline-none"
            />
          </div>

          <div className="space-y-3">
            <label htmlFor="phone" className="text-zinc-300 block">
              Phone Number
            </label>
            <div className="flex gap-2">
              <select
                value={formData.countryCode}
                onChange={(e) =>
                  updateFormData({ countryCode: e.target.value })
                }
                className="w-[140px] bg-zinc-800/50 border border-zinc-700/50 text-white h-12 px-4 rounded-lg outline-none"
              >
                {countryCodes.map((code) => (
                  <option key={code.value} value={code.value}>
                    {code.label}
                  </option>
                ))}
              </select>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData({ phone: e.target.value })}
                placeholder="Enter your phone number"
                className="flex-1 bg-zinc-800/50 border border-zinc-700/50 focus:border-[#9FE12C] text-white placeholder:text-zinc-500 h-12 px-4 rounded-lg outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <button
              onClick={onPrevious}
              className="w-full border border-zinc-700/50 hover:bg-zinc-800 text-zinc-300 h-12 rounded-lg"
            >
              Back
            </button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <button
              onClick={onNext}
              className="w-full bg-[#9FE12C] text-zinc-900 hover:bg-[#8BC925] h-12 rounded-lg shadow-[0_0_20px_rgba(159,225,44,0.2)]"
              disabled={!formData.email || !formData.phone}
            >
              Continue
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function StepFour({
  formData,
  updateFormData,
  onSubmit,
  onPrevious,
  isSubmitting,
  className = '',
}) {
  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            Choose Your Preferred Time
          </h2>
          <p className="text-zinc-400">Select a time slot for your demo</p>
        </div>

        <div className="space-y-3">
          <label htmlFor="time" className="text-zinc-300 block">
            Preferred Time
          </label>
          <select
            id="time"
            value={formData.preferredTime}
            onChange={(e) => updateFormData({ preferredTime: e.target.value })}
            className="w-full bg-zinc-800/50 border border-zinc-700/50 text-white h-12 px-4 rounded-lg outline-none"
            disabled={isSubmitting}
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 pt-4">
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <button
              onClick={onPrevious}
              className="w-full border border-zinc-700/50 hover:bg-zinc-800 text-zinc-300 h-12 rounded-lg"
              disabled={isSubmitting}
            >
              Back
            </button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <button
              onClick={onSubmit}
              className="w-full bg-[#9FE12C] text-zinc-900 hover:bg-[#8BC925] h-12 rounded-lg shadow-[0_0_20px_rgba(159,225,44,0.2)] flex items-center justify-center"
              disabled={!formData.preferredTime || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
