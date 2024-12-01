import React from 'react';
import { DollarSign, Briefcase, MapPin } from 'lucide-react';
import { investors } from '../data/investors';

export function InvestorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Active Investors</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Connect with Investors
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {investors.map((investor) => (
          <div key={investor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src={investor.logo}
                  alt={investor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">{investor.name}</h2>
                  <p className="text-sm text-gray-500">{investor.type}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {investor.focus}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  {investor.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {investor.investmentRange}
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