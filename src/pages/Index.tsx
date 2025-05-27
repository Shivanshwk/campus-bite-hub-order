
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Clock, MapPin, Star, Users, Utensils, Shield } from 'lucide-react';

const Index = () => {
  const canteens = [
    {
      id: 'north-canteen',
      name: 'North Campus Canteen',
      description: 'Traditional Indian cuisine & street food',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop',
      rating: 4.5,
      speciality: 'North Indian',
      openTime: '7:00 AM - 10:00 PM'
    },
    {
      id: 'south-canteen',
      name: 'South Campus Delight',
      description: 'Authentic South Indian delicacies',
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=250&fit=crop',
      rating: 4.7,
      speciality: 'South Indian',
      openTime: '6:30 AM - 9:30 PM'
    },
    {
      id: 'central-food-court',
      name: 'Central Food Court',
      description: 'Multi-cuisine food court with variety',
      image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=250&fit=crop',
      rating: 4.3,
      speciality: 'Multi-cuisine',
      openTime: '8:00 AM - 11:00 PM'
    },
    {
      id: 'cafe-corner',
      name: 'Café Corner',
      description: 'Coffee, snacks & continental cuisine',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=250&fit=crop',
      rating: 4.4,
      speciality: 'Café & Continental',
      openTime: '7:00 AM - 11:30 PM'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Pre-order your meals and skip the queue'
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: '4 canteens across the campus'
    },
    {
      icon: Users,
      title: 'Student Friendly',
      description: 'Affordable prices for students'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Fresh ingredients and hygienic preparation'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Campus <span className="text-yellow-300">Bite</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Skip the rush, savor the taste! Order your favorite campus meals online and pick them up with a token.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                  <Utensils className="mr-2 h-5 w-5" />
                  Order Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Favorite Food</h2>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search for dishes, canteens..." 
                className="pl-10 py-3 text-lg"
                onClick={() => window.location.href = '/menu'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Campus Bite?</h2>
            <p className="text-lg text-gray-600">Experience hassle-free campus dining</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canteens Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Campus Canteens</h2>
            <p className="text-lg text-gray-600">Discover delicious meals from across campus</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {canteens.map((canteen) => (
              <Card key={canteen.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={canteen.image} 
                    alt={canteen.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{canteen.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{canteen.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{canteen.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="secondary">{canteen.speciality}</Badge>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {canteen.openTime}
                    </p>
                    <Link to={`/menu/${canteen.id}`}>
                      <Button className="w-full mt-3">View Menu</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8">Join thousands of students who are already saving time with Campus Bite</p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Campus Bite</h3>
              <p className="text-gray-400">Making campus dining convenient, one order at a time.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/menu" className="block text-gray-400 hover:text-white">Menu</Link>
                <Link to="/about" className="block text-gray-400 hover:text-white">About Us</Link>
                <Link to="/info" className="block text-gray-400 hover:text-white">Contact Info</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: support@campusbite.edu</p>
              <p className="text-gray-400">Phone: +91 123 456 7890</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Campus Bite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
