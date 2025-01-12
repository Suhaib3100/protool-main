'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function StepOne({ onNext, className = '' }) {
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
          <Button
            onClick={onNext}
            size="lg"
            className="w-full bg-[#9FE12C] text-zinc-900 hover:bg-[#8BC925] transition-all text-lg h-12 rounded-lg shadow-[0_0_20px_rgba(159,225,44,0.3)]"
          >
            Request Demo
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
