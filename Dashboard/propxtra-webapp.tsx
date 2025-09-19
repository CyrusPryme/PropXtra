import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Tooltip, Legend } from 'recharts';
import { 
  Home, Building, Users, Wrench, CreditCard, BarChart3, Settings, 
  Bell, Search, Plus, UserPlus, Megaphone, FileText, 
  TrendingUp, TrendingDown, AlertCircle,
  Smartphone, Wifi, WifiOff, Lock, Lightbulb, Droplets,
  Eye, Activity, CheckCircle, XCircle
} from 'lucide-react';

const Propxtra = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications] = useState(3);
  const [selectedProperty, setSelectedProperty] = useState('all');

  // Mock data for dashboard
  const occupancyData = [
    { name: 'Occupied', value: 94.5, color: '#10B981' },
    { name: 'Vacant', value: 5.5, color: '#EF4444' }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 120000, target: 115000 },
    { month: 'Feb', revenue: 125000, target: 118000 },
    { month: 'Mar', revenue: 123000, target: 120000 },
    { month: 'Apr', revenue: 128000, target: 122000 },
    { month: 'May', revenue: 135000, target: 125000 },
    { month: 'Jun', revenue: 132000, target: 128000 }
  ];

  const maintenanceTickets = [
    { id: 'T001', type: 'Plumbing', unit: 'A-102', priority: 'High', status: 'In Progress', assignee: 'John Doe', created: '2 hours ago' },
    { id: 'T002', type: 'Electrical', unit: 'B-205', priority: 'Medium', status: 'Assigned', assignee: 'Jane Smith', created: '1 day ago' },
    { id: 'T003', type: 'HVAC', unit: 'C-301', priority: 'Low', status: 'Open', assignee: 'Unassigned', created: '2 days ago' },
    { id: 'T004', type: 'Appliance', unit: 'A-105', priority: 'High', status: 'Overdue', assignee: 'Mike Johnson', created: '3 days ago' }
  ];

  const iotDevices = [
    { id: 'smart_lock_001', name: 'Main Entrance Lock', unit: 'A-101', status: 'online', battery: 85, lastSeen: '2 min ago' },
    { id: 'light_002', name: 'Corridor Lights', unit: 'B-Floor2', status: 'online', battery: null, lastSeen: '1 min ago' },
    { id: 'meter_003', name: 'Water Meter', unit: 'C-203', status: 'offline', battery: 45, lastSeen: '2 hours ago' },
    { id: 'thermostat_004', name: 'Common Area AC', unit: 'Lobby', status: 'online', battery: null, lastSeen: '30 sec ago' }
  ];

  const recentActivity = [
    { type: 'payment', message: 'Rent payment received from Kwame Asante (A-101)', time: '5 min ago', amount: 'GH₵2,500' },
    { type: 'maintenance', message: 'Maintenance ticket T001 marked as completed', time: '15 min ago' },
    { type: 'tenant', message: 'New tenant application from Ama Osei (B-205)', time: '1 hour ago' },
    { type: 'alert', message: 'Smart lock battery low - Unit C-301', time: '2 hours ago' },
    { type: 'payment', message: 'Mobile Money payment processed - GH₵1,800', time: '3 hours ago', amount: 'GH₵1,800' }
  ];

  const properties = [
    { id: 'all', name: 'All Properties' },
    { id: 'eastlegon', name: 'East Legon Residences' },
    { id: 'airport', name: 'Airport City Apartments' },
    { id: 'legonhills', name: 'Legon Hills Hostel' }
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'properties', label: 'Properties', icon: Building },
    { id: 'tenants', label: 'Tenants', icon: Users },
    { id: 'maintenance', label: 'Maintenance', icon: Wrench },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const quickActions = [
    { id: 'add_tenant', label: 'Add Tenant', icon: UserPlus, color: 'bg-blue-500 hover:bg-blue-600' },
    { id: 'create_ticket', label: 'Create Ticket', icon: Wrench, color: 'bg-orange-500 hover:bg-orange-600' },
    { id: 'announcement', label: 'Announcement', icon: Megaphone, color: 'bg-green-500 hover:bg-green-600' },
    { id: 'report', label: 'Generate Report', icon: FileText, color: 'bg-purple-500 hover:bg-purple-600' }
  ];

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
      case 'online': return 'text-green-600';
      case 'in progress': return 'text-blue-600';
      case 'assigned': return 'text-yellow-600';
      case 'overdue':
      case 'offline': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getDeviceIcon = (name) => {
    if (name.toLowerCase().includes('lock')) return Lock;
    if (name.toLowerCase().includes('light')) return Lightbulb;
    if (name.toLowerCase().includes('meter')) return Droplets;
    return Smartphone;
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'payment': return CreditCard;
      case 'maintenance': return Wrench;
      case 'tenant': return Users;
      case 'alert': return AlertCircle;
      default: return Bell;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 100 100" className="w-8 h-8">
                <defs>
                  <linearGradient id="xtrafriqGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6B46C1" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                <text x="50" y="70" textAnchor="middle" fill="url(#xtrafriqGradient)" fontSize="60" fontWeight="bold" fontFamily="serif">X</text>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Propxtra</h1>
              <p className="text-xs text-gray-500 flex items-center">
                <span className="mr-1">xtrafriq.com</span>
                <svg viewBox="0 0 100 100" className="w-3 h-3 opacity-40">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8"/>
                  <path d="M30,35 Q50,20 70,35 Q50,50 30,35 M30,65 Q50,50 70,65 Q50,80 30,65" fill="currentColor" opacity="0.6"/>
                  <circle cx="40" cy="40" r="3" fill="currentColor"/>
                  <circle cx="60" cy="40" r="3" fill="currentColor"/>
                  <path d="M45,50 Q50,55 55,50" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-semibold text-gray-900">Property Overview</h2>
              <select 
                value={selectedProperty}
                onChange={(e) => setSelectedProperty(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {properties.map(property => (
                  <option key={property.id} value={property.id}>{property.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
              </div>

              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="w-6 h-6" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                  <span className="text-white text-sm font-medium">KA</span>
                  <div className="absolute inset-0 opacity-20">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
                      <circle cx="20" cy="20" r="18" fill="none" stroke="white" strokeWidth="1"/>
                      <path d="M12,14 Q20,8 28,14 Q20,22 12,14 M12,26 Q20,22 28,26 Q20,30 12,26" fill="white" opacity="0.3"/>
                    </svg>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Kwame Asante</p>
                  <p className="text-gray-500 flex items-center">
                    Property Manager 
                    <svg viewBox="0 0 20 20" className="w-3 h-3 ml-1 opacity-40">
                      <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
                      <path d="M6,7 Q10,4 14,7 Q10,11 6,7 M6,13 Q10,11 14,13 Q10,16 6,13" fill="currentColor" opacity="0.4"/>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Key Metrics Row - Updated with Premium Data */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Occupancy Rate</p>
                      <p className="text-3xl font-bold text-gray-900">95.2%</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="text-sm text-green-600">+0.7%</span>
                        <span className="text-sm text-gray-500 ml-1">premium units</span>
                      </div>
                    </div>
                    <div className="w-16 h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={occupancyData}
                            cx="50%"
                            cy="50%"
                            innerRadius={20}
                            outerRadius={30}
                            dataKey="value"
                          >
                            {occupancyData.map((entry, index) => (
                              <Cell key={index} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                    <p className="text-3xl font-bold text-gray-900">GH₵152,000</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+18.7%</span>
                      <span className="text-sm text-gray-500 ml-1">premium tier</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Collection Rate</p>
                    <p className="text-3xl font-bold text-gray-900">98.5%</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">+1.7%</span>
                      <span className="text-sm text-gray-500 ml-1">elite members</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Tickets</p>
                    <p className="text-3xl font-bold text-gray-900">3</p>
                    <div className="flex items-center mt-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600">All handled</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`GH₵${value.toLocaleString()}`, '']} />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} name="Actual Revenue" />
                      <Line type="monotone" dataKey="target" stroke="#10B981" strokeWidth={2} strokeDasharray="5 5" name="Target" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">IoT Device Status</h3>
                  <div className="space-y-4">
                    {iotDevices.map((device) => {
                      const DeviceIcon = getDeviceIcon(device.name);
                      return (
                        <div key={device.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${device.status === 'online' ? 'bg-green-100' : 'bg-red-100'}`}>
                              <DeviceIcon className={`w-5 h-5 ${device.status === 'online' ? 'text-green-600' : 'text-red-600'}`} />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{device.name}</p>
                              <p className="text-sm text-gray-500">{device.unit}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-2">
                              {device.status === 'online' ? (
                                <Wifi className="w-4 h-4 text-green-500" />
                              ) : (
                                <WifiOff className="w-4 h-4 text-red-500" />
                              )}
                              <span className={`text-sm font-medium ${getStatusColor(device.status)}`}>
                                {device.status}
                              </span>
                            </div>
                            {device.battery && (
                              <p className="text-xs text-gray-500 mt-1">Battery: {device.battery}%</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Maintenance Tickets</h3>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View All
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Ticket</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Type</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Unit</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Priority</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Assignee</th>
                          <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {maintenanceTickets.map((ticket) => (
                          <tr key={ticket.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-blue-600">{ticket.id}</td>
                            <td className="py-3 px-4">{ticket.type}</td>
                            <td className="py-3 px-4">{ticket.unit}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(ticket.priority)}`}>
                                {ticket.priority}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`font-medium ${getStatusColor(ticket.status)}`}>
                                {ticket.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{ticket.assignee}</td>
                            <td className="py-3 px-4">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Eye className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => {
                      const ActivityIcon = getActivityIcon(activity.type);
                      return (
                        <div key={index} className="flex items-start space-x-3">
                          <div className={`p-2 rounded-lg ${
                            activity.type === 'payment' ? 'bg-green-100' :
                            activity.type === 'maintenance' ? 'bg-blue-100' :
                            activity.type === 'tenant' ? 'bg-purple-100' : 'bg-yellow-100'
                          }`}>
                            <ActivityIcon className={`w-4 h-4 ${
                              activity.type === 'payment' ? 'text-green-600' :
                              activity.type === 'maintenance' ? 'text-blue-600' :
                              activity.type === 'tenant' ? 'text-purple-600' : 'text-yellow-600'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{activity.message}</p>
                            <div className="flex items-center justify-between mt-1">
                              <p className="text-xs text-gray-500">{activity.time}</p>
                              {activity.amount && (
                                <span className="text-xs font-medium text-green-600">{activity.amount}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'dashboard' && (
            <div>
              {activeTab === 'properties' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Property Portfolio</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                      <Plus className="w-4 h-4" />
                      <span>Add Property</span>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { name: 'East Legon Luxury Residences', units: 45, occupancy: 95.6, revenue: 85000, image: '🏢' },
                      { name: 'Airport City Apartments', units: 32, occupancy: 87.5, revenue: 52000, image: '🏨' },
                      { name: 'Legon Hills Student Hostel', units: 120, occupancy: 98.3, revenue: 72000, image: '🏫' },
                      { name: 'Cantonments Villas', units: 8, occupancy: 100, revenue: 48000, image: '🏘️' }
                    ].map((property, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="text-3xl">{property.image}</div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{property.name}</h4>
                            <p className="text-sm text-gray-600">{property.units} units</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Occupancy</span>
                            <span className="text-sm font-medium text-green-600">{property.occupancy}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Monthly Revenue</span>
                            <span className="text-sm font-medium">GH₵{property.revenue.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'tenants' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-900">Tenant Management</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                      <UserPlus className="w-4 h-4" />
                      <span>Add Tenant</span>
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left py-3 px-6 font-medium text-gray-700">Tenant</th>
                          <th className="text-left py-3 px-6 font-medium text-gray-700">Unit</th>
                          <th className="text-left py-3 px-6 font-medium text-gray-700">Rent</th>
                          <th className="text-left py-3 px-6 font-medium text-gray-700">Status</th>
                          <th className="text-left py-3 px-6 font-medium text-gray-700">Lease End</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Ama Osei', unit: 'A-205', rent: 5500, status: 'Active', tier: 'Platinum', leaseEnd: '2024-12-31' },
                          { name: 'Kwame Asante', unit: 'B-102', rent: 3200, status: 'Active', tier: 'Gold', leaseEnd: '2024-08-15' },
                          { name: 'Akosua Mensah', unit: 'C-301', rent: 4100, status: 'Active', tier: 'Silver', leaseEnd: '2024-11-20' },
                          { name: 'John Boateng', unit: 'A-107', rent: 2800, status: 'Pending', tier: 'Standard', leaseEnd: '2024-09-10' }
                        ].map((tenant, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-4 px-6">
                              <div>
                                <div className="font-medium text-gray-900">{tenant.name}</div>
                                <div className="text-sm text-purple-600">{tenant.tier} Member</div>
                              </div>
                            </td>
                            <td className="py-4 px-6 font-medium">{tenant.unit}</td>
                            <td className="py-4 px-6">GH₵{tenant.rent.toLocaleString()}</td>
                            <td className="py-4 px-6">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                tenant.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {tenant.status}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-gray-600">{tenant.leaseEnd}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {activeTab === 'payments' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Payment Management</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h4 className="font-medium text-gray-600">Total Collections</h4>
                      <p className="text-3xl font-bold text-green-600">GH₵152,000</p>
                      <p className="text-sm text-gray-500">This month</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h4 className="font-medium text-gray-600">Outstanding</h4>
                      <p className="text-3xl font-bold text-orange-600">GH₵8,400</p>
                      <p className="text-sm text-gray-500">3 tenants</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h4 className="font-medium text-gray-600">Success Rate</h4>
                      <p className="text-3xl font-bold text-blue-600">98.5%</p>
                      <p className="text-sm text-gray-500">Mobile Money + Cards</p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border">
                    <div className="p-6 border-b">
                      <h4 className="font-semibold text-gray-900">Recent Transactions</h4>
                    </div>
                    <div className="divide-y">
                      {[
                        { tenant: 'Ama Osei', amount: 5500, method: 'Platinum Card', status: 'Completed', time: '2 hours ago' },
                        { tenant: 'Kwame Asante', amount: 3200, method: 'MTN Mobile Money', status: 'Completed', time: '1 day ago' },
                        { tenant: 'Akosua Mensah', amount: 4100, method: 'Vodafone Cash', status: 'Processing', time: '2 days ago' }
                      ].map((payment, index) => (
                        <div key={index} className="p-6 flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{payment.tenant}</p>
                            <p className="text-sm text-gray-600">{payment.method} • {payment.time}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">GH₵{payment.amount.toLocaleString()}</p>
                            <p className={`text-sm ${payment.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                              {payment.status}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Analytics & Insights</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h4 className="font-semibold text-gray-900 mb-4">Occupancy Trends</h4>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={[
                          { month: 'Jan', rate: 92 }, { month: 'Feb', rate: 94 }, { month: 'Mar', rate: 91 },
                          { month: 'Apr', rate: 96 }, { month: 'May', rate: 95 }, { month: 'Jun', rate: 95.2 }
                        ]}>
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="rate" stroke="#3B82F6" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border">
                      <h4 className="font-semibold text-gray-900 mb-4">Revenue by Property Type</h4>
                      <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                          <Pie
                            data={[
                              { name: 'Luxury Residences', value: 85000, color: '#8B5CF6' },
                              { name: 'Apartments', value: 52000, color: '#06B6D4' },
                              { name: 'Student Housing', value: 72000, color: '#10B981' },
                              { name: 'Villas', value: 48000, color: '#F59E0B' }
                            ]}
                            cx="50%" cy="50%" outerRadius={80} dataKey="value"
                          >
                            {[1,2,3,4].map((entry, index) => (
                              <Cell key={index} fill={['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'][index]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`GH₵${value.toLocaleString()}`, '']} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                      <h4 className="font-medium text-gray-600">Avg. Days to Fill</h4>
                      <p className="text-2xl font-bold text-blue-600">8.5</p>
                      <p className="text-sm text-green-600">-2.1 days</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                      <h4 className="font-medium text-gray-600">Tenant Satisfaction</h4>
                      <p className="text-2xl font-bold text-green-600">4.7/5</p>
                      <p className="text-sm text-green-600">+0.3 this quarter</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                      <h4 className="font-medium text-gray-600">Maintenance MTTR</h4>
                      <p className="text-2xl font-bold text-purple-600">2.1</p>
                      <p className="text-sm text-gray-500">hours average</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
                      <h4 className="font-medium text-gray-600">Energy Efficiency</h4>
                      <p className="text-2xl font-bold text-orange-600">18%</p>
                      <p className="text-sm text-green-600">improved</p>
                    </div>
                  </div>
                </div>
              )}
              
              {(activeTab === 'maintenance' || activeTab === 'settings') && (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {activeTab === 'maintenance' ? <Wrench className="w-8 h-8 text-gray-400" /> : <Settings className="w-8 h-8 text-gray-400" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {activeTab === 'maintenance' ? 'Advanced Maintenance Management' : 'System Settings'}
                  </h3>
                  <p className="text-gray-600">
                    {activeTab === 'maintenance' 
                      ? 'Complete work order management, technician routing, and predictive maintenance coming soon.'
                      : 'System configuration, user management, and integration settings coming in the next release.'
                    }
                  </p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Quick Actions FAB */}
      <div className="fixed bottom-6 right-6">
        <div className="relative group">
          <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors">
            <Plus className="w-6 h-6" />
          </button>
          <div className="absolute bottom-16 right-0 hidden group-hover:block bg-white rounded-lg shadow-lg p-2 min-w-48">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                  <div className={`w-8 h-8 ${action.color} text-white rounded-lg flex items-center justify-center`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-gray-900">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propxtra;