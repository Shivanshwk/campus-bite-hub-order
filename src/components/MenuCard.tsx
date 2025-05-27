
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { MenuItem } from '@/data/menuData';
import { Heart, Plus, Star, Clock, Leaf } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { isAuthenticated } = useAuth();
  const isInWishlistItem = isInWishlist(item.id);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to add items to cart.",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      canteenId: item.canteenId,
      canteenName: item.canteenName,
      image: item.image
    });

    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to add items to wishlist.",
        variant: "destructive",
      });
      return;
    }

    if (isInWishlistItem) {
      removeFromWishlist(item.id);
      toast({
        title: "Removed from Wishlist",
        description: `${item.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist({
        id: item.id,
        name: item.name,
        price: item.price,
        canteenId: item.canteenId,
        canteenName: item.canteenName,
        image: item.image
      });
      toast({
        title: "Added to Wishlist",
        description: `${item.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
            isInWishlistItem 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
          }`}
        >
          <Heart className={`h-4 w-4 ${isInWishlistItem ? 'fill-current' : ''}`} />
        </button>
        {item.isVeg && (
          <div className="absolute top-2 left-2 bg-green-500 text-white p-1 rounded">
            <Leaf className="h-3 w-3" />
          </div>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium ml-1">{item.rating}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4" />
            <span className="text-sm ml-1">{item.preparationTime}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-green-600">₹{item.price}</span>
            <Badge variant="outline" className="text-xs w-fit">
              {item.canteenName}
            </Badge>
          </div>
          <Badge variant="secondary" className="text-xs">
            {item.category}
          </Badge>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
