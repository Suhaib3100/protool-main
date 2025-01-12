'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function StepTwo({
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
          <Label htmlFor="firstName" className="text-zinc-300">
            First Name
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
            placeholder="Enter your first name"
            className="bg-zinc-800/50 border-zinc-700/50 focus:border-[#9FE12C] text-white placeholder:text-zinc-500 h-12"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <Button
              onClick={onPrevious}
              variant="outline"
              className="w-full border-zinc-700/50 hover:bg-zinc-800 text-zinc-300 h-12"
            >
              Back
            </Button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <Button
              onClick={onNext}
              className="w-full bg-[#9FE12C] text-zinc-900 hover:bg-[#8BC925] h-12 shadow-[0_0_20px_rgba(159,225,44,0.2)]"
              disabled={!formData.firstName}
            >
              Continue
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
