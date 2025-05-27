
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Phone, Mail, MessageCircle, HelpCircle } from 'lucide-react';

const Info = () => {
  const canteenInfo = [
    {
      name: 'North Campus Canteen',
      location: 'Academic Block A, Ground Floor',
      hours: '7:00 AM - 10:00 PM',
      phone: '+91 123 456 7801',
      speciality: 'North Indian Cuisine',
      features: ['Vegetarian Options', 'Halal Certified', 'Jain Food'],
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop'
    },
    {
      name: 'South Campus Delight',
      location: 'Student Center, Level 2',
      hours: '6:30 AM - 9:30 PM',
      phone: '+91 123 456 7802',
      speciality: 'South Indian Cuisine',
      features: ['Traditional Recipes', 'Filter Coffee', 'Breakfast Specials'],
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=300&h=200&fit=crop'
    },
    {
      name: 'Central Food Court',
      location: 'Main Campus, Food Court Building',
      hours: '8:00 AM - 11:00 PM',
      phone: '+91 123 456 7803',
      speciality: 'Multi-cuisine',
      features: ['Pizza Corner', 'Chinese Wok', 'Sandwich Counter'],
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=300&h=200&fit=crop'
    },
    {
      name: 'Café Corner',
      location: 'Library Building, Ground Floor',
      hours: '7:00 AM - 11:30 PM',
      phone: '+91 123 456 7804',
      speciality: 'Café & Continental',
      features: ['Study-Friendly', 'Wi-Fi Available', 'Quiet Environment'],
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop'
    }
  ];

  const faqItems = [
    {
      question: 'How do I place an order?',
      answer: 'Simply browse our menu, add items to your cart, and proceed to checkout. You\'ll receive a token number for pickup.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept UPI payments, credit/debit cards, and digital wallets like Paytm, PhonePe, and Google Pay.'
    },
    {
      question: 'How long does it take to prepare my order?',
      answer: 'Most orders are ready within 10-20 minutes. You\'ll see the estimated preparation time when ordering.'
    },
    {
      question: 'Can I cancel my order?',
      answer: 'Orders can be cancelled within 2 minutes of placing them. After that, please contact the canteen directly.'
    },
    {
      question: 'Is there a minimum order amount?',
      answer: 'No, there\'s no minimum order amount. However, a small platform fee may apply to orders under ₹50.'
    },
    {
      question: 'Do you offer student discounts?',
      answer: 'Yes! All prices on Campus Bite are already student-discounted. Special offers are available during exam periods.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Information & Support</h1>
            <p className="text-xl">Everything you need to know about Campus Bite</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">+91 123 456 7890</p>
                <p className="text-sm text-gray-500">Mon-Fri, 8 AM - 8 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">support@campusbite.edu</p>
                <p className="text-sm text-gray-500">24/7 Response</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Available on app</p>
                <p className="text-sm text-gray-500">Quick responses</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Student Center, Room 101</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 5 PM</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Canteen Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Canteen Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {canteenInfo.map((canteen, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={canteen.image} 
                    alt={canteen.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{canteen.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{canteen.speciality}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{canteen.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{canteen.hours}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">{canteen.phone}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {canteen.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Campus Bite Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Browse & Select</h3>
              <p className="text-gray-600">Choose from 40+ delicious items across 4 canteens</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Order & Pay</h3>
              <p className="text-gray-600">Add to cart, checkout, and pay securely online</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Get Token</h3>
              <p className="text-gray-600">Receive your unique token number instantly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pickup & Enjoy</h3>
              <p className="text-gray-600">Show your token and collect your fresh meal</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            <HelpCircle className="h-8 w-8 inline mr-3" />
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button size="lg">Contact Support</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Info;
