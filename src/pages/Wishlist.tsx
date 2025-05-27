
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import MenuCard from '@/components/MenuCard';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';

const Wishlist = () => {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Heart className="h-24 w-24 text-gray-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Wishlist is Empty</h1>
            <p className="text-lg text-gray-600 mb-8">
              Save your favorite dishes to your wishlist for easy access.
            </p>
            <Link to="/menu">
              <Button size="lg">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Browse Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">My Wishlist</h1>
            <p className="text-xl">
              {items.length} {items.length === 1 ? 'item' : 'items'} in your wishlist
            </p>
          </div>
        </div>
      </section>

      {/* Wishlist Items */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map(item => (
              <MenuCard 
                key={item.id} 
                item={{
                  ...item,
                  description: '',
                  category: '',
                  rating: 4.5,
                  preparationTime: '10-15 mins',
                  isVeg: true
                }} 
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button size="lg" variant="outline">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
