
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  preparationTime: string;
  isVeg: boolean;
  canteenId: string;
  canteenName: string;
}

export const menuData: MenuItem[] = [
  // North Campus Canteen
  {
    id: 'nc-1',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken pieces',
    price: 120,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
    rating: 4.5,
    preparationTime: '15-20 mins',
    isVeg: false,
    canteenId: 'north-canteen',
    canteenName: 'North Campus Canteen'
  },
  {
    id: 'nc-2',
    name: 'Paneer Butter Masala',
    description: 'Rich and creamy paneer curry with aromatic spices',
    price: 100,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
    rating: 4.6,
    preparationTime: '12-15 mins',
    isVeg: true,
    canteenId: 'north-canteen',
    canteenName: 'North Campus Canteen'
  },
  {
    id: 'nc-3',
    name: 'Chole Bhature',
    description: 'Spicy chickpea curry with fluffy fried bread',
    price: 80,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=300&fit=crop',
    rating: 4.4,
    preparationTime: '10-12 mins',
    isVeg: true,
    canteenId: 'north-canteen',
    canteenName: 'North Campus Canteen'
  },
  {
    id: 'nc-4',
    name: 'Aloo Paratha',
    description: 'Stuffed potato flatbread served with curd and pickle',
    price: 60,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    rating: 4.3,
    preparationTime: '8-10 mins',
    isVeg: true,
    canteenId: 'north-canteen',
    canteenName: 'North Campus Canteen'
  },
  {
    id: 'nc-5',
    name: 'Rajma Rice',
    description: 'Kidney bean curry served with steamed basmati rice',
    price: 85,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
    rating: 4.2,
    preparationTime: '10-15 mins',
    isVeg: true,
    canteenId: 'north-canteen',
    canteenName: 'North Campus Canteen'
  },
  {
    id: 'nc-6',
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice with spiced chicken and herbs',
    price: 140,
    category: 'Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03246966888e?w=400&h=300&fit=crop',
    rating: 4.7,
    preparationTime: '20-25 mins',
    isVeg: false,
    canteenId: 'north-canteen',
    canteenName: 'North Campus Canteen'
  },
  {
    id: 'nc-7',
    name: 'Lassi',
    description: 'Traditional yogurt-based drink, sweet or salty',
    price: 30,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1553787996-8a7f3fb419e7?w=400&h=300&fit=crop',
    rating: 4.1,
    preparationTime: '2-3 mins',
    isVeg: true,
    canteenId: 'north-canteen',
    canteenName: 'North Campus Canteen'
  },
  {
    id: 'nc-8',
    name: 'Tandoori Roti',
    description: 'Clay oven baked whole wheat flatbread',
    price: 15,
    category: 'Bread',
    image: 'https://images.unsplash.com/photo-1569197388127-016d9c89ad5d?w=400&h=300&fit=crop',
    rating: 4.0,
    preparationTime: '5-7 mins',
    isVeg: true,
    canteenId: 'north-canteen',
    canteenName: 'North Campus Canteen'
  },
  {
    id: 'nc-9',
    name: 'Dal Fry',
    description: 'Tempered yellow lentils with aromatic spices',
    price: 50,
    category: 'Dal',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
    rating: 4.2,
    preparationTime: '8-10 mins',
    isVeg: true,
    canteenId: 'north-canteen',
    canteenName: 'North Campus Canteen'
  },
  {
    id: 'nc-10',
    name: 'Samosa Chat',
    description: 'Crispy samosas topped with chutneys and yogurt',
    price: 40,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    rating: 4.3,
    preparationTime: '5-8 mins',
    isVeg: true,
    canteenId: 'north-canteen',
    canteenName: 'North Campus Canteen'
  },

  // South Campus Delight
  {
    id: 'sc-1',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato mixture',
    price: 70,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=300&fit=crop',
    rating: 4.8,
    preparationTime: '10-12 mins',
    isVeg: true,
    canteenId: 'south-canteen',
    canteenName: 'South Campus Delight'
  },
  {
    id: 'sc-2',
    name: 'Idli Sambar',
    description: 'Steamed rice cakes served with lentil curry',
    price: 50,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
    rating: 4.6,
    preparationTime: '8-10 mins',
    isVeg: true,
    canteenId: 'south-canteen',
    canteenName: 'South Campus Delight'
  },
  {
    id: 'sc-3',
    name: 'Rava Upma',
    description: 'Semolina porridge with vegetables and spices',
    price: 45,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop',
    rating: 4.2,
    preparationTime: '7-9 mins',
    isVeg: true,
    canteenId: 'south-canteen',
    canteenName: 'South Campus Delight'
  },
  {
    id: 'sc-4',
    name: 'Coconut Chutney',
    description: 'Fresh coconut chutney with curry leaves',
    price: 20,
    category: 'Accompaniment',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',
    rating: 4.4,
    preparationTime: '2-3 mins',
    isVeg: true,
    canteenId: 'south-canteen',
    canteenName: 'South Campus Delight'
  },
  {
    id: 'sc-5',
    name: 'Vada Sambar',
    description: 'Deep-fried lentil donuts in spicy lentil soup',
    price: 55,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop',
    rating: 4.5,
    preparationTime: '8-10 mins',
    isVeg: true,
    canteenId: 'south-canteen',
    canteenName: 'South Campus Delight'
  },
  {
    id: 'sc-6',
    name: 'Rasam Rice',
    description: 'Tangy tamarind soup with rice and spices',
    price: 60,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
    rating: 4.3,
    preparationTime: '10-12 mins',
    isVeg: true,
    canteenId: 'south-canteen',
    canteenName: 'South Campus Delight'
  },
  {
    id: 'sc-7',
    name: 'Filter Coffee',
    description: 'Authentic South Indian filter coffee',
    price: 25,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    rating: 4.7,
    preparationTime: '3-5 mins',
    isVeg: true,
    canteenId: 'south-canteen',
    canteenName: 'South Campus Delight'
  },
  {
    id: 'sc-8',
    name: 'Uttapam',
    description: 'Thick rice pancake with vegetables',
    price: 65,
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',
    rating: 4.4,
    preparationTime: '12-15 mins',
    isVeg: true,
    canteenId: 'south-canteen',
    canteenName: 'South Campus Delight'
  },
  {
    id: 'sc-9',
    name: 'Curd Rice',
    description: 'Cooling yogurt rice with curry leaves and mustard seeds',
    price: 40,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop',
    rating: 4.1,
    preparationTime: '5-7 mins',
    isVeg: true,
    canteenId: 'south-canteen',
    canteenName: 'South Campus Delight'
  },
  {
    id: 'sc-10',
    name: 'Pongal',
    description: 'Savory rice and lentil dish with black pepper',
    price: 50,
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop',
    rating: 4.2,
    preparationTime: '8-10 mins',
    isVeg: true,
    canteenId: 'south-canteen',
    canteenName: 'South Campus Delight'
  },

  // Central Food Court
  {
    id: 'cf-1',
    name: 'Chicken Burger',
    description: 'Grilled chicken patty with lettuce and mayo',
    price: 110,
    category: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    rating: 4.4,
    preparationTime: '12-15 mins',
    isVeg: false,
    canteenId: 'central-food-court',
    canteenName: 'Central Food Court'
  },
  {
    id: 'cf-2',
    name: 'Veg Pizza',
    description: 'Cheesy vegetable pizza with bell peppers and olives',
    price: 150,
    category: 'Italian',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    rating: 4.3,
    preparationTime: '15-20 mins',
    isVeg: true,
    canteenId: 'central-food-court',
    canteenName: 'Central Food Court'
  },
  {
    id: 'cf-3',
    name: 'Schezwan Noodles',
    description: 'Spicy stir-fried noodles with vegetables',
    price: 90,
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop',
    rating: 4.2,
    preparationTime: '10-12 mins',
    isVeg: true,
    canteenId: 'central-food-court',
    canteenName: 'Central Food Court'
  },
  {
    id: 'cf-4',
    name: 'Chicken Fried Rice',
    description: 'Wok-tossed rice with chicken and vegetables',
    price: 100,
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    rating: 4.1,
    preparationTime: '12-15 mins',
    isVeg: false,
    canteenId: 'central-food-court',
    canteenName: 'Central Food Court'
  },
  {
    id: 'cf-5',
    name: 'French Fries',
    description: 'Crispy golden potato fries with seasoning',
    price: 60,
    category: 'Snacks',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop',
    rating: 4.0,
    preparationTime: '8-10 mins',
    isVeg: true,
    canteenId: 'central-food-court',
    canteenName: 'Central Food Court'
  },
  {
    id: 'cf-6',
    name: 'Paneer Wrap',
    description: 'Grilled paneer wrapped in soft tortilla with veggies',
    price: 80,
    category: 'Wraps',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    rating: 4.3,
    preparationTime: '10-12 mins',
    isVeg: true,
    canteenId: 'central-food-court',
    canteenName: 'Central Food Court'
  },
  {
    id: 'cf-7',
    name: 'Cold Coffee',
    description: 'Chilled coffee with ice cream and whipped cream',
    price: 70,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    rating: 4.4,
    preparationTime: '5-7 mins',
    isVeg: true,
    canteenId: 'central-food-court',
    canteenName: 'Central Food Court'
  },
  {
    id: 'cf-8',
    name: 'Pasta Arrabbiata',
    description: 'Spicy tomato pasta with herbs and parmesan',
    price: 120,
    category: 'Italian',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
    rating: 4.2,
    preparationTime: '15-18 mins',
    isVeg: true,
    canteenId: 'central-food-court',
    canteenName: 'Central Food Court'
  },
  {
    id: 'cf-9',
    name: 'Chicken Sandwich',
    description: 'Toasted sandwich with grilled chicken and cheese',
    price: 85,
    category: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&h=300&fit=crop',
    rating: 4.1,
    preparationTime: '8-10 mins',
    isVeg: false,
    canteenId: 'central-food-court',
    canteenName: 'Central Food Court'
  },
  {
    id: 'cf-10',
    name: 'Mango Smoothie',
    description: 'Fresh mango smoothie with yogurt and honey',
    price: 55,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1553787996-8a7f3fb419e7?w=400&h=300&fit=crop',
    rating: 4.5,
    preparationTime: '3-5 mins',
    isVeg: true,
    canteenId: 'central-food-court',
    canteenName: 'Central Food Court'
  },

  // Café Corner
  {
    id: 'cc-1',
    name: 'Cappuccino',
    description: 'Rich espresso with steamed milk and foam',
    price: 80,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    rating: 4.6,
    preparationTime: '5-7 mins',
    isVeg: true,
    canteenId: 'cafe-corner',
    canteenName: 'Café Corner'
  },
  {
    id: 'cc-2',
    name: 'Chocolate Croissant',
    description: 'Flaky pastry filled with rich chocolate',
    price: 90,
    category: 'Pastry',
    image: 'https://images.unsplash.com/photo-1555507036-ab794f1223d9?w=400&h=300&fit=crop',
    rating: 4.4,
    preparationTime: '3-5 mins',
    isVeg: true,
    canteenId: 'cafe-corner',
    canteenName: 'Café Corner'
  },
  {
    id: 'cc-3',
    name: 'Club Sandwich',
    description: 'Triple-layer sandwich with chicken, bacon, and veggies',
    price: 140,
    category: 'Continental',
    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&h=300&fit=crop',
    rating: 4.5,
    preparationTime: '12-15 mins',
    isVeg: false,
    canteenId: 'cafe-corner',
    canteenName: 'Café Corner'
  },
  {
    id: 'cc-4',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with caesar dressing and croutons',
    price: 110,
    category: 'Salad',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    rating: 4.3,
    preparationTime: '8-10 mins',
    isVeg: true,
    canteenId: 'cafe-corner',
    canteenName: 'Café Corner'
  },
  {
    id: 'cc-5',
    name: 'Blueberry Muffin',
    description: 'Soft and fluffy muffin loaded with fresh blueberries',
    price: 70,
    category: 'Pastry',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop',
    rating: 4.2,
    preparationTime: '2-3 mins',
    isVeg: true,
    canteenId: 'cafe-corner',
    canteenName: 'Café Corner'
  },
  {
    id: 'cc-6',
    name: 'Iced Tea',
    description: 'Refreshing lemon iced tea with mint',
    price: 50,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    rating: 4.1,
    preparationTime: '3-5 mins',
    isVeg: true,
    canteenId: 'cafe-corner',
    canteenName: 'Café Corner'
  },
  {
    id: 'cc-7',
    name: 'Chicken Quesadilla',
    description: 'Grilled tortilla with chicken, cheese, and peppers',
    price: 130,
    category: 'Continental',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
    rating: 4.4,
    preparationTime: '10-12 mins',
    isVeg: false,
    canteenId: 'cafe-corner',
    canteenName: 'Café Corner'
  },
  {
    id: 'cc-8',
    name: 'Hot Chocolate',
    description: 'Rich and creamy hot chocolate with marshmallows',
    price: 75,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1542990253-0b8314b05435?w=400&h=300&fit=crop',
    rating: 4.3,
    preparationTime: '5-7 mins',
    isVeg: true,
    canteenId: 'cafe-corner',
    canteenName: 'Café Corner'
  },
  {
    id: 'cc-9',
    name: 'Pancakes',
    description: 'Fluffy pancakes served with maple syrup and butter',
    price: 95,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop',
    rating: 4.5,
    preparationTime: '10-12 mins',
    isVeg: true,
    canteenId: 'cafe-corner',
    canteenName: 'Café Corner'
  },
  {
    id: 'cc-10',
    name: 'Grilled Cheese',
    description: 'Classic grilled cheese sandwich with tomato soup',
    price: 85,
    category: 'Continental',
    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&h=300&fit=crop',
    rating: 4.0,
    preparationTime: '8-10 mins',
    isVeg: true,
    canteenId: 'cafe-corner',
    canteenName: 'Café Corner'
  }
];

export const getMenuByCanteen = (canteenId: string) => {
  return menuData.filter(item => item.canteenId === canteenId);
};

export const getAllCanteens = () => {
  const canteens = [
    { id: 'north-canteen', name: 'North Campus Canteen' },
    { id: 'south-canteen', name: 'South Campus Delight' },
    { id: 'central-food-court', name: 'Central Food Court' },
    { id: 'cafe-corner', name: 'Café Corner' }
  ];
  return canteens;
};
