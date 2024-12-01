import React from 'react';
import { BookOpen, Clock, Star, Users } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Startup Fundamentals',
    instructor: 'Dr. Sarah Johnson',
    duration: '6 weeks',
    rating: 4.8,
    students: 1200,
    price: 199,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'Pitch Deck Mastery',
    instructor: 'Michael Chen',
    duration: '4 weeks',
    rating: 4.9,
    students: 850,
    price: 149,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    title: 'Fundraising Strategies',
    instructor: 'Emma Williams',
    duration: '8 weeks',
    rating: 4.7,
    students: 2100,
    price: 299,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop',
  },
];

export function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Featured Courses</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Browse All Courses
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h2>
              <p className="text-sm text-gray-500 mb-4">by {course.instructor}</p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  {course.rating} ({course.students} students)
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  {course.students} enrolled
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">${course.price}</span>
                <button className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}