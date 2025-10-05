"use client"

import { useState, useEffect } from "react"
import { X, AlertCircle, Info, CheckCircle, AlertTriangle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Notice {
  id: string
  type: "info" | "success" | "warning" | "error"
  message: string
  link?: string
  linkText?: string
  dismissible?: boolean
}

const notices: Notice[] = [
  {
    id: "1",
    type: "info",
    message: "🎓 New Partnership: We're excited to announce our collaboration with 5 additional UK universities!",
    link: "/partner",
    linkText: "Learn More",
    dismissible: true
  },
  {
    id: "2", 
    type: "success",
    message: "✅ 2024 Results: 98% partner satisfaction rate achieved across all our university partnerships",
    link: "/about",
    linkText: "View Report",
    dismissible: true
  },
  {
    id: "3",
    type: "warning", 
    message: "⚠️ Application Deadline: Early bird applications for September 2024 intake closing soon",
    link: "/destinations",
    linkText: "Apply Now",
    dismissible: false
  }
]

const getIcon = (type: Notice["type"]) => {
  switch (type) {
    case "info":
      return <Info className="w-4 h-4" />
    case "success":
      return <CheckCircle className="w-4 h-4" />
    case "warning":
      return <AlertTriangle className="w-4 h-4" />
    case "error":
      return <AlertCircle className="w-4 h-4" />
  }
}

const getStyles = (type: Notice["type"]) => {
  switch (type) {
    case "info":
      return {
        bg: "bg-blue-50 border-blue-200 text-blue-800",
        icon: "text-blue-600"
      }
    case "success":
      return {
        bg: "bg-green-50 border-green-200 text-green-800", 
        icon: "text-green-600"
      }
    case "warning":
      return {
        bg: "bg-yellow-50 border-yellow-200 text-yellow-800",
        icon: "text-yellow-600"
      }
    case "error":
      return {
        bg: "bg-red-50 border-red-200 text-red-800",
        icon: "text-red-600"
      }
  }
}

export function NoticeBar() {
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0)
  const [dismissedNotices, setDismissedNotices] = useState<string[]>([])
  const [isVisible, setIsVisible] = useState(true)

  const availableNotices = notices.filter(notice => !dismissedNotices.includes(notice.id))
  const currentNotice = availableNotices[currentNoticeIndex]

  useEffect(() => {
    if (availableNotices.length === 0) {
      setIsVisible(false)
      return
    }

    const interval = setInterval(() => {
      setCurrentNoticeIndex((prev) => (prev + 1) % availableNotices.length)
    }, 5000) // Change notice every 5 seconds

    return () => clearInterval(interval)
  }, [availableNotices.length])

  const dismissNotice = (noticeId: string) => {
    setDismissedNotices(prev => [...prev, noticeId])
    if (currentNoticeIndex >= availableNotices.length - 1) {
      setCurrentNoticeIndex(0)
    }
  }

  if (!isVisible || !currentNotice) {
    return null
  }

  const styles = getStyles(currentNotice.type)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentNotice.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`relative border-b ${styles.bg}`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={styles.icon}>
                {getIcon(currentNotice.type)}
              </div>
              <p className="text-sm font-medium">
                {currentNotice.message}
              </p>
              {currentNotice.link && (
                <a
                  href={currentNotice.link}
                  className="text-sm font-semibold underline hover:no-underline transition-all"
                >
                  {currentNotice.linkText}
                </a>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              {/* Notice indicators */}
              <div className="flex gap-1">
                {availableNotices.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentNoticeIndex 
                        ? "bg-current opacity-100" 
                        : "bg-current opacity-30"
                    }`}
                  />
                ))}
              </div>
              
              {/* Dismiss button */}
              {currentNotice.dismissible && (
                <button
                  onClick={() => dismissNotice(currentNotice.id)}
                  className="p-1 hover:bg-black/10 rounded-full transition-colors"
                  aria-label="Dismiss notice"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
