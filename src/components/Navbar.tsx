
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShoppingCart, Heart, User, LogOut, Search } from 'lucide-react';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { getTotalItems } = useCart();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const NavLinks = ({ mobile = false }) => (
    <div className={`flex ${mobile ? 'flex-col space-y-4' : 'items-center space-x-6'}`}>
      <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
        Home
      </Link>
      <Link to="/menu" className="text-gray-700 hover:text-blue-600 transition-colors">
        Menu
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
        About
      </Link>
      <Link to="/info" className="text-gray-700 hover:text-blue-600 transition-colors">
        Info
      </Link>
      
      {isAuthenticated ? (
        <>
          <Link to="/wishlist" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
            <Heart className="h-4 w-4 mr-1" />
            Wishlist
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center relative">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Cart
            {getTotalItems() > 0 && (
              <Badge variant="destructive" className="ml-1 h-5 w-5 flex items-center justify-center text-xs">
                {getTotalItems()}
              </Badge>
            )}
          </Link>
          <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
            <User className="h-4 w-4 mr-1" />
            Profile
          </Link>
          <Button variant="ghost" onClick={handleLogout} className="flex items-center">
            <LogOut className="h-4 w-4 mr-1" />
            Logout
          </Button>
        </>
      ) : (
        <div className={`flex ${mobile ? 'flex-col space-y-2' : 'space-x-2'}`}>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 rounded-lg font-bold text-xl">
              Campus Bite
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavLinks />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-2 mb-8">
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 rounded-lg font-bold">
                      Campus Bite
                    </div>
                  </div>
                  <NavLinks mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
