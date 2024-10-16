'use client'

import { useState } from "react"
import { ChevronDown, ChevronUp, CheckCircle, Circle } from "lucide-react"

export default function SqlCourseUi() {
  const [expandedSections, setExpandedSections] = useState<number[]>([0])

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const course = {
    title: "Mastering SQL: From Basics to Advanced Queries",
    description: "Dive into the world of SQL and learn how to effectively manage and query relational databases. This comprehensive course covers everything from basic SELECT statements to complex joins and subqueries.",
    sections: [
      {
        title: "Introduction to SQL",
        lessons: [
          { title: "What is SQL?", completed: false },
          { title: "Setting up your database environment", completed: true },
          { title: "Basic SQL syntax", completed: false },
        ]
      },
      {
        title: "Basic Queries",
        lessons: [
          { title: "SELECT statement basics", completed: false },
          { title: "Filtering data with WHERE", completed: false },
          { title: "Sorting results with ORDER BY", completed: false },
        ]
      },
      {
        title: "Joins and Relationships",
        lessons: [
          { title: "Understanding table relationships", completed: false },
          { title: "INNER JOIN", completed: false },
          { title: "LEFT and RIGHT JOIN", completed: false },
          { title: "FULL OUTER JOIN", completed: false },
        ]
      },
      {
        title: "Advanced SQL Techniques",
        lessons: [
          { title: "Subqueries", completed: false },
          { title: "Common Table Expressions (CTEs)", completed: false },
          { title: "Window functions", completed: false },
        ]
      }
    ]
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{course.title}</h1>
      <p className="text-gray-600 mb-8">{course.description}</p>
      
      <div className="space-y-4">
        {course.sections.map((section, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => toggleSection(index)}
            >
              <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
              {expandedSections.includes(index) ? (
                <ChevronUp className="text-gray-600" />
              ) : (
                <ChevronDown className="text-gray-600" />
              )}
            </button>
            {expandedSections.includes(index) && (
              <ul className="divide-y divide-gray-200">
                {section.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex} className="px-6 py-4 flex items-center">
                    {lesson.completed ? (
                      <CheckCircle className="text-green-500 mr-3" />
                    ) : (
                      <Circle className="text-gray-300 mr-3" />
                    )}
                    <span className={`text-gray-700 ${lesson.completed ? 'line-through' : ''}`}>
                      {lesson.title}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}