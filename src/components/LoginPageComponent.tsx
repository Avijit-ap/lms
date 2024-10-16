"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Unlock, Code2, Binary, Braces } from "lucide-react"

export default function LoginPageComponent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isUnlocking, setIsUnlocking] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsUnlocking(true)
    // Simulate login process
    setTimeout(() => {
      setIsUnlocking(false)
      console.log("Login attempted", { email, password })
    }, 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Welcome Back to CodeCraft</h1>
          <p className="text-gray-400">Continue your coding journey</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-lg shadow-lg relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 bg-gray-700 border-gray-600 text-white"
              required
            />
          </div>

          <div className="mb-6">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 bg-gray-700 border-gray-600 text-white"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
            disabled={isUnlocking}
          >
            {isUnlocking ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Unlock size={20} className="mr-2" />
              </motion.div>
            ) : (
              <Lock size={20} className="mr-2" />
            )}
            {isUnlocking ? "Unlocking..." : "Login"}
          </Button>

          <motion.div
            className="flex justify-around mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <AnimatedIcon Icon={Code2} color="#10B981" />
            <AnimatedIcon Icon={Binary} color="#3B82F6" />
            <AnimatedIcon Icon={Braces} color="#8B5CF6" />
          </motion.div>
        </motion.form>
      </div>
    </div>
  )
}

function AnimatedIcon({ Icon, color }: { Icon: React.ElementType; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 10 }}
    >
      <Icon size={24} color={color} />
    </motion.div>
  )
}