
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Mail, Phone, GraduationCap, Clock, ShoppingBag } from 'lucide-react';

const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const mockOrderHistory = [
    {
      id: 'CB123456',
      date: '2024-01-15',
      items: ['Butter Chicken', 'Naan', 'Lassi'],
      total: 185,
      status: 'Completed',
      canteen: 'North Campus Canteen'
    },
    {
      id: 'CB123457',
      date: '2024-01-14',
      items: ['Masala Dosa', 'Filter Coffee'],
      total: 95,
      status: 'Completed',
      canteen: 'South Campus Delight'
    },
    {
      id: 'CB123458',
      date: '2024-01-13',
      items: ['Chicken Burger', 'French Fries', 'Cold Coffee'],
      total: 240,
      status: 'Completed',
      canteen: 'Central Food Court'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">My Profile</h1>
            <p className="text-xl">Manage your account and order history</p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {user?.name?.charAt(0).toUpperCase()}
                  </div>
                  <h2 className="text-xl font-semibold">{user?.name}</h2>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{user?.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{user?.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{user?.rollNumber}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Orders</span>
                  <span className="font-medium">{mockOrderHistory.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Spent</span>
                  <span className="font-medium">
                    ₹{mockOrderHistory.reduce((sum, order) => sum + order.total, 0)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Favorite Canteen</span>
                  <span className="font-medium text-sm">North Campus</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Order History
                </CardTitle>
              </CardHeader>
              <CardContent>
                {mockOrderHistory.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No orders yet</p>
                    <Button className="mt-4" onClick={() => navigate('/menu')}>
                      Start Ordering
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {mockOrderHistory.map((order) => (
                      <div key={order.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium">Order #{order.id}</p>
                            <p className="text-sm text-gray-600">{order.canteen}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₹{order.total}</p>
                            <Badge variant="secondary">{order.status}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">
                              {order.items.join(', ')}
                            </p>
                          </div>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
