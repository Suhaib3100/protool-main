'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function StepThree({
  formData,
  updateFormData,
  onNext,
  onPrevious,
  className = ''
}) {
  const countryCodes = [
    { value: '+91', label: 'IN (+91)' },
    { value: '+92', label: 'PK (+92)' },
    { value: '+1', label: 'US (+1)' },
    // Add more country codes as needed
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={className}
    >
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            Contact Details
          </h2>
          <p className="text-zinc-400">
            Tell us how to reach you
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <Label className="text-zinc-300">Budget Range</Label>
            <div className="flex items-center gap-4">
              <Slider
                value={[formData.budget]}
                onValueChange={([value]) => updateFormData({ budget: value })}
                max={50000}
                step={1000}
                className="flex-1"
              />
              <span className="min-w-[100px] text-right text-zinc-400">
                ${formData.budget.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-zinc-300">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => updateFormData({ email: e.target.value })}
              placeholder="Enter your email"
              className="bg-zinc-800/50 border-zinc-700/50 focus:border-[#9FE12C] text-white placeholder:text-zinc-500 h-12"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="phone" className="text-zinc-300">Phone Number</Label>
            <div className="flex gap-2">
              <Select
                value={formData.countryCode}
                onValueChange={value => updateFormData({ countryCode: value })}
              >
                <SelectTrigger className="w-[140px] bg-zinc-800/50 border-zinc-700/50 text-white h-12">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-700">
                  {countryCodes.map(code => (
                    <SelectItem key={code.value} value={code.value} className="text-zinc-300">
                      {code.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={e => updateFormData({ phone: e.target.value })}
                placeholder="Enter your phone number"
                className="flex-1 bg-zinc-800/50 border-zinc-700/50 focus:border-[#9FE12C] text-white placeholder:text-zinc-500 h-12"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={onPrevious}
            variant="outline"
            className="flex-1 border-zinc-700 hover:bg-zinc-800"
          >
            Back
          </Button>
          <Button
            onClick={onNext}
            className="flex-1 bg-[#9FE12C] text-black hover:bg-[#8BC925] transition-colors"
            disabled={!formData.email || !formData.phone}
          >
            Continue
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
