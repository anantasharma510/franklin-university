"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    
    // Simulate API call
    setTimeout(() => {
      if (email.includes("@")) {
        setStatus("success")
        setMessage("Thank you for subscribing! You'll receive our latest event updates.")
        setEmail("")
      } else {
        setStatus("error")
        setMessage("Please enter a valid email address.")
      }
    }, 1000)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Events
              </h2>
              <p className="text-lg text-gray-600">
                Get notified about upcoming events, workshops, and exclusive opportunities. 
                Never miss out on what's happening at Franklin University.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="px-8"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </Button>
              </div>

              {message && (
                <div className={`flex items-center gap-2 p-3 rounded-md ${
                  status === "success" 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}>
                  {status === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm">{message}</span>
                </div>
              )}
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Subscribers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">24</div>
                  <div className="text-sm text-gray-600">Events This Year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
