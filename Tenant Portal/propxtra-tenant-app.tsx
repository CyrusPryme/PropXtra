import React, { useState } from 'react';
import { 
  Home, CreditCard, Wrench, Bell, User, Menu, Search,
  Smartphone, Lock, Lightbulb, Thermometer,
  CheckCircle, Star, Wifi, ChevronRight,
  Crown, Sparkles, Award, Diamond, Heart, Shield, Activity
} from 'lucide-react';

const PropxtraTenantApp = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const tenantInfo = {
    name: 'Ama Osei',
    membershipTier: 'Platinum Elite',
    unit: 'Penthouse A-205',
    property: 'East Legon Luxury Residences',
    loyaltyPoints: 2500,
    next_payment: {
      amount: 5500,
      days_remaining: 35
    }
  };

  const premiumMenuItems = [
    { id: 'dashboard', label: 'Executive Dashboard', icon: Crown },
    { id: 'payments', label: 'Premium Billing', icon: Diamond },
    { id: 'devices', label: 'Smart Estate Control', icon: Sparkles },
    { id: 'maintenance', label: 'Concierge Service', icon: Award },
    { id: 'services', label: 'Luxury Services', icon: Heart },
    { id: 'profile', label: 'VIP Profile', icon: User }
  ];

  const premiumDevices = [
    { id: 1, name: 'Biometric Entry System', type: 'lock', status: 'armed', room: 'Main Entrance' },
    { id: 2, name: 'Climate Control Suite', type: 'climate', status: 'optimal', temperature: 22, room: 'Master Suite' },
    { id: 3, name: 'Philips Hue Ecosystem', type: 'lighting', status: 'ambience', room: 'Living Areas' },
    { id: 4, name: 'Premium Security Hub', type: 'security', status: 'monitoring', room: 'Property Wide' }
  ];

  const recentActivity = [
    { id: 1, type: 'payment', title: 'Premium Payment Successful', description: 'GH₵5,500 paid via Platinum Card', time: '2 hours ago', premium: true },
    { id: 2, type: 'service', title: 'Housekeeping Completed', description: '5-star premium service finished', time: '4 hours ago', premium: true },
    { id: 3, type: 'device', title: 'Climate Optimized', description: 'AI adjusted temperature for comfort', time: '6 hours ago', premium: false }
  ];

  const lifestyleOffers = [
    { id: 1, title: 'Michelin Star Dining', discount: '30% OFF', image: '🍽️' },
    { id: 2, title: 'Private Jet Charter', discount: 'UPGRADE', image: '✈️' },
    { id: 3, title: 'Luxury Shopping', discount: 'FREE', image: '🛍️' }
  ];

  const getDeviceIcon = (type) => {
    switch (type) {
      case 'lock': return Shield;
      case 'climate': return Thermometer;
      case 'lighting': return Lightbulb;
      case 'security': return Shield;
      default: return Smartphone;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex">
      {/* Premium Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="p-8 border-b border-slate-700">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl">
              <svg viewBox="0 0 100 100" className="w-9 h-9">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6B46C1" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                <text x="50" y="70" textAnchor="middle" fill="url(#logoGradient)" fontSize="60" fontWeight="bold">X</text>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Propxtra Elite</h1>
              <p className="text-slate-300 text-sm">{tenantInfo.name}</p>
              <p className="text-yellow-400 text-xs font-medium flex items-center">
                {tenantInfo.membershipTier}
                <Crown className="w-3 h-3 ml-1" />
              </p>
            </div>
          </div>
        </div>
        
        <nav className="mt-8 px-6">
          {premiumMenuItems.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-6 py-4 mb-2 text-left transition-all duration-200 rounded-xl ${
                  activeView === item.id
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Premium Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-8 py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Executive Suite</h2>
                <p className="text-gray-600">{tenantInfo.property}</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search premium services..."
                  className="w-80 px-6 py-3 pl-12 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 shadow-lg"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
              </div>

              <button className="relative p-3 text-gray-600 hover:text-gray-900 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl shadow-lg">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-3 shadow-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">{tenantInfo.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{tenantInfo.name.split(' ')[0]}</p>
                  <p className="text-xs text-purple-600 font-medium">{tenantInfo.membershipTier}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {activeView === 'dashboard' && (
            <div className="space-y-8">
              {/* Premium Welcome Section */}
              <div className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="absolute top-4 right-8 opacity-10">
                  <svg viewBox="0 0 80 80" className="w-20 h-20">
                    <circle cx="40" cy="40" r="35" fill="none" stroke="white" strokeWidth="2"/>
                    <path d="M25,30 Q40,18 55,30 Q40,42 25,30 M25,50 Q40,42 55,50 Q40,62 25,50" fill="white" opacity="0.4"/>
                  </svg>
                </div>
                
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Crown className="w-8 h-8 text-yellow-200" />
                        <span className="text-yellow-200 font-medium">{tenantInfo.membershipTier}</span>
                      </div>
                      <h2 className="text-3xl font-bold mb-1">Welcome back, {tenantInfo.name.split(' ')[0]}!</h2>
                      <p className="text-yellow-100 text-lg">{tenantInfo.unit} • {tenantInfo.property}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-yellow-200 text-sm mb-1">Loyalty Points</div>
                      <div className="text-3xl font-bold">{tenantInfo.loyaltyPoints.toLocaleString()}</div>
                      <div className="text-yellow-200 text-sm">+50 this month</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-600 text-sm font-medium">Smart Devices</p>
                      <p className="text-2xl font-bold text-emerald-900">12/14</p>
                      <p className="text-emerald-600 text-xs mt-1">All optimal</p>
                    </div>
                    <Sparkles className="w-12 h-12 text-emerald-500" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-600 text-sm font-medium">Service Rating</p>
                      <div className="flex items-center space-x-1">
                        <p className="text-2xl font-bold text-blue-900">4.9</p>
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                      <p className="text-blue-600 text-xs mt-1">Exceptional</p>
                    </div>
                    <Award className="w-12 h-12 text-blue-500" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-600 text-sm font-medium">Energy Saved</p>
                      <p className="text-2xl font-bold text-purple-900">18%</p>
                      <p className="text-purple-600 text-xs mt-1">This month</p>
                    </div>
                    <Sparkles className="w-12 h-12 text-purple-500" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-pink-600 text-sm font-medium">Payment Status</p>
                      <p className="text-2xl font-bold text-pink-900">Complete</p>
                      <p className="text-pink-600 text-xs mt-1">Next due {tenantInfo.next_payment.days_remaining}d</p>
                    </div>
                    <CheckCircle className="w-12 h-12 text-pink-500" />
                  </div>
                </div>
              </div>

              {/* Premium Devices */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <Shield className="w-6 h-6 text-blue-500 mr-2" />
                    Smart Estate Control
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {premiumDevices.map(device => {
                    const Icon = getDeviceIcon(device.type);
                    return (
                      <div key={device.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border hover:shadow-xl transition-all">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{device.name}</h4>
                              <p className="text-sm text-gray-600">{device.room}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-medium">
                              {device.status}
                            </span>
                            <Wifi className="w-4 h-4 text-emerald-500" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Activity & Lifestyle */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100">
                  <div className="p-6 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 flex items-center">
                      <Activity className="w-6 h-6 text-green-500 mr-2" />
                      Recent Activity
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {recentActivity.map(activity => (
                      <div key={activity.id} className={`flex items-start space-x-4 p-4 rounded-xl ${activity.premium ? 'bg-gradient-to-r from-yellow-50 to-yellow-100' : 'bg-gray-50'}`}>
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                          <Diamond className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold text-gray-900">{activity.title}</h4>
                            {activity.premium && <Crown className="w-4 h-4 text-yellow-500" />}
                          </div>
                          <p className="text-gray-600 text-sm">{activity.description}</p>
                          <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl p-6 text-white shadow-2xl">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold flex items-center">
                      <Heart className="w-6 h-6 text-pink-400 mr-2" />
                      Lifestyle Perks
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {lifestyleOffers.map(offer => (
                      <div key={offer.id} className="flex items-center space-x-4 p-4 bg-white bg-opacity-10 rounded-xl">
                        <div className="text-3xl">{offer.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{offer.title}</h4>
                            <span className="px-2 py-1 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full">
                              {offer.discount}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView !== 'dashboard' && (
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-xl border border-gray-200 p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Feature</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                This luxury feature is being crafted with attention to detail. 
                Coming soon to enhance your exclusive living experience.
              </p>
              <button className="mt-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Request Preview
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PropxtraTenantApp;