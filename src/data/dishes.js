export const dishes = [
  {
    id: 'cheese-burger-deluxe',
    name: 'Cheese Burger Deluxe',
    category: 'Burger',
    price: 27,
    rating: 4.7,
    reviews: '11K+',
    calories: 510,
    time: '10 min',
    accent: 'bg-[#f15a38]',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    description:
      'A juicy grilled beef patty layered with melted cheddar, crisp lettuce, tomato, pickles, and a smoky house sauce on a toasted sesame bun.',
  },
  {
    id: 'pepperoni-pizza',
    name: 'Pepperoni Pizza',
    category: 'Pizza',
    price: 24,
    rating: 4.8,
    reviews: '8K+',
    calories: 640,
    time: '18 min',
    accent: 'bg-[#f39a25]',
    image:
      'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80',
    description:
      'Stone-baked pizza with curled pepperoni, mozzarella, basil, and a bright tomato sauce finished with a light chile oil.',
  },
  {
    id: 'sesame-noodles',
    name: 'Sesame Noodles',
    category: 'Noodle',
    price: 19,
    rating: 4.5,
    reviews: '6K+',
    calories: 430,
    time: '12 min',
    accent: 'bg-[#5cac79]',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80',
    description:
      'Springy noodles tossed in roasted sesame sauce with scallions, greens, soft egg, and a savory chile crisp finish.',
  },
  {
    id: 'garlic-steak',
    name: 'Garlic Butter Steak',
    category: 'Steak',
    price: 32,
    rating: 4.6,
    reviews: '5K+',
    calories: 720,
    time: '22 min',
    accent: 'bg-[#202020]',
    image:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80',
    description:
      'Seared steak basted with garlic butter and herbs, served with charred greens, pepper jus, and crispy potatoes.',
  },
  {
    id: 'salmon-sushi-set',
    name: 'Salmon Sushi Set',
    category: 'Sushi',
    price: 29,
    rating: 4.9,
    reviews: '9K+',
    calories: 390,
    time: '15 min',
    accent: 'bg-[#e85c72]',
    image:
      'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80',
    description:
      'Fresh salmon nigiri and maki with seasoned rice, avocado, cucumber, wasabi, pickled ginger, and soy glaze.',
  },
]

export const getDishById = (dishId) => dishes.find((dish) => dish.id === dishId)
