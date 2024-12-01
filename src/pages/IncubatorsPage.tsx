import React from 'react';
import { Building, Users, Calendar, MapPin } from 'lucide-react';
import { incubators } from '../data/incubators';

export function IncubatorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Top Incubators</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Apply Now
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {incubators.map((incubator) => (
          <div key={incubator.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src={incubator.logo}
                  alt={incubator.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">{incubator.name}</h2>
                  <p className="text-sm text-gray-500">{incubator.focus}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Program Duration: {incubator.duration}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {incubator.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  {incubator.benefits}
                </div>
              </div>
              <button className="mt-6 w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}