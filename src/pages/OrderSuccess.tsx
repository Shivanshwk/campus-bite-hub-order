
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, MapPin, Receipt } from 'lucide-react';

const OrderSuccess = () => {
  const location = useLocation();
  const { tokenNumber, orderTotal, items, paymentMethod } = location.state || {};

  if (!tokenNumber) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Not Found</h1>
            <Link to="/menu">
              <Button>Browse Menu</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const estimatedTime = new Date(Date.now() + (20 * 60 * 1000)); // 20 minutes from now

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-lg text-gray-600">Thank you for choosing Campus Bite</p>
        </div>

        {/* Token Card */}
        <Card className="mb-8 border-2 border-green-200 bg-green-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-800">Your Token Number</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg mb-4">
              <span className="text-4xl font-bold">{tokenNumber}</span>
            </div>
            <p className="text-green-700 font-medium">
              Please present this token number when collecting your order
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Receipt className="h-5 w-5 mr-2" />
                Order Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {items?.map((item: any) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.canteenName}</p>
                      <p className="text-sm">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total Paid</span>
                  <span>₹{orderTotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>Payment Method</span>
                  <span className="capitalize">{paymentMethod}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pickup Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Pickup Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Estimated Ready Time</p>
                  <p className="text-sm text-gray-600">
                    {estimatedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium">Pickup Locations:</p>
                {items && [...new Set(items.map((item: any) => item.canteenName))].map((canteenName: string) => (
                  <Badge key={canteenName} variant="outline" className="mr-2">
                    {canteenName}
                  </Badge>
                ))}
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Please arrive 5 minutes before the estimated time and show your token number to collect your order.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/menu">
            <Button variant="outline" size="lg">
              Order Again
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="outline" size="lg">
              View Order History
            </Button>
          </Link>
          <Link to="/">
            <Button size="lg">
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Thank You for Your Order!</h3>
          <p className="text-blue-700">
            We're preparing your delicious meal with care. Enjoy your Campus Bite experience!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
