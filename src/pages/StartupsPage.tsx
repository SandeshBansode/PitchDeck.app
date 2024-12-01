import React from 'react';
import { Rocket, Globe, Users, DollarSign } from 'lucide-react';
import { startups } from '../data/startups';

export function StartupsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Featured Startups</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Add Startup
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {startups.map((startup) => (
          <div key={startup.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src={startup.logo}
                  alt={startup.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">{startup.name}</h2>
                  <p className="text-sm text-gray-500">{startup.location}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{startup.description}</p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Globe className="w-4 h-4 mr-1" />
                  {startup.industry}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <DollarSign className="w-4 h-4 mr-1" />
                  {startup.fundingStage}
                </div>
              </div>
              <button className="mt-6 w-full bg-indigo-50 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-100">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}