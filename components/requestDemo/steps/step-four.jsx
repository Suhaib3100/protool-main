'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2 } from 'lucide-react'

export function StepFour({
  formData,
  updateFormData,
  onSubmit,
  onPrevious,
  isSubmitting = false,
  className = ''
}) {
  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
  ]

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
          <p className="text-zinc-400">
            Select a time slot for your demo
          </p>
        </div>

        <div className="space-y-3">
          <Label htmlFor="time" className="text-zinc-300">Preferred Time</Label>
          <Select
            value={formData.preferredTime}
            onValueChange={value => updateFormData({ preferredTime: value })}
            disabled={isSubmitting}
          >
            <SelectTrigger 
              id="time"
              className="w-full bg-zinc-800/50 border-zinc-700/50 text-white h-12"
            >
              <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-700">
              {timeSlots.map(slot => (
                <SelectItem key={slot} value={slot} className="text-zinc-300">
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-3 pt-4">
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <Button
              onClick={onPrevious}
              variant="outline"
              className="w-full border-zinc-700/50 hover:bg-zinc-800 text-zinc-300 h-12"
              disabled={isSubmitting}
            >
              Back
            </Button>
          </motion.div>
          <motion.div whileTap={{ scale: 0.98 }} className="flex-1">
            <Button
              onClick={onSubmit}
              className="w-full bg-[#9FE12C] text-zinc-900 hover:bg-[#8BC925] h-12 shadow-[0_0_20px_rgba(159,225,44,0.2)]"
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
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}