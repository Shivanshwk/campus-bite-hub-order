
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import MenuCard from '@/components/MenuCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { menuData, getMenuByCanteen, getAllCanteens } from '@/data/menuData';
import { Search, Filter } from 'lucide-react';

const Menu = () => {
  const { canteenId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCanteen, setSelectedCanteen] = useState(canteenId || 'all');
  const [isVegOnly, setIsVegOnly] = useState(false);

  const canteens = getAllCanteens();
  
  // Get menu items based on selected canteen
  const menuItems = selectedCanteen === 'all' 
    ? menuData 
    : getMenuByCanteen(selectedCanteen);

  // Filter menu items
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesVeg = !isVegOnly || item.isVeg;
    
    return matchesSearch && matchesCategory && matchesVeg;
  });

  // Get unique categories
  const categories = [...new Set(menuItems.map(item => item.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              {selectedCanteen !== 'all' 
                ? canteens.find(c => c.id === selectedCanteen)?.name || 'Menu'
                : 'All Campus Menus'
              }
            </h1>
            <p className="text-xl">Discover delicious meals from our campus canteens</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Canteen Filter */}
            <Select value={selectedCanteen} onValueChange={setSelectedCanteen}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Canteen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Canteens</SelectItem>
                {canteens.map(canteen => (
                  <SelectItem key={canteen.id} value={canteen.id}>
                    {canteen.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Veg Filter */}
            <Button
              variant={isVegOnly ? "default" : "outline"}
              onClick={() => setIsVegOnly(!isVegOnly)}
              className="whitespace-nowrap"
            >
              <Filter className="h-4 w-4 mr-2" />
              Veg Only
            </Button>
          </div>

          {/* Active Filters */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {searchTerm && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Search: {searchTerm}
                <button onClick={() => setSearchTerm('')} className="ml-1 hover:text-red-500">×</button>
              </Badge>
            )}
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Category: {selectedCategory}
                <button onClick={() => setSelectedCategory('all')} className="ml-1 hover:text-red-500">×</button>
              </Badge>
            )}
            {isVegOnly && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Veg Only
                <button onClick={() => setIsVegOnly(false)} className="ml-1 hover:text-red-500">×</button>
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No items found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setIsVegOnly(false);
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map(item => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
