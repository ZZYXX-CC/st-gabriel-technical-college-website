"use client"

import { useState, type ReactNode } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

type WaitlistModalProps = {
  trigger?: ReactNode
}

export default function WaitlistModal({ trigger }: WaitlistModalProps) {
  const { toast } = useToast()

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")
  const [age, setAge] = useState<number | "">("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!fullName || fullName.trim().length < 2) return "Please enter your full name."
    if (!emailRegex.test(email)) return "Please enter a valid email address."
    if (!course) return "Please select a course of interest."
    const ageNum = typeof age === "string" ? parseInt(age) : age
    if (!ageNum || isNaN(ageNum) || ageNum < 12 || ageNum > 120) return "Please enter a valid age."
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const error = validate()
    if (error) {
      toast({ title: "Validation error", description: error })
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, course, age: typeof age === "string" ? parseInt(age) : age, phone, notes })
      })
      const data = await res.json()
      if (res.ok) {
        toast({ title: "Joined waitlist", description: "We’ll reach out shortly." })
        setFullName("")
        setEmail("")
        setCourse("")
        setAge("")
        setPhone("")
        setNotes("")
      } else {
        toast({ title: "Submission failed", description: data?.message || "Please try again later." })
      }
    } catch (err) {
      toast({ title: "Network error", description: "Could not submit form. Try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button className="bg-stg-yellow hover:bg-stg-yellow/90 text-stg-gray font-semibold">Join Waitlist</Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-stg-gray">Join the Waitlist</DialogTitle>
          <DialogDescription>Fill in your details to be notified when admissions open.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <label htmlFor="fullName" className="text-sm font-medium text-stg-gray">Full Name</label>
            <Input id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-stg-gray">Email Address</label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="jane@example.com" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-stg-gray">Course of Interest</label>
              <Select value={course} onValueChange={setCourse}>
                <SelectTrigger className="bg-white border border-stg-gray/20 text-stg-gray shadow-sm focus:ring-2 focus:ring-stg-sky-blue/30">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent className="z-50 bg-white border border-stg-gray/20 shadow-md">
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="information-technology">Information Technology</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="renewable-energy">Renewable Energy</SelectItem>
                  <SelectItem value="creative-arts">Creative Arts</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="age" className="text-sm font-medium text-stg-gray">Age</label>
              <Input
                id="age"
                type="number"
                min={12}
                max={120}
                value={age}
                onChange={(e) => setAge(e.target.value === "" ? "" : Number(e.target.value))}
                required
                placeholder="18"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-medium text-stg-gray">Phone (optional)</label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+234 000 000 0000" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="notes" className="text-sm font-medium text-stg-gray">Notes (optional)</label>
              <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Any simple info to share" rows={3} />
            </div>
          </div>
          <Button type="submit" disabled={loading} className="bg-stg-sky-blue text-white hover:bg-stg-sky-blue/90">
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}