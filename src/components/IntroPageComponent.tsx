'use client'

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Database, Table } from "lucide-react"


export default function IntroPageComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Introduction to SQL</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What are Databases?</h2>
          <p className="text-lg">
            Databases are organized collections of structured information or data, typically stored electronically in a computer system. They allow for efficient retrieval, management, and updating of data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How are Databases Used?</h2>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Example: Online Bookstore</h3>
            <p>
              An online bookstore might use a database to store information about:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Books (title, author, ISBN, price)</li>
              <li>Customers (name, email, shipping address)</li>
              <li>Orders (order number, customer, books purchased, date)</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Database Structure</h2>
          <div className="bg-muted p-4 rounded-lg">
            <svg className="w-full max-w-md mx-auto" viewBox="0 0 400 200">
              <rect x="10" y="10" width="380" height="180" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="200" y="30" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="bold">Database</text>
              
              {/* Table 1 */}
              <rect x="30" y="50" width="100" height="120" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="80" y="70" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">Books</text>
              <line x1="30" y1="80" x2="130" y2="80" stroke="currentColor" strokeWidth="1" />
              <text x="35" y="100" fill="currentColor" fontSize="12">Title</text>
              <text x="35" y="120" fill="currentColor" fontSize="12">Author</text>
              <text x="35" y="140" fill="currentColor" fontSize="12">ISBN</text>
              <text x="35" y="160" fill="currentColor" fontSize="12">Price</text>

              {/* Table 2 */}
              <rect x="150" y="50" width="100" height="120" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="200" y="70" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">Customers</text>
              <line x1="150" y1="80" x2="250" y2="80" stroke="currentColor" strokeWidth="1" />
              <text x="155" y="100" fill="currentColor" fontSize="12">Name</text>
              <text x="155" y="120" fill="currentColor" fontSize="12">Email</text>
              <text x="155" y="140" fill="currentColor" fontSize="12">Address</text>

              {/* Table 3 */}
              <rect x="270" y="50" width="100" height="120" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="320" y="70" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">Orders</text>
              <line x1="270" y1="80" x2="370" y2="80" stroke="currentColor" strokeWidth="1" />
              <text x="275" y="100" fill="currentColor" fontSize="12">Order ID</text>
              <text x="275" y="120" fill="currentColor" fontSize="12">Customer</text>
              <text x="275" y="140" fill="currentColor" fontSize="12">Books</text>
              <text x="275" y="160" fill="currentColor" fontSize="12">Date</text>
            </svg>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Progress</h2>
          <div className="flex items-center space-x-4">
            <Progress value={10} className="w-full" />
            <span className="text-sm font-medium">10%</span>
          </div>
        </section>

        <div className="flex justify-center">
          <Button size="lg" className="w-full sm:w-auto">
            Continue to Next Lesson
            <Database className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}