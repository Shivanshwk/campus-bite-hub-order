
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Clock, Shield, Heart, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Pre-order your meals and skip the long queues during peak hours.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We ensure all our partner canteens maintain the highest food safety standards.'
    },
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Built by students, for students. We understand your needs and budget.'
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Quick order processing and preparation to fit your busy schedule.'
    }
  ];

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face',
      description: 'Computer Science student passionate about solving campus problems'
    },
    {
      name: 'Rahul Kumar',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      description: 'Tech enthusiast with experience in mobile app development'
    },
    {
      name: 'Anita Patel',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      description: 'Business management student focused on streamlining operations'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Campus Bite</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Revolutionizing campus dining with smart technology and student-first approach
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Campus Bite was born from a simple observation: students waste too much time waiting in food queues when they could be studying, socializing, or pursuing their passions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We're on a mission to transform campus dining by providing a seamless, efficient, and enjoyable food ordering experience that respects students' time and budget.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-blue-600">
                  <Target className="h-5 w-5 mr-2" />
                  <span className="font-medium">Student-First Approach</span>
                </div>
                <div className="flex items-center text-green-600">
                  <Heart className="h-5 w-5 mr-2" />
                  <span className="font-medium">Community Driven</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop" 
                alt="Students dining" 
                className="rounded-lg shadow-lg"
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
            <p className="text-lg text-gray-600">We're committed to making your campus dining experience better</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 mb-6">
                Campus Bite started in 2023 when a group of computer science students at our university got tired of missing classes because of long food queues. What began as a weekend hackathon project has grown into a comprehensive solution serving thousands of students.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We partnered with all four campus canteens to create a unified platform that benefits everyone - students save time, canteens manage orders efficiently, and food waste is reduced through better demand prediction.
              </p>
              <p className="text-lg text-gray-600">
                Today, Campus Bite processes hundreds of orders daily, has helped students save thousands of hours, and continues to innovate with features like meal customization, group ordering, and sustainability tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate students behind Campus Bite</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-blue-100">
                We constantly seek new ways to improve the campus dining experience through technology and creative solutions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-blue-100">
                We believe in building a stronger campus community by connecting students, staff, and local food vendors.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-blue-100">
                We're committed to reducing food waste and promoting sustainable dining practices across campus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
